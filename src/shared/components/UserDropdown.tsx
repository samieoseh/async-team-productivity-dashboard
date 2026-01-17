import { Popover, Typography } from "@mui/material";
import useUser from "../hooks/useUser";
import { useState } from "react";
import { LogOut, LucideSettings, LucideUser, LucideUsers } from "lucide-react";
import supabase from "../supabase";
import { useNavigate } from "react-router";

export default function UserDropdown() {
  const { user } = useUser();
  const navigate = useNavigate()
  const userPhoto = user?.user_metadata.avatar_url;
  const displayName = user?.user_metadata.display_name;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = async () => {
    const result = await supabase.auth.signOut();
    if (result.error) {
      console.error(result.error.message);
    } else {
        navigate("/auth/sign-in")
        handleClose();
    }
  }
  return (
    <div>
      <button className="cursor-pointer" onClick={handleClick}>
        <UserAvatar
          userPhoto={userPhoto}
          displayName={displayName}
          size="medium"
        />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            borderRadius: 1,
            marginTop: 1,
            width: 300,
          },
        }}
      >
        <div>
          <div className="p-4">
            <div className="flex gap-4 items-center">
              <div>
                <UserAvatar
                  userPhoto={userPhoto}
                  displayName={displayName}
                  size="large"
                />
              </div>
              <div className="flex-1">
                <Typography>{displayName}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={13}
                >
                  {user?.email}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="bg-gray-300 inline-block p-1 rounded-xs"
                  fontSize={10}
                >
                  MEMBER
                </Typography>
              </div>
            </div>
          </div>
          <hr className="border-t border-slate-200" />
          <div>
            <div className="p-4 flex flex-col gap-4">
              <Typography variant="body2" className="flex items-center gap-4">
                <LucideUser size={20} />
                Profile Settings
              </Typography>
              <Typography variant="body2" className="flex items-center gap-4">
                <LucideSettings size={20} />
                Preferences
              </Typography>
              <Typography variant="body2" className="flex items-center gap-4">
                <LucideUsers size={20} />
                Team Members
              </Typography>
            </div>
          </div>
          <hr className="border-t border-slate-200" />
          <div className="p-2">
            <button
              className="p-2 rounded-md flex gap-2 items-cente cursor-pointer w-full hover:bg-red-500/10"
              onClick={handleLogout}
            >
              <Typography
                variant="body2"
                className="flex items-center gap-4"
                color="red"
              >
                <LogOut color="red" size={20} />
                Log Out
              </Typography>
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export function UserAvatar({
  userPhoto,
  displayName,
  size = "medium",
}: {
  userPhoto?: string;
  displayName: string;
  size?: "small" | "medium" | "large";
}) {
  const sizesMap = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  };
  return (
    <div className={sizesMap[size] + " rounded-full overflow-hidden"}>
      {userPhoto ? (
        <img
          src={userPhoto}
          alt={displayName}
          className="w-full h-full rounded-full"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-blue-400">
          <p className="text-white font-bold">{displayName[0].toUpperCase()}</p>
        </div>
      )}
    </div>
  );
}
