import { TemplateRef } from '@angular/core';

import { ContextMenuPosition } from '../models/context-menu.models';

export interface ContextMenuState {
  isOpened: boolean;
  position: Readonly<ContextMenuPosition>;
  context: any;
  menuTemplate: Readonly<TemplateRef<any>>;
}

export const initialContextMenuState: ContextMenuState = {
  isOpened: false,
  position: {
    xCoordinate: 0,
    yCoordinate: 0,
  },
  context: null,
  menuTemplate: null,
};

