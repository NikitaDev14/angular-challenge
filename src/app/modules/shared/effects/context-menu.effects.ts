import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ContextMenuService } from '../services/context-menu.service';
import { CloseAction, SUBSCRIBE_TO_GLOBAL_CLICK_ACTION } from '../actions/context-menu.actions';

@Injectable()
export class ContextMenuEffects {

  @Effect()
  subscribeToGlobalClick$ = this.actions$.pipe(
    ofType(SUBSCRIBE_TO_GLOBAL_CLICK_ACTION),
    switchMap(() =>
      this.contextMenuService.globalClick().pipe(
        mergeMap(() => of(new CloseAction())),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private contextMenuService: ContextMenuService
  ) {
  }
}
