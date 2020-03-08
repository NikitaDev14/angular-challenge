import { Action } from '@ngrx/store';

import { ActionContext } from 'src/app/models/context-menu.models';
import { FactoryNode } from 'src/app/models/entity.models';

export const GENERATE_ACTION = '[Actions] GENERATE';
export const GENERATED_ACTION = '[Actions] GENERATED';

export class GenerateAction implements Action {
  public readonly type = GENERATE_ACTION;
  constructor(public payload: ActionContext) { }
}

export class GeneratedAction implements Action {
  public readonly type = GENERATED_ACTION;
  constructor(public payload: FactoryNode[]) { }
}

export type AppActions =
  GenerateAction |
  GeneratedAction;
