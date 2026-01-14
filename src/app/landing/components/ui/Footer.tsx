import { Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-between gap-4 py-6 text-sm text-gray-500 md:flex-row">
        <Typography variant="body2">
          © {new Date().getFullYear()} AsyncDashboard. All rights reserved.
        </Typography>
        <div className="flex flex-wrap items-center gap-4">
          <MuiLink
            component={Link}
            to="/auth/sign-in"
            underline="none"
            sx={{ fontSize: 14 }}
          >
            Sign in
          </MuiLink>
          <MuiLink
            component={Link}
            to="/auth/sign-up"
            underline="none"
            sx={{ fontSize: 14 }}
          >
            Get started
          </MuiLink>
          <MuiLink
            href="mailto:hello@example.com"
            underline="none"
            sx={{ fontSize: 14 }}
          >
            Contact
          </MuiLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
