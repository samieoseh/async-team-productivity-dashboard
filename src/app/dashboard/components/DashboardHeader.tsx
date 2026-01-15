import Logo from "../../../shared/components/ui/Logo";
import { useWorkspaceStore } from "../../../shared/store/workspace";
import WorkspaceDropdown from "./WorkspaceDropdown";

export default function DashboardHeader() {
  const { workspaces, selectedWorkspaceId, setSelectedWorkspaceId } =
    useWorkspaceStore();

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
