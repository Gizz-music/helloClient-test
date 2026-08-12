import { Link, useLocation } from "react-router";
import type { LucideIcon } from "lucide-react";

import { SidebarItem, useSidebarContext } from "@/shared/ui/sidebar";
import { Tooltip } from "@/shared/ui/tooltip";
import {
  iconWrapClassName,
  itemClassName,
  labelClassName,
  subItemClassName,
} from "@/shared/ui/router-menu/model/router-menu.styles.ts";

import { isRouteActive } from "@/shared/ui/router-menu/model/useRouteActive.ts";

export type RouterMenuItemProps = {
  label: string;
  to: string;
  icon?: LucideIcon;
  isSubItem?: boolean;
  onSubItemClick?: () => void;
};

//RouterMenuItem — пункт меню с автоматической навигацией

export const RouterMenuItem = ({
  label,
  to,
  icon: Icon,
  isSubItem = false,
  onSubItemClick,
}: RouterMenuItemProps) => {
  const location = useLocation();
  const { isCollapsed } = useSidebarContext();
  const isActive = isRouteActive(location.pathname, to);

  const item = (
    <SidebarItem
      as={Link}
      to={to}
      isActive={isActive}
      onClick={() => {
        if (isSubItem) onSubItemClick?.();
      }}
      className={isSubItem ? subItemClassName : itemClassName}
    >
      {isSubItem ? (
        <>
          {!isCollapsed && (
            <span
              className={`size-1.5 shrink-0 rounded-full ${
                isActive ? "bg-blue-600" : "bg-slate-800"
              }`}
              aria-hidden
            />
          )}
          <span>{label}</span>
        </>
      ) : (
        <>
          {Icon && (
            <span className={iconWrapClassName}>
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
          )}
          <span className={labelClassName}>{label}</span>
        </>
      )}
    </SidebarItem>
  );

  if (isSubItem) return item;

  return (
    <Tooltip content={label} enabled={isCollapsed}>
      {item}
    </Tooltip>
  );
};

RouterMenuItem.displayName = "RouterMenuItem";
