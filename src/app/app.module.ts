import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/containers/app/app.component';
import { FactoryNodeComponent } from './components/factory-node/factory-node.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContextMenuComponent } from 'src/app/components/context-menu/context-menu.component';
import { MenuComponent } from 'src/app/containers/menu-container/menu-container.component';
import { MenuInitializeDirective } from './directives/menu-initialize.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TreeEffects } from 'src/app/effects/tree.effects.js';
import { TreeService } from 'src/app/services/tree.service';
import { MenuService } from 'src/app/services/menu.service';
import { appReducers } from 'src/app/reducers';
import { TreeContainerComponent } from './containers/tree-container/tree-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenerateFormComponent } from './components/generate-form/generate-form.component';
import {ConnectionService} from './services/connection.service';

@NgModule({
  declarations: [
    AppComponent,
    FactoryNodeComponent,
    NavbarComponent,
    MenuComponent,
    ContextMenuComponent,
    MenuComponent,
    MenuInitializeDirective,
    TreeContainerComponent,
    GenerateFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TreeEffects]),
  ],
  providers: [TreeService, MenuService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
