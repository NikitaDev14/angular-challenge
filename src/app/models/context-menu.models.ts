export interface MenuPosition {
  // from the left top corner
  xCoordinate: number;
  yCoordinate: number;
}

export enum ActionContext {
  ROOT,
  FACTORY,
  CHILD
}
