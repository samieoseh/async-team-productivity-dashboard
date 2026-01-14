import { AccessTime, ChevronRight, Comment, Person } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 pb-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2463EB]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3F7DF5]/10 rounded-full blur-3xl" />
      </div>
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl mx-auto lg:mx-0 flex items-center justify-center flex-col gap-4 lg:justify-start lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2463EB]/10 border border-[#2463EB]/20 text-primary text-sm font-medium w-max mb-6">
              <Person className="w-4 h-4" />
              Built for async-first teams
            </div>
            <Typography
              variant="h1"
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
                fontWeight: 900,
                lineHeight: 1.1,
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                "& span": {
                  color: "primary.main",
                },
              }}
            >
              Manage tasks
              <br /> <span>without</span>
              <br /> the meetings
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 18 }}
              className="mt-4 text-center lg:text-left text-slate-600"
            >
              An async productivity dashboard for remote teams. Track progress,
              communicate updates, and stay aligned across any time zone.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button variant="contained" endIcon={<ChevronRight />}>
                Get Started
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Typography
                  variant="body2"
                  className="flex items-center gap-2 text-slate-700"
                >
                  <AccessTime color="primary" />
                  Save 4+ hrs/week
                </Typography>
                <Typography
                  variant="body2"
                  className="flex items-center gap-2 text-slate-700"
                >
                  <Comment color="primary" />
                  100% async updates
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="mx-auto max-w-md rounded-3xl bg-white/80 backdrop-blur shadow-xl border border-slate-200 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-slate-600">
                    Sprint overview
                  </span>
                </div>
                <span className="text-xs text-slate-400">This week</span>
              </div>
              <div className="grid grid-cols-4 gap-3 text-xs">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="mb-1 font-semibold text-slate-700">To Do</p>
                  <div className="space-y-2">
                    <div className="rounded-xl bg-white px-2 py-1 shadow-sm text-[11px]">
                      Roadmap planning
                    </div>
                    <div className="rounded-xl bg-white px-2 py-1 shadow-sm text-[11px]">
                      New hire onboarding
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-blue-50 p-3">
                  <p className="mb-1 font-semibold text-slate-700">
                    In Progress
                  </p>
                  <div className="space-y-2">
                    <div className="rounded-xl bg-white px-2 py-1 shadow-sm text-[11px]">
                      Activity feed UI
                    </div>
                    <div className="rounded-xl bg-white px-2 py-1 shadow-sm text-[11px]">
                      API integration
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-amber-50 p-3">
                  <p className="mb-1 font-semibold text-slate-700">Review</p>
                  <div className="space-y-2">
                    <div className="rounded-xl bg-white px-2 py-1 shadow-sm text-[11px]">
                      Comment thread UX
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3">
                  <p className="mb-1 font-semibold text-slate-700">Done</p>
                  <div className="space-y-2">
                    <div className="rounded-xl bg-white px-2 py-1 shadow-sm text-[11px]">
                      Auth setup
                    </div>
                    <div className="rounded-xl bg-white px-2 py-1 shadow-sm text-[11px]">
                      Dashboard shell
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
