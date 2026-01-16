import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../supabase";
import type { NewWorkspaceData } from "../../app/dashboard/lib/new-workspace-schema";
import toast from "react-hot-toast";
import { WORKSPACES_QUERY_KEY } from "../utils/query-keys";
import useUser from "./useUser";

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();

  return useMutation({
    mutationFn: async (workspace: NewWorkspaceData) => {
      const { data, error } = await supabase
        .from("workspace")
        .insert({ ...workspace, owner_id: user?.id, status: "active" })
        .select();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: (_, workspace) => {
      toast.success(`Workspace ${workspace.name} created successfully`);
      queryClient.invalidateQueries({ queryKey: [WORKSPACES_QUERY_KEY] });
    },
    onError: (error) => {
      toast.error(error.message ?? "Error creating workspace");
    },
  });
};

export const useWorkspaces = () => {
  return useQuery({
    queryKey: [WORKSPACES_QUERY_KEY],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("workspace")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
};
