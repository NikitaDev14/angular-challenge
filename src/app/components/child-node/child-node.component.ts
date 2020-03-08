import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChildNode } from 'src/app/models/entity.models';


@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildNodeComponent {
  @Input() childNode: ChildNode;

}
