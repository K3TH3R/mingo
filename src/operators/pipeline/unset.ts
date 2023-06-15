import { ComputeOptions, PipelineOperator } from "../../core";
import { Iterator } from "../../lazy";
import { ensureArray } from "../../util";
import { $project } from "./project";

/**
 * Removes/excludes fields from documents.
 *
 * @param collection
 * @param expr
 * @param options
 * @returns {Iterator}
 */
export const $unset: PipelineOperator = (
  collection: Iterator,
  expr: string | string[],
  options?: ComputeOptions
): Iterator => {
  expr = ensureArray(expr) as string[];
  const doc: Record<string, number> = {};
  for (const k of expr) doc[k] = 0;
  return $project(collection, doc, options);
};
