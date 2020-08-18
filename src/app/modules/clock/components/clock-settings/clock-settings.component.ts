import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clock-settings',
  templateUrl: './clock-settings.component.html',
  styleUrls: ['./clock-settings.component.scss']
})
export class ClockSettingsComponent {

  @Input() showSeconds: boolean;
  @Input() dividersAnimationEnabled: boolean;

  @Output() onShowSecondsChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() onDividersAnimationChanged: EventEmitter<boolean> = new EventEmitter();

  showSecondsChanged($eventTarget: any) {
    this.onShowSecondsChanged.emit($eventTarget.checked);
  }

  dividersAnimationChanged($eventTarget: any) {
    this.onDividersAnimationChanged.emit($eventTarget.checked);
  }
}
