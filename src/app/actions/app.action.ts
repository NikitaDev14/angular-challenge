import { MenuAction } from 'src/app/actions/menu.action';
import { TreeAction } from 'src/app/actions/tree.action';
import {ConnectionAction} from 'src/app/actions/connectionAction';

export type AppAction = MenuAction | TreeAction | ConnectionAction;
