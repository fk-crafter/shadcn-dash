"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BarChart, Table, Settings } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/stats", label: "Stats", icon: BarChart },
  { href: "/dashboard/table", label: "Table", icon: Table },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="w-64 h-full bg-muted border-r hidden md:block"
    >
      <div className="p-6 font-bold text-lg">Dashboard shadcn/ui</div>
      <nav className="flex flex-col gap-2 px-4">
        {navItems.map(({ href, label, icon: Icon }) => (
          <div
            key={href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
              pathname === href && "bg-accent text-accent-foreground"
            )}
            onClick={() => console.log("Clicked", label)} // facultatif
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
};
