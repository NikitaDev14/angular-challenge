import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Trade } from '../../models/stock.models';

@Component({
  selector: 'app-watch-list-component',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchListComponent {
  @Input() subscriptions$: Observable<Trade[]>;

  @Output() onUnsubscribe: EventEmitter<void> = new EventEmitter();

  public trackFn(index: number, item: Trade): string {
    return item.symbol;
  }

  public unsubscribe() {
    this.onUnsubscribe.emit();
  }
}
