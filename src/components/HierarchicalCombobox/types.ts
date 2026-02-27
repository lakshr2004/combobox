export interface BaseNode {
  id: string
  label: string
  hasChildren?: boolean
}

export interface TreeNode extends BaseNode {
  children?: TreeNode[]
}

export type LoadChildren = (nodeId: string) => Promise<TreeNode[]>