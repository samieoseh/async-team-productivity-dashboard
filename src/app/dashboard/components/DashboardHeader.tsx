import Logo from "../../../shared/components/ui/Logo";
import { useWorkspaces } from "../../../shared/hooks/workspace.hook";
import { useWorkspaceStore } from "../../../shared/store/workspace";
import WorkspaceDropdown from "./WorkspaceDropdown";

export default function DashboardHeader() {
  const { selectedWorkspaceId, setSelectedWorkspaceId } = useWorkspaceStore();

  const { data: workspaces = [] } = useWorkspaces();
  return (
    <div className="py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Logo showName={false} />
        <WorkspaceDropdown
          workspaces={workspaces}
          selectedWorkspaceId={selectedWorkspaceId}
          setSelectedWorkspaceId={setSelectedWorkspaceId}
        />
      </div>
    </div>
  );
}
