import { StatCard } from "@/components/StatCard";
import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import StatCharts from "@/components/StatCharts";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Users"
          value="1,240"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          delay={0}
        />
        <StatCard
          title="Revenue"
          value="$8,490"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          delay={0.1}
        />
        <StatCard
          title="Orders"
          value="321"
          icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
          delay={0.2}
        />
        <StatCard
          title="Activity"
          value="87%"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          delay={0.3}
        />
      </div>

      <StatCharts />
    </div>
  );
}
