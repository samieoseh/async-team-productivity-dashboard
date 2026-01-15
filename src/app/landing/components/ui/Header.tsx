import { useState } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../../shared/components/ui/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b bg-white border-gray-200">
        <nav className="flex justify-between items-center w-[90%] mx-auto py-4">
          <div className="flex gap-2 items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <Link
                  to="/auth/sign-in"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Sign in
                </Link>
              </li>
            </ul>
            <Button
              variant="contained"
              component={Link}
              to="/auth/sign-up"
              size="small"
            >
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <IconButton
              aria-label="menu"
              onClick={() => setIsMenuOpen(true)}
              sx={{
                borderRadius: 9999,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#F1F5F9",
                },
                p: 1.4,
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </nav>
      </header>
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <span className="text-xs font-semibold text-white">AD</span>
              </div>
              <span className="text-sm font-semibold text-slate-800">
                AsyncDashboard
              </span>
            </div>
            <IconButton
              aria-label="close menu"
              size="small"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <nav className="flex flex-col gap-2 px-5 py-4 text-sm">
            <Link
              to="#features"
              className="py-2 text-slate-700 hover:text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="py-2 text-slate-700 hover:text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              to="/auth/sign-in"
              className="py-2 text-[#2463EB] font-semibold hover:text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
            <Button
              variant="contained"
              component={Link}
              to="/auth/sign-up"
              sx={{ mt: 2 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
