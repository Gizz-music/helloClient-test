import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { useSidebarContext } from "@/shared/ui/sidebar";
import {
  iconWrapClassName,
  toggleButtonClassName,
} from "@/shared/ui/router-menu/model/router-menu.styles.ts";

// RouterMenuToggle — кнопка сворачивания и разворачивания sidebar

export const RouterMenuToggle = () => {
  const { isCollapsed, toggleCollapse } = useSidebarContext();
  const Icon = isCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <button
      className={toggleButtonClassName}
      onClick={toggleCollapse}
      aria-label={isCollapsed ? "Раскрыть меню" : "Свернуть меню"}
    >
      <span className={iconWrapClassName}>
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      {!isCollapsed && (
        <span className="text-sm font-medium whitespace-nowrap">Свернуть</span>
      )}
    </button>
  );
};
