import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Popover, Typography } from "@mui/material";
import { useState } from "react";
import type { WorkSpace } from "../../../shared/types/dashboard-types";
import WorkSpaceItem from "./WorkSpaceItem";
import { Plus } from "lucide-react";

export default function WorkspaceDropdown({
  workspaces,
  selectedWorkspaceId,
  setSelectedWorkspaceId,
}: {
  workspaces: WorkSpace[];
  selectedWorkspaceId: string | null;
  setSelectedWorkspaceId: (workspaceId: string) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-lg border cursor-pointer border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-colors"
      >
        <span className="truncate max-w-[140px] text-[1rem]">
          {selectedWorkspaceId
            ? workspaces.find((ws) => ws.id === selectedWorkspaceId)?.name
            : "My workspace"}
        </span>
        <KeyboardArrowDownIcon fontSize="small" className="text-slate-500" />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            borderRadius: 1,
            marginTop: 1,
            width: 250,
          },
        }}
      >
        <div className="py-2 px-4">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "medium",
              color: "gray",
              fontSize: ".8rem",
            }}
          >
            WORKSPACES
          </Typography>
          <div className="py-2 space-y-2">
            {workspaces.map((workspace) => (
              <WorkSpaceItem
                key={workspace.id}
                workspace={workspace}
                isFocused={workspace.id === selectedWorkspaceId}
                setSelectedWorkspaceId={setSelectedWorkspaceId}
              />
            ))}
          </div>
        </div>

        <hr className="border-t border-slate-200" />
        <div className="py-2 px-4">
          <button className="flex gap-2 items-center py-2.5 px-2 cursor-pointer rounded-md w-full hover:border-slate-300 hover:bg-gray-50 text-gray-500 font-semibold">
            <Plus />
            Create a workspace
          </button>
        </div>
      </Popover>
    </div>
  );
}
