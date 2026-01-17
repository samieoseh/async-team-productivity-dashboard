import { create } from "zustand";

const STORAGE_KEY = "selectedWorkspaceId";

interface WorkspaceStore {
  selectedWorkspaceId: string | null;
  setSelectedWorkspaceId: (workspaceId: string) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedWorkspaceId:
    typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null,

  setSelectedWorkspaceId: (workspaceId) => {
    set((state) => {
      if (state.selectedWorkspaceId === workspaceId) {
        return state; // no-op
      }

      localStorage.setItem(STORAGE_KEY, workspaceId);
      return { selectedWorkspaceId: workspaceId };
    });
  },
}));
