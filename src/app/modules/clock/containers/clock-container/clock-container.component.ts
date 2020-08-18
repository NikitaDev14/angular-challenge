import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { shareReplay } from 'rxjs/operators';

import { selectDividersAnimationEnabled, selectShowSeconds } from '../../selectors/clock.selectors';
import { EnableDividersAnimationAction, ShowSecondsAction } from '../../actions/clock.actions';
import { ClockFeatureState } from '../../states';

@Component({
  selector: 'app-clock',
  templateUrl: './clock-container.component.html',
  styleUrls: ['./clock-container.component.scss']
})
export class ClockContainer implements OnInit {

  showSeconds$: Observable<boolean>;
  dividersAnimationEnabled$: Observable<boolean>;

  constructor(
    private store: Store<ClockFeatureState>,
  ) { }

  ngOnInit(): void {
    this.showSeconds$ = this.store.select(selectShowSeconds).pipe(
      shareReplay(1),
    );

    this.dividersAnimationEnabled$ = this.store.select(selectDividersAnimationEnabled);
  }

  showSecondsChanged(showSeconds: boolean) {
    this.store.dispatch(new ShowSecondsAction(showSeconds));
  }

  dividersAnimationSettingChanged(enableAnimation: boolean) {
    this.store.dispatch(new EnableDividersAnimationAction(enableAnimation));
  }

}
