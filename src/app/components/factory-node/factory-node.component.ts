import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChildNode, FactoryNode } from 'src/app/models/tree.models';

@Component({
  selector: 'app-factory-node',
  templateUrl: './factory-node.component.html',
  styleUrls: ['./factory-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactoryNodeComponent {
  @Input() factoryNode: FactoryNode;

  trackChildFn(item: ChildNode) {
    return item.id;
  }
}
