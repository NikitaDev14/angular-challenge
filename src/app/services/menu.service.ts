import { Injectable } from '@angular/core';
import {
  fromEvent as observableFromEvent,
  merge as observableMerge,
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  globalClick(): Observable<Event> {
    return observableMerge(
      observableFromEvent(document, 'click'),
      observableFromEvent(document, 'contextmenu'),
    );
  }
}
