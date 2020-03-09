import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryNode } from 'src/app/models/tree.models';
import { selectTree } from 'src/app/selectors/tree.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';

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
    this.treeNodes = this.store.select(selectTree);
  }

  trackFactoryFn(item: FactoryNode) {
    return item.id;
  }
}
