"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Generate breadcrumbs from pathname if no items provided
  const breadcrumbItems = items || generateBreadcrumbs(pathname);

  const handleBack = () => {
    router.back();
  };

  return (
    <nav className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}>
      <button
        onClick={handleBack}
        className="flex items-center hover:text-foreground transition-colors p-1 rounded hover:bg-muted/50"
        title="Go back"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  
  return segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    // Don't make the last item a link
    if (index === segments.length - 1) {
      return { label };
    }
    
    return { label, href };
  });
}
