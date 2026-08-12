import { ComponentPropsWithoutRef } from "react";

import { useSubmenuContext } from "@/shared/ui/sidebar/model/SubmenuContext.tsx";
import { SidebarItem } from "./SidebarItem";

type SidebarSubmenuTriggerProps = ComponentPropsWithoutRef<"button"> & {
  isActive?: boolean;
};

export const SidebarSubmenuTrigger = ({
  isActive,
  onClick,
  children,
  className,
  ...props
}: SidebarSubmenuTriggerProps) => {
  const { isOpen } = useSubmenuContext();

  return (
    <SidebarItem
      as="button"
      isActive={isActive}
      onClick={onClick}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={className}
      {...props}
    >
      {children}
    </SidebarItem>
  );
};
