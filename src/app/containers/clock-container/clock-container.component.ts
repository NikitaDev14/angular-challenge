import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDividersAnimationEnabled, selectShowSeconds } from '../../selectors/clock.selectors';
import { AppState } from '../../states/app.state';
import { EnableDividersAnimationAction, ShowSecondsAction } from '../../actions/clock.actions';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock-container.component.html',
  styleUrls: ['./clock-container.component.scss']
})
export class ClockContainer implements OnInit {

  showSeconds$: Observable<boolean>;
  dividersAnimationEnabled$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
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
