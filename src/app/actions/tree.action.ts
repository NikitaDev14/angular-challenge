import { Action } from '@ngrx/store';

import { FactoryNode, TreePayload } from 'src/app/models/tree.models';

export const GENERATE_ACTION = '[TreeActions] GENERATE';
export const GENERATED_ACTION = '[TreeActions] GENERATED';
export const REMOVE_ACTION = '[TreeActions] REMOVE';
export const REMOVED_ACTION = '[TreeActions] DO_REMOVE';

export class GenerateAction implements Action {
  public readonly type = GENERATE_ACTION;
}

export class GeneratedAction implements Action {
  public readonly type = GENERATED_ACTION;
  constructor(public payload: TreePayload) { }
}

export class RemoveAction implements Action {
  public readonly type = REMOVE_ACTION;
}

export class RemovedAction implements Action {
  public readonly type = REMOVED_ACTION;
  constructor(public payload: FactoryNode) { }
}

export type TreeAction =
  GenerateAction |
  GeneratedAction |
  RemoveAction |
  RemovedAction;
