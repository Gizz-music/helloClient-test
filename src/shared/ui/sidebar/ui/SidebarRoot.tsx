import { useState, ReactNode, useMemo } from "react";

import { SidebarContext } from "@/shared/ui/sidebar/model/SidebarContext.tsx";

interface SidebarRootProps {
  children: ReactNode;
  defaultCollapsed?: boolean;
}

//Корневой компонент, хранящий состояние свернутости сайдбара.

export const SidebarRoot = ({
  children,
  defaultCollapsed = true,
}: SidebarRootProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  const value = useMemo(() => ({ isCollapsed, toggleCollapse }), [isCollapsed]);

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
