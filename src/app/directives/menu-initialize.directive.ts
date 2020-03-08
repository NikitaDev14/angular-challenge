import { Directive, HostListener } from '@angular/core';
import { ContextMenuService } from 'src/app/services/context-menu.service';

@Directive({
  selector: '[appMenuInitialize]'
})
export class MenuInitializeDirective {
  constructor(
    private contextMenuService: ContextMenuService,
  ) { }

  @HostListener('contextmenu', ['$event'])
  onContextMenuCall($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();

    this.contextMenuService.openMenu($event);
  }
}
