import { Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b bg-white border-gray-200">
      <nav className="flex justify-between w-[90%] mx-auto py-4">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center  shadow-lg shadow-blue-500/25">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: 18,
            }}
          >
            AsyncDashboard
          </Typography>
        </div>
        <div className="hidden">
          <ul>
            <li>
              <Link to={"#features"}>Features</Link>
            </li>
            <li>
              <Link to={"#pricing"}>Pricing</Link>
            </li>
            <li>
              <Link to={"#contact"}>Contact</Link>
            </li>
          </ul>

          <div>
            <Button variant="contained">Get Started</Button>
          </div>
        </div>

        <IconButton
          aria-label="menu"
          sx={{
            borderRadius: 9999, // pill-style
            backgroundColor: "transparent", // default transparent
            "&:hover": {
              backgroundColor: "#F1F5F9", // light gray hover (slate-100)
            },
            p: 1.4,
          }}
        >
          <MenuIcon />
        </IconButton>
      </nav>
    </header>
  );
};

export default Header;
