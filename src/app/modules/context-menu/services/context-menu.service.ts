import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  public globalClick(): Observable<Event> {
    return merge(
      fromEvent(document, 'click'),
      fromEvent(document, 'contextmenu'),
    );
  }
}
