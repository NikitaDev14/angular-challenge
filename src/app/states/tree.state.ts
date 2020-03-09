import { FactoryNode } from 'src/app/models/tree.models';

export interface TreeState {
  tree: FactoryNode[];
}

export const initialTreeState: TreeState = {
  tree: [],
};
