"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

const ROUTE_LABELS: Record<string, string> = {
  dashboard: "Dashboard",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs: Breadcrumb[] = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const label = ROUTE_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      return {
        label,
        href,
        active: index === segments.length - 1,
      };
    }),
  ];

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          {index === 0 ? (
            <Home className="h-4 w-4 mr-1" />
          ) : (
            <ChevronRight className="h-4 w-4 mx-1" />
          )}
          {breadcrumb.active ? (
            <span className="font-medium text-foreground">{breadcrumb.label}</span>
          ) : (
            <Link
              href={breadcrumb.href}
              className="hover:text-foreground transition-colors"
            >
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}