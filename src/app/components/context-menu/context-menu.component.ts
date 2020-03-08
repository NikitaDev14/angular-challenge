import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuPosition } from 'src/app/models/context-menu.models';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  @Input() position: MenuPosition;

  @Output() generateClicked: EventEmitter<void> = new EventEmitter();

  generateClick() {
    this.generateClicked.emit();
  }
}
