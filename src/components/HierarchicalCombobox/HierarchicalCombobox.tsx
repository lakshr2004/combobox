import { useState } from "react"
import type { TreeNode, LoadChildren } from "./types"
import type { TreeState } from "./state"

export interface HierarchicalComboboxProps {
  data: TreeNode[]
  loadChildren?: LoadChildren
  onSelectionChange?: (selectedIds: string[]) => void
  placeholder?: string
}

export function HierarchicalCombobox({
  data,
  loadChildren,
  onSelectionChange,
  placeholder
}: HierarchicalComboboxProps) {

  const [state, setState] = useState<TreeState>({
    expanded: new Set(),
    selected: new Set(),
    loading: new Set(),
    error: new Map(),
    focusedId: null
  })

  return null
}