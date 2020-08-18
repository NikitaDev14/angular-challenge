import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, from, Observable, of, timer } from 'rxjs';
import { concatMap, delay, map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-clock-component',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  @Input() showSeconds$: Observable<boolean>;
  @Input() enableAnimation$: Observable<boolean>;

  animateDivider$: Observable<boolean>;
  currentDate$: Observable<Date>;

  ngOnInit(): void {
    this.currentDate$ = timer(0, 1000).pipe(
      map(() =>
        new Date(),
      ),
      shareReplay(1),
    );

    this.animateDivider$ = combineLatest([
      this.showSeconds$,
      this.enableAnimation$,
    ]).pipe(
      switchMap(([showSeconds, enableAnimation]: [boolean, boolean]) => {
        if (!enableAnimation) {
          return of(false);
        }

        if (showSeconds && enableAnimation) {
          return from([false, true]).pipe(
            concatMap((value: boolean) =>
              of(value).pipe(delay(100)),
            ),
          );
        }

        return of(true);
      }),
      shareReplay(1),
    );
  }
}
