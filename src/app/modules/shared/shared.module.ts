import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GetPipe } from './pipes/get.pipe';
import { contextMenuReducers } from './reducers';
import { ContextMenuEffects } from './effects/context-menu.effects';
import { ContextMenuContainer } from './containers/context-menu-container/context-menu-container.component';
import { ContextMenuInitializeDirective } from './directives/context-menu-initialize.directive';

@NgModule({
  declarations: [
    GetPipe,
    ContextMenuContainer,
    ContextMenuInitializeDirective,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('contextMenu', contextMenuReducers),
    EffectsModule.forFeature([ContextMenuEffects]),
  ],
  exports: [
    GetPipe,
    ContextMenuContainer,
    ContextMenuInitializeDirective,
  ]
})
export class SharedModule { }
