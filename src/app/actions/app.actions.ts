import { MenuActions } from 'src/app/actions/menu.actions';
import { TreeActions } from 'src/app/actions/tree.actions';
import { ConnectionActions } from 'src/app/actions/connection.actions';
import { ClockActions } from './clock.actions';

export type AppActions =
  MenuActions |
  TreeActions |
  ConnectionActions |
  ClockActions;
