"use client";

import { Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label:"Dashboard",
        href:"/"
    },
    {
        icon: Layout,
        label:"Brows",
        href:"/search"
    },
  
]

export const SidebarRouts = () => {
  const routes = guestRoutes;
  
    return (
        <div>
            {routes.map(route => (
                <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
}