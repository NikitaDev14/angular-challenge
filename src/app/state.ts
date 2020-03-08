import { FactoryNode } from 'src/app/models/entity.models';

export interface TreeState {
  tree: FactoryNode[];
}

export interface AppState {
  tree: TreeState;
}

export const initialTreeState: TreeState = {
  tree: [],
};
