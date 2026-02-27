export interface TreeState {
  expanded: Set<string>
  selected: Set<string>
  loading: Set<string>
  error: Map<string, string>
  focusedId: string | null
}