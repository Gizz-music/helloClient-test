import { ReactNode } from "react";

import { useSidebarContext } from "@/shared/ui/sidebar/model/SidebarContext.tsx";

interface SidebarContentProps {
  children: ReactNode;
  className?: string;
}

export const SidebarContent = ({
  children,
  className,
}: SidebarContentProps) => {
  const { isCollapsed } = useSidebarContext();

  return (
    <aside data-collapsed={isCollapsed} className={className}>
      {children}
    </aside>
  );
};
