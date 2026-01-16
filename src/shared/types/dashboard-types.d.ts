export type WorkspaceRole = "owner" | "admin" | "member" | "viewer";

export type WorkspaceStatus = "active" | "archived" | "suspended";

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  owner_id: string;
  status: WorkspaceStatus;
  created_at: string;
  updated_at: string;
  archived_at?: string | null;
}
