import { Injectable } from '@angular/core';
import { fromEvent as observableFromEvent, merge, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  private openMenuSubject: Subject<MouseEvent>;

  constructor() {
    this.openMenuSubject = new Subject();
  }

  globalClick(): Observable<Event> {
    return merge(
      observableFromEvent(document, 'click'),
      observableFromEvent(document, 'contextmenu'),
    );
  }

  openMenu(event: MouseEvent) {
    this.openMenuSubject.next(event);
  }

  onMenuItemClick() {
    this.openMenuSubject.next(null);
  }

  onOpenMenu(): Observable<MouseEvent> {
    return this.openMenuSubject.asObservable();
  }
}
