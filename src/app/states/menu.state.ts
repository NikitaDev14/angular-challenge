import { MenuPosition } from 'src/app/models/menu.models';
import { FactoryNode } from 'src/app/models/tree.models';

export interface MenuState {
  isOpened: boolean;
  position: MenuPosition;
  contextNode: FactoryNode;
}

export const initialMenuState: MenuState = {
  isOpened: false,
  position: {
    xCoordinate: 0,
    yCoordinate: 0,
  },
  contextNode: null,
};
