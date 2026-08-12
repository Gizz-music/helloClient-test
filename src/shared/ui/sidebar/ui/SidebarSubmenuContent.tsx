import { ReactNode } from "react";

import { useSubmenuContext } from "@/shared/ui/sidebar/model/SubmenuContext.tsx";

interface SidebarSubmenuContentProps {
  children: ReactNode;
  className?: string;
}

export const SidebarSubmenuContent = ({
  children,
  className,
}: SidebarSubmenuContentProps) => {
  const { isOpen } = useSubmenuContext();

  if (!isOpen) return null;

  return (
    <div role="menu" className={className}>
      {children}
    </div>
  );
};
