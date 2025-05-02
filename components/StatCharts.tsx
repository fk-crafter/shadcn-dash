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
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4700 },
  { name: "May", revenue: 5200 },
];

const lineData = [
  { name: "Mon", users: 200 },
  { name: "Tue", users: 350 },
  { name: "Wed", users: 300 },
  { name: "Thu", users: 420 },
  { name: "Fri", users: 380 },
];

export default function StatsPage() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="w-full h-[300px] bg-card rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-[300px] bg-card rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Users This Week</h3>
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
