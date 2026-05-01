import { LayoutDashboard, Users, BarChart3 } from "lucide-react";

export const navItems = [
  {
    label: "Dashboard",
    title: "Dashboard Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Patients",
    title: "Patient Management",
    href: "/patients",
    icon: Users,
  },
  {
    label: "Analytics",
    title: "Analytics & Insights",
    href: "/analytics",
    icon: BarChart3,
  },
];