import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuPosition } from 'src/app/models/menu.models';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  @Input() position: MenuPosition;
  @Input() allowRemoveAction: boolean;

  @Output() generateClicked: EventEmitter<void> = new EventEmitter();
  @Output() removeClicked: EventEmitter<void> = new EventEmitter();

  generateClick() {
    this.generateClicked.emit();
  }

  removeClick() {
    this.removeClicked.emit();
  }
}
