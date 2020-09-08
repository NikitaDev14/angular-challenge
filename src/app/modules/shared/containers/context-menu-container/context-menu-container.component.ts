import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { SharedFeaturesState } from '../../states';
import { ContextMenuPosition } from '../../models/context-menu.models';
import { selectContextMenuPosition, selectContextMenuTemplate, selectIsContextMenuOpened } from '../../selectors/context-menu.selectors';
import { SubscribeToGlobalClickAction } from '../../actions/context-menu.actions';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu-container.component.html',
  styleUrls: ['./context-menu-container.component.scss']
})
export class ContextMenuContainer implements OnInit {
  position$: Observable<ContextMenuPosition>;
  isShownMenu$: Observable<boolean>;
  menuTemplate$: Observable<TemplateRef<any>>;

  constructor(
    private store: Store<SharedFeaturesState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SubscribeToGlobalClickAction());

    this.position$ = this.store.select(selectContextMenuPosition).pipe(
      shareReplay(1),
    );

    this.isShownMenu$ = this.store.select(selectIsContextMenuOpened);
    this.menuTemplate$ = this.store.select(selectContextMenuTemplate);
  }

}
