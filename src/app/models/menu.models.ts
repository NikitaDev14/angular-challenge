import { FactoryNode } from 'src/app/models/tree.models';

export interface MenuPosition {
  // from the left top corner
  xCoordinate: number;
  yCoordinate: number;
}

export interface OpenMenuPayload {
  contextNode: FactoryNode;
  position: MenuPosition;
}
