import { TreeState } from 'src/app/states/tree.state';
import { MenuState } from 'src/app/states/menu.state';

export interface AppState {
  tree: TreeState;
  menu: MenuState;
}
