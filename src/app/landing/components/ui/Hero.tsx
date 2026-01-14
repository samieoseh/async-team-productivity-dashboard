import { AccessTime, ChevronRight, Comment, Person } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2463EB]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3F7DF5]/10 rounded-full blur-3xl" />
      </div>
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center">
          <div
            className="inline-flex items-center mx-auto gap-2 px-4 py-2 rounded-full 
                bg-[#2463EB]/10 border border-[#2463EB]/20 
                text-primary text-sm font-medium animate-fade-in
                w-max"
          >
            <Person className="w-4 h-4" />
            Built for async-first teams
          </div>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontWeight: 900,
              lineHeight: 1.2,
              fontSize: {
                xs: "2.5rem", // mobile
                sm: "3rem", // small tablets
                md: "3.5rem", // desktop
                lg: "4rem", // large screens
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
            className="text-center py-4"
          >
            An async productivity dashboard
            <br />
            for remote teams. Track progress,
            <br />
            communicate updates,
            <br />
            and stay aligned—across any time zone.
          </Typography>
          <Button variant="contained" endIcon={<ChevronRight />}>
            Get Started
          </Button>
          <div className="flex flex-col gap-4">
            <Typography
              variant="body2"
              className="text-center gap-1 flex items-center justify-center"
            >
              <AccessTime color="primary" />
              Save 4+ hrs/week
            </Typography>
            <Typography
              variant="body2"
              className="text-center gap-1 flex items-center justify-center"
            >
              <Comment color="primary" />
              100% async updates
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
