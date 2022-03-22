import { Injectable } from '@angular/core';
import {
  Observable,
  fromEvent as observableFromEvent,
  merge as observableMerge,
} from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {
  onConnectionStatusChanged(): Observable<boolean> {
    return observableMerge(
      observableFromEvent(window, 'online'),
      observableFromEvent(window, 'offline'),
    ).pipe(
      map((event: Event) =>
        event.type === 'online',
      ),
      startWith(navigator.onLine),
    );
  }
}
