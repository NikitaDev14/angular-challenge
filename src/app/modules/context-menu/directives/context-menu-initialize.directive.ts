import { Directive, HostListener, Input, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { ContextMenuFeatureState } from '../states';
import { OpenAction } from '../actions/context-menu.actions';

@Directive({
  selector: '[appContextMenuInitialize]'
})
export class ContextMenuInitializeDirective {
  @Input() context: any;
  @Input() menuTemplate: TemplateRef<any>;

  constructor(
    private store: Store<ContextMenuFeatureState>,
  ) { }

  @HostListener('contextmenu', ['$event'])
  onContextMenuCall($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();

    this.store.dispatch(new OpenAction({
      context: this.context,
      menuTemplate: this.menuTemplate,
      position: {
        xCoordinate: $event.pageX,
        yCoordinate: $event.pageY,
      },
    }));
  }
}
