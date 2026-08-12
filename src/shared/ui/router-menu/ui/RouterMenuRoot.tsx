import { ReactNode } from "react";

import { Sidebar, SidebarContent } from "@/shared/ui/sidebar";
import {
  menuContainerClassName,
  menuInnerWrapperClassName,
  menuNavClassName,
} from "@/shared/ui/router-menu/model/router-menu.styles.ts";
import { RouterMenuToggle } from "@/shared/ui/router-menu/ui/RouterMenuToggle.tsx";

interface RouterMenuRootProps {
  children: ReactNode;
  defaultCollapsed?: boolean;
}

//RouterMenuRoot — корневой провайдер RouterMenu

export const RouterMenuRoot = ({
  children,
  defaultCollapsed = true,
}: RouterMenuRootProps) => {
  return <Sidebar defaultCollapsed={defaultCollapsed}>{children}</Sidebar>;
};

interface RouterMenuPanelProps {
  children: ReactNode;
}

export const RouterMenuPanel = ({ children }: RouterMenuPanelProps) => {
  return (
    <SidebarContent className={menuContainerClassName}>
      <div className={menuInnerWrapperClassName}>
        <div className="hidden md:block md:h-1" />
        <nav className={menuNavClassName}>{children}</nav>
      </div>
      <RouterMenuToggle />
    </SidebarContent>
  );
};
