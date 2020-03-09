import { initialTreeState, TreeState } from 'src/app/states/tree.state';
import { REMOVED_ACTION, GENERATED_ACTION, TreeAction } from 'src/app/actions/tree.action';
import { ChildNode, FactoryNode } from 'src/app/models/tree.models';
import { findIndexById } from 'src/app/utils';

export const treeReducer = (
  state = initialTreeState,
  action: TreeAction,
): TreeState => {
  switch (action.type) {
    case GENERATED_ACTION: {
      if (action.payload.contextNode !== null) {
        const indexToUpdate = findIndexById(state.tree, action.payload.contextNode.id);

        return {
          ...state,
          tree: [
            ...state.tree.slice(0, indexToUpdate),
            {
              ...state.tree[indexToUpdate],
              children: [
                ...action.payload.tree as ChildNode[],
              ],
            },
            ...state.tree.slice(indexToUpdate + 1),
          ],
        } as TreeState;
      }

      return {
        ...state,
        tree: [
          ...action.payload.tree as FactoryNode[],
        ],
      };
    }

    case REMOVED_ACTION: {
      const indexToRemove = findIndexById(state.tree, action.payload.id);

      return {
        ...state,
        tree: [
          ...state.tree.slice(0, indexToRemove),
          ...state.tree.slice(indexToRemove + 1),
        ],
      };
    }

    default:
      return state;
  }
};
