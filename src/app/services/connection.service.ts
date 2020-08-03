import { Injectable } from '@angular/core';

import {
  Observable,
  fromEvent as observableFromEvent,
  merge as observableMerge,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  onConnectionStatusChanged(): Observable<Event> {
    return observableMerge(
      observableFromEvent(window, 'online'),
      observableFromEvent(window, 'offline'),
    );
  }
}
