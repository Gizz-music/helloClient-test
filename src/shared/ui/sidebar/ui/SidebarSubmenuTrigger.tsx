import { ComponentPropsWithoutRef } from "react";

import { useSubmenuContext } from "@/shared/ui/sidebar/model/SubmenuContext.tsx";
import { SidebarItem } from "./SidebarItem";

// Кнопка со свойством isActive и стандартными children
type SubmenuTriggerProps = ComponentPropsWithoutRef<"button"> & {
  isActive?: boolean;
};

export const SidebarSubmenuTrigger = ({
  isActive,
  onClick,
  children,
  ...props
}: SubmenuTriggerProps) => {
  const { isOpen, toggle } = useSubmenuContext();

  return (
    <SidebarItem
      as="button" // Передаем жестко строку, если SidebarItem ее принимает
      isActive={isActive}
      onClick={toggle}
      aria-haspopup="true"
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </SidebarItem>
  );
};
