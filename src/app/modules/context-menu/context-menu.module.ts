import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ContextMenuContainer } from './containers/context-menu-container/context-menu-container.component';
import { ContextMenuInitializeDirective } from './directives/context-menu-initialize.directive';
import { contextMenuReducers } from './reducers';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ContextMenuEffects } from './effects/context-menu.effects';

@NgModule({
  declarations: [
    ContextMenuContainer,
    ContextMenuInitializeDirective,
  ],
  exports: [
    ContextMenuContainer,
    ContextMenuInitializeDirective,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('contextMenu', contextMenuReducers),
    EffectsModule.forFeature([ContextMenuEffects]),
    SharedModule,
  ],
})
export class ContextMenuModule { }
