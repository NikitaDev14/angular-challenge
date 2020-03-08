import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GENERATE_ACTION, GenerateAction, GeneratedAction } from 'src/app/actions';
import { map, switchMap } from 'rxjs/operators';
import { ActionContext } from 'src/app/models/context-menu.models';
import { of } from 'rxjs';
import { TreeService } from 'src/app/services/tree.service';

@Injectable()
export class AppEffects {
  @Effect()
  generateTree$ = this.actions$.pipe(
    ofType(GENERATE_ACTION),
    map((action: GenerateAction) => action.payload),
    switchMap((actionContex: ActionContext) => {

      console.log('effect');
      return of(
        new GeneratedAction(this.treeService.generate(actionContex)),
      );
    }),
  );

  constructor(
    private actions$: Actions,
    private treeService: TreeService,
  ) { }
}
