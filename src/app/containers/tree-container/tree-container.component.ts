import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildNode, FactoryNode } from 'src/app/models/entity.models';
import { selectFactories } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';

@Component({
  selector: 'app-tree-container',
  templateUrl: './tree-container.component.html',
  styleUrls: ['./tree-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeContainerComponent implements OnInit {
  treeNodes: Observable<FactoryNode[]>;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.treeNodes = this.store.select(selectFactories);
  }

  trackFactoryFn(item: FactoryNode) {
    return item.id;
  }
}
