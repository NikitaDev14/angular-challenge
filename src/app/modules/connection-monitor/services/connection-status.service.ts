import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {
  onConnectionStatusChanged(): Observable<boolean> {
    return merge(
      fromEvent(window, 'online'),
      fromEvent(window, 'offline'),
    ).pipe(
      map((event: Event) =>
        event.type === 'online',
      ),
      startWith(navigator.onLine),
      shareReplay(1),
    );
  }
}
