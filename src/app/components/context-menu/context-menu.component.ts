import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuPosition } from 'src/app/models/menu.models';
import { GenerateTreePayload } from 'src/app/models/tree.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  @Input() position$: Observable<MenuPosition>;
  @Input() isRootContext$: Observable<boolean>;

  @Output() generateClicked: EventEmitter<GenerateTreePayload> = new EventEmitter();
  @Output() removeClicked: EventEmitter<void> = new EventEmitter();

  generateClick($event: GenerateTreePayload) {
    this.generateClicked.emit($event);
  }

  removeClick() {
    this.removeClicked.emit();
  }
}
