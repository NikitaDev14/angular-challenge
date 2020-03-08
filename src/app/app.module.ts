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
import { AppEffects } from 'src/app/effects';
import { TreeService } from 'src/app/services/tree.service';
import { ContextMenuService } from 'src/app/services/context-menu.service';
import { appReducers } from 'src/app/reducers';
import { TreeContainerComponent } from './containers/tree-container/tree-container.component';
import { ChildNodeComponent } from './components/child-node/child-node.component';

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
    ChildNodeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [TreeService, ContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
