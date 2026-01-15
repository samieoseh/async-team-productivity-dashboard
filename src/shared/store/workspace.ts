import { create } from "zustand";
import type { WorkSpace } from "../types/dashboard-types";

const WORKSPACES = [
  {
    id: "1",
    name: "Product",
  },
  {
    id: "2",
    name: "Engineering",
  },
  {
    id: "3",
    name: "Marketing",
  },
];

interface WorkspaceStore {
  workspaces: WorkSpace[];
  setWorkspaces: (workspaces: WorkSpace[]) => void;
  selectedWorkspaceId: string | null;
  setSelectedWorkspaceId: (workspaceId: string) => void;
  resetWorkspaces: () => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  workspaces: WORKSPACES,
  setWorkspaces: (workspaces) => set({ workspaces }),
  selectedWorkspaceId: null,
  setSelectedWorkspaceId: (workspaceId) =>
    set({ selectedWorkspaceId: workspaceId }),
  resetWorkspaces: () => set({ workspaces: [], selectedWorkspaceId: null }),
}));
