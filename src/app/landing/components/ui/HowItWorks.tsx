import { Typography } from "@mui/material";
import {
  UserPlus,
  ListTodo,
  MessageSquareText,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Set up your team",
    description:
      "Invite team members and assign roles. Admins manage tasks, members contribute updates.",
  },
  {
    number: "02",
    icon: ListTodo,
    title: "Create and assign tasks",
    description:
      "Build your backlog with clear descriptions, priorities, and ownership.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Share progress async",
    description:
      "Add comments and status updates. Everyone stays informed without interrupting deep work.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track and iterate",
    description:
      "Review the activity feed, analyze progress, and continuously improve your workflow.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 xl:px-24"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h4" sx={{ marginBottom: 1 }}>
            How it works
          </Typography>
          <Typography variant="body1">
            Get your team aligned in minutes, not hours.
          </Typography>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 mt-4 left-0 right-0 h-0.5 bg-[#2463EB]/10 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center lg:text-left"
              >
                {/* Step number with icon */}
                <div className="relative inline-flex flex-col items-center lg:items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#2463EB]/20 flex items-center justify-center mb-3 relative z-10 group-hover:border-primary transition-colors">
                    <step.icon className="w-7 h-7 text-[#2463EB]" />
                  </div>
                  <span className="text-5xl font-bold text-[#2463EB]/10">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <Typography variant="h6">{step.title}</Typography>
                <Typography
                  className="text-muted-foreground text-sm leading-relaxed"
                  variant="body2"
                >
                  {step.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
