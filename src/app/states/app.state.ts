import { TreeState } from 'src/app/states/tree.state';
import { MenuState } from 'src/app/states/menu.state';
import {ConnectionState} from 'src/app/states/connection.state';

export interface AppState {
  tree: TreeState;
  menu: MenuState;
  connection: ConnectionState;
}
