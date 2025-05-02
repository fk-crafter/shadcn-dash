import { StatCard } from "@/components/StatCard";
import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Utilisateurs"
        value="1,240"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        delay={0}
      />
      <StatCard
        title="Revenu"
        value="€8,490"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        delay={0.1}
      />
      <StatCard
        title="Commandes"
        value="321"
        icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        delay={0.2}
      />
      <StatCard
        title="Activité"
        value="87%"
        icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        delay={0.3}
      />
    </div>
  );
}
