import { createContext, useContext } from "react";

//Контекст хук для управления всего сайдбара целиком
interface SidebarContextType {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("Sidebar components must be rendered within SidebarRoot");
  return context;
};
