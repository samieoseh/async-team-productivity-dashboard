import Card from "../components/Card";
import DashboardHeader from "../components/DashboardHeader";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="max-w-400 mx-auto">
      <DashboardHeader />
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <Card
          title="Total Tasks"
          value="128"
          icon={<Zap size={20} />}
          trend={{
            value: "12%",
            direction: "up",
            label: "vs last week",
          }}
        />
        <Card
          title="Completed"
          value="45"
          icon={<CheckCircle size={20} />}
          trend={{
            value: "8%",
            direction: "up",
            label: "vs last week",
          }}
        />
        <Card
          title="In Progress"
          value="12"
          icon={<Clock size={20} />}
          trend={{
            value: "2",
            direction: "down",
            label: "vs last week",
          }}
        />
        <Card
          title="Team Members"
          value="8"
          icon={<Users size={20} />}
          trend={{
            value: "0",
            direction: "neutral",
            label: "new this week",
          }}
        />
      </div>
    </main>
  );
}
