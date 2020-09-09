import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GetPipe } from './pipes/get.pipe';
import { sharedReducers } from './reducers';
import { ContextMenuEffects } from './effects/context-menu.effects';
import { ContextMenuContainer } from './containers/context-menu-container/context-menu-container.component';
import { ContextMenuInitializeDirective } from './directives/context-menu-initialize.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    GetPipe,
    ContextMenuContainer,
    ContextMenuInitializeDirective,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('sharedFeatures', sharedReducers),
    EffectsModule.forFeature([ContextMenuEffects]),
  ],
  exports: [
    GetPipe,
    FilterPipe,
    ContextMenuContainer,
    ContextMenuInitializeDirective,
  ]
})
export class SharedModule { }
