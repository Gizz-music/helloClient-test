import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

import { useLocation, useNavigate } from "react-router";
import type { LucideIcon } from "lucide-react";

import {
  SidebarSubmenu,
  SidebarSubmenuContent,
  SidebarSubmenuTrigger,
  useSidebarContext,
  useSubmenuContext,
} from "@/shared/ui/sidebar";

import {
  groupContentClassName,
  groupHeaderClassName,
  groupInnerWrapperClassName,
  iconWrapClassName,
  itemClassName,
  labelClassName,
} from "@/shared/ui/router-menu/model/router-menu.styles.ts";

import { isGroupActive } from "@/shared/ui/router-menu/model/useRouteActive.ts";
import {
  RouterMenuItem,
  type RouterMenuItemProps,
} from "@/shared/ui/router-menu/ui/RouterMenuItem.tsx";

//RouterMenuGroup — группа пунктов с вложенным списком (Clients)

type RouterMenuGroupProps = {
  label: string;
  icon?: LucideIcon;
  children: ReactNode;
};

export const RouterMenuGroup = ({
  label,
  icon: Icon,
  children,
}: RouterMenuGroupProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isCollapsed } = useSidebarContext();

  const childItems = Children.toArray(children).filter(
    (child): child is ReactElement<RouterMenuItemProps> =>
      isValidElement(child) && child.type === RouterMenuItem,
  );

  const routes = childItems.map((child) => child.props.to);
  const firstRoute = routes[0];
  const groupActive = isGroupActive(location.pathname, routes);
  const isDesktop = window.innerWidth >= 768;
  const forceOpen = groupActive && !isCollapsed && isDesktop;

  return (
    <SidebarSubmenu forceOpen={forceOpen}>
      <RouterMenuGroupTrigger
        label={label}
        icon={Icon}
        isActive={groupActive}
        firstRoute={firstRoute}
        onNavigate={navigate}
      />
      <RouterMenuGroupContentLayout label={label} childItems={childItems} />
    </SidebarSubmenu>
  );
};

type RouterMenuGroupTriggerProps = {
  label: string;
  icon?: LucideIcon;
  isActive: boolean;
  firstRoute: string;
  onNavigate: ReturnType<typeof useNavigate>;
};

const RouterMenuGroupTrigger = ({
  label,
  icon: Icon,
  isActive,
  firstRoute,
  onNavigate,
}: RouterMenuGroupTriggerProps) => {
  const { isOpen, open, close } = useSubmenuContext();

  const handleClick = () => {
    if (!isActive) {
      onNavigate(firstRoute);
      open();
      return;
    }

    if (isOpen) close();
    else open();
  };

  return (
    <SidebarSubmenuTrigger
      isActive={isActive}
      onClick={handleClick}
      className={itemClassName}
    >
      {Icon && (
        <span className={iconWrapClassName}>
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
      )}
      <span className={labelClassName}>{label}</span>
    </SidebarSubmenuTrigger>
  );
};

const RouterMenuGroupContentLayout = ({
  label,
  childItems,
}: {
  label: string;
  childItems: ReactElement<RouterMenuItemProps>[];
}) => {
  const { isOpen, close } = useSubmenuContext();
  const { isCollapsed } = useSidebarContext();

  const subItems = childItems.map((child) =>
    cloneElement(child, {
      isSubItem: true,
      onSubItemClick: () => {
        if (isCollapsed) close();
      },
    }),
  );

  return (
    <>
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden
        />
      )}

      <SidebarSubmenuContent className={groupContentClassName}>
        <div className={groupInnerWrapperClassName}>
          <div className={groupHeaderClassName}>
            <span className="text-lg font-bold text-slate-900 md:text-base">
              {label}
            </span>
            <button
              onClick={close}
              className="p-1 text-xl font-medium text-slate-400 hover:text-slate-700 md:hidden"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          {subItems}
        </div>
      </SidebarSubmenuContent>
    </>
  );
};
