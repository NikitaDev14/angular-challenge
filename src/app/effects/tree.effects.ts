import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RemovedAction, GENERATE_ACTION, GenerateAction, GeneratedAction, REMOVE_ACTION } from 'src/app/actions/tree.action';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { TreeService } from 'src/app/services/tree.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { selectMenuContext } from 'src/app/selectors/menu.selectors';
import { FactoryNode, GenerateTreePayload } from 'src/app/models/tree.models';

@Injectable()
export class TreeEffects {
  @Effect()
  generateTree$ = this.actions$.pipe(
    ofType(GENERATE_ACTION),
    map((action: GenerateAction) => action.payload),
    withLatestFrom(this.store$.select(selectMenuContext)),
    switchMap(([payload, actionContex]: [GenerateTreePayload, FactoryNode]) => {
      return of(
        new GeneratedAction({
          tree: this.treeService.generate(actionContex, payload),
          contextNode: actionContex,
        }),
      );
    }),
  );

  @Effect()
  removeNode$ = this.actions$.pipe(
    ofType(REMOVE_ACTION),
    withLatestFrom(this.store$.select(selectMenuContext)),
    switchMap(([action, actionContex]: [never, FactoryNode]) => {
      return of(
        new RemovedAction(actionContex),
      );
    }),
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private treeService: TreeService,
  ) { }
}
