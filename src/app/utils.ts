import { FactoryNode, TreeNode } from 'src/app/models/tree.models';

export const findIndexById = (tree: TreeNode[], needleId: string): number => {
  return tree.findIndex((factoryNode: FactoryNode) => factoryNode.id === needleId);
};

export const getChildTime = (): Date => {
  const date = new Date();

  date.setHours(0, 0, 0, 0);

  return date;
};
