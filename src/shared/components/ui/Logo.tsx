import { Typography } from "@mui/material";

export default function Logo({ showName = true }: { showName?: boolean }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
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
      {showName && (
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: 18,
          }}
        >
          AsyncDashboard
        </Typography>
      )}
    </div>
  );
}
