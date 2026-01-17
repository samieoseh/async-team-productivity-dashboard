import { Bell } from "lucide-react";
import Logo from "../../../shared/components/ui/Logo";
import { useWorkspaces } from "../../../shared/hooks/workspace.hook";
import { useWorkspaceStore } from "../../../shared/store/workspace";
import SearchBar from "./SearchBar";
import WorkspaceDropdown from "./WorkspaceDropdown";
import UserDropdown from "../../../shared/components/UserDropdown";

export default function DashboardHeader() {
  const { selectedWorkspaceId, setSelectedWorkspaceId } = useWorkspaceStore();

  const { data: workspaces = [] } = useWorkspaces();
  return (
    <div className="py-3 gap-8 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Logo showName={true} />
        <WorkspaceDropdown
          workspaces={workspaces}
          selectedWorkspaceId={selectedWorkspaceId}
          setSelectedWorkspaceId={setSelectedWorkspaceId}
        />
      </div>
      <div className="flex-1">
        <SearchBar />
      </div>
      <div className="relative">
        <Bell size={30} />
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-500 absolute bottom-4 left-4">
          <p className="text-sm text-white">8</p>
        </div>
      </div>

      <UserDropdown />
    </div>
  );
}
