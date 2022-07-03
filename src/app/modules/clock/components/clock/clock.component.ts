import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, combineLatest, concat, timer, of, ReplaySubject } from 'rxjs';
import { first, map, shareReplay, switchMap, skip } from 'rxjs/operators';

@Component({
  selector: 'app-clock-component',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent implements OnInit {
  @Input() set showSeconds(showSeconds: boolean) {
    this.showSecondsSubject$.next(showSeconds);
  }

  @Input() set enableAnimation(enableAnimation: boolean) {
    this.enableAnimationSubject$.next(enableAnimation);
  }

  private showSecondsSubject$: ReplaySubject<boolean> = new ReplaySubject(1);
  private enableAnimationSubject$: ReplaySubject<boolean> = new ReplaySubject(1);

  public animateDivider$: Observable<boolean>;
  public currentDate$: Observable<Date>;
  public showSeconds$: Observable<boolean> = this.showSecondsSubject$.asObservable();
  public enableAnimation$: Observable<boolean> = this.enableAnimationSubject$.asObservable();

  ngOnInit(): void {
    this.currentDate$ = timer(0, 1000).pipe(
      map(() => new Date()),
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
          return concat(
            of(false),
            this.currentDate$.pipe(
              map(() => true),
              skip(1),
              first(),
            ),
          );
        }

        return of(true);
      }),
      shareReplay(1),
    );
  }
}
