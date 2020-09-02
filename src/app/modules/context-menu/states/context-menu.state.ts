import { ContextMenuPosition } from '../models/context-menu.models';
import { TemplateRef } from '@angular/core';

export interface ContextMenuState {
  isOpened: boolean;
  position: ContextMenuPosition;
  context: any;
  menuTemplate: TemplateRef<any>;
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

