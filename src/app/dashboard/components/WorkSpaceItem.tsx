import { Check } from "lucide-react";
import type { WorkSpace } from "../../../shared/types/dashboard-types";

export default function WorkSpaceItem({
  workspace,
  isFocused = false,
  setSelectedWorkspaceId,
}: {
  workspace: WorkSpace;
  isFocused?: boolean;
  setSelectedWorkspaceId: (workspaceId: string) => void;
}) {
  return (
    <div>
      <button
        className={`px-2 flex justify-between py-2.5  text-[1rem] font-medium  hover:border-slate-300 hover:bg-gray-100 focus:text-blue-500 focus:bg-blue-500/10 cursor-pointer  rounded-md transition-colors w-full text-left ${
          isFocused
            ? "text-blue-500 bg-blue-500/10"
            : "bg-gray-50 text-slate-700"
        }`}
        onClick={() => setSelectedWorkspaceId(workspace.id)}
      >
        {workspace.name}
        {isFocused && <Check size={20} />}
      </button>
    </div>
  );
}
