import { Directive, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { OpenAction } from 'src/app/actions/menu.action';
import { FactoryNode } from 'src/app/models/tree.models';

@Directive({
  selector: '[appMenuInitialize]'
})
export class MenuInitializeDirective {
  @Input() appMenuInitialize: FactoryNode;

  constructor(
    private store: Store<AppState>,
  ) { }

  @HostListener('contextmenu', ['$event'])
  onContextMenuCall($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();

    this.store.dispatch(new OpenAction({
      contextNode: this.appMenuInitialize,
      position: {
        xCoordinate: $event.pageX,
        yCoordinate: $event.pageY,
      },
    }));
  }
}
