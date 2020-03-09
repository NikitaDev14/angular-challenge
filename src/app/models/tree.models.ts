export interface ChildNode {
  id: string;
  name: string;
  startTime: Date;
  endTime: Date;
}

export interface FactoryNode {
  id: string;
  name: string;
  lowerBound: number;
  upperBound: number;
  children: ChildNode[];
}

export type TreeNode = FactoryNode | ChildNode;

export interface GenerateTreePayload {
  count: number;
  lowerBound: number;
  upperBound: number;
}

export interface TreePayload {
  tree: TreeNode[];
  contextNode: FactoryNode;
}
