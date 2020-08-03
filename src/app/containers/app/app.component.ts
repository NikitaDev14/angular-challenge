import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from 'src/app/states/app.state';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {selectIsOnline} from 'src/app/selectors/connection.selectors';
import {ConnectionService} from 'src/app/services/connection.service';
import {ConnectedAction, DisconnectedAction} from 'src/app/actions/connectionAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isOnline$: Observable<boolean>;

  private onConnectionStatusChangedSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private connectionService: ConnectionService,
  ) { }

  ngOnInit() {
    this.isOnline$ = this.store.select(selectIsOnline);

    this.onConnectionStatusChangedSubscription = this.connectionService.onConnectionStatusChanged().subscribe((event: Event) => {
      console.warn(event);

      if (event.type === 'offline') {
        this.store.dispatch(new DisconnectedAction());
      } else {
        this.store.dispatch(new ConnectedAction());
      }
    });
  }

  ngOnDestroy() {
    this.onConnectionStatusChangedSubscription.unsubscribe();
  }
}
