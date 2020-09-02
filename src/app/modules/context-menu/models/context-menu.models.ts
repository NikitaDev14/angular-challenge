import { TemplateRef } from '@angular/core';

export interface ContextMenuPosition {
  xCoordinate: number;
  yCoordinate: number;
}

export interface OpenMenuPayload {
  context: any;
  menuTemplate: TemplateRef<any>;
  position: ContextMenuPosition;
}
