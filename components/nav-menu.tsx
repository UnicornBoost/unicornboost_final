"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();
  const menu = [
    {
      label: "Service",
      href: "/#service",
      active: "/#service" === pathname,
    },
    {
      label: "Projects",
      href: "/projects",
      active: "/projects" === pathname,
    },
    {
      label: "Pricing",
      href: "/#plans",
      active: "/#plans" === pathname,
    },
  ];
  return (
    <div className="space-x-5">
      {menu.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={cn(
            "text-black/80 font-medium md:text-lg text-xs",
            item.active ? "text-violet-400" : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
