export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type WorkspaceStatus = "active" | "archived" | "suspended";

export type Database = {
  public: {
    Tables: {
      workspace: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          owner_id: string;
          status: WorkspaceStatus;
          created_at: string;
          updated_at: string;
          archived_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          slug?: string;
          description?: string | null;
          owner_id?: string;
          status?: WorkspaceStatus;
          created_at?: string;
          updated_at?: string;
          archived_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          owner_id?: string;
          status?: WorkspaceStatus;
          created_at?: string;
          updated_at?: string;
          archived_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      workspace_status: WorkspaceStatus;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
