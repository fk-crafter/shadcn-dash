"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const barData = [
  { name: "Jan", revenu: 4000 },
  { name: "Fév", revenu: 3000 },
  { name: "Mars", revenu: 5000 },
  { name: "Avril", revenu: 4700 },
  { name: "Mai", revenu: 5200 },
];

const lineData = [
  { name: "Lun", users: 200 },
  { name: "Mar", users: 350 },
  { name: "Mer", users: 300 },
  { name: "Jeu", users: 420 },
  { name: "Ven", users: 380 },
];

export default function StatsPage() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="w-full h-[300px] bg-card rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Revenu mensuel</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenu" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-[300px] bg-card rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-4">
          Utilisateurs cette semaine
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
