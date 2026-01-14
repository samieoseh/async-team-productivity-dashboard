import { Typography } from "@mui/material";
import { LayoutGrid, Activity, MessageCircle, Shield } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Kanban Board",
    description:
      "Visualize your workflow with drag-and-drop task management. Move tasks through To Do, In Progress, Review, and Done.",
  },
  {
    icon: Activity,
    title: "Activity Feed",
    description:
      "Stay informed with a centralized feed showing all task updates, status changes, and team activity in real-time.",
  },
  {
    icon: MessageCircle,
    title: "Async Comments",
    description:
      "Communicate context through threaded comments. Share updates, decisions, and progress without scheduling meetings.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Admins create and manage tasks. Members update assigned work and add comments. Clear ownership, clear accountability.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-24 bg-[#F0F2F4]/30">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Typography
            variant="h4"
            sx={{
              "& span": {
                color: "primary.main",
              },
              marginBottom: "1rem",
            }}
          >
            Everything you need for <span>async collaboration</span>
          </Typography>
          <Typography variant="body1">
            Purpose-built features for remote teams who value focused work over
            constant meetings.
          </Typography>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-xl p-8 shadow-md hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#3F7DF5]/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#3F7DF5]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#3F7DF5] transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3F7DF5] to-[#FFB74D] rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
