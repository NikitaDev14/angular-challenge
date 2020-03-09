import { Injectable } from '@angular/core';
import { fromEvent as observableFromEvent, merge, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  globalClick(): Observable<Event> {
    return merge(
      observableFromEvent(document, 'click'),
      observableFromEvent(document, 'contextmenu'),
    );
  }
}
