/**
 * Loads all Query and Projection operators
 */
import {
  OperatorContext,
  OperatorMap,
  OperatorType,
  useOperators
} from "../core";
import * as booleanOperators from "../operators/expression/boolean";
import * as comparisonOperators from "../operators/expression/comparison";
import { $limit, $project, $skip, $sort } from "../operators/pipeline";
import * as projectionOperators from "../operators/projection";
import * as queryOperators from "../operators/query";

useOperators(OperatorType.EXPRESSION, {
  ...booleanOperators,
  ...comparisonOperators
} as OperatorMap);
useOperators(OperatorType.PIPELINE, {
  $project,
  $skip,
  $limit,
  $sort
} as OperatorMap);
useOperators(OperatorType.PROJECTION, projectionOperators as OperatorMap);
useOperators(OperatorType.QUERY, queryOperators as OperatorMap);

/** The basic context for queries. */
export const BASIC_CONTEXT: OperatorContext = Object.freeze({
  [OperatorType.EXPRESSION]: {
    ...booleanOperators,
    ...comparisonOperators
  },
  [OperatorType.PIPELINE]: {
    $project,
    $skip,
    $limit,
    $sort
  },
  [OperatorType.PROJECTION]: projectionOperators,
  [OperatorType.QUERY]: queryOperators
});
