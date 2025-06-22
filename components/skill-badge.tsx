import type React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export function SkillBadge({
  title,
  icon: IconComponent,
  className,
}: SkillBadgeProps) {
  return (
    <Badge
      className={cn(
        "flex items-center gap-1 px-2 py-1 text-xs font-medium",
        className
      )}
    >
      <IconComponent className="w-3 h-3" />
      <span>{title}</span>
    </Badge>
  );
}
