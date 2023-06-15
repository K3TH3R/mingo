import { AccumulatorOperator, Options } from "../../core";
import { AnyVal, RawObject } from "../../types";
import { compare, isNotNaN } from "../../util";
import { $push } from "./push";

/**
 * Returns the lowest value in a group.
 *
 * @param {Array} collection The input array
 * @param {Object} expr The right-hand side expression value of the operator
 * @param {Options} The options to use for this operator
 * @returns {*}
 */
export const $min: AccumulatorOperator = (
  collection: RawObject[],
  expr: AnyVal,
  options: Options
): AnyVal => {
  const nums = $push(collection, expr, options).filter(isNotNaN) as number[];
  const n = nums.reduce((acc, n) => (compare(n, acc) <= 0 ? n : acc), Infinity);
  return n === Infinity ? undefined : n;
};
