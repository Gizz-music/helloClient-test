import { Link, useLocation } from "react-router";
import { Smile } from "lucide-react";

import {
  SidebarContent,
  SidebarItem,
  SidebarSubmenu,
  useSidebarContext,
} from "@/shared/ui/sidebar";
import { Tooltip } from "@/shared/ui/tooltip";
import {
  CLIENT_SUB_ROUTES,
  FIRST_CLIENT_ROUTE,
  iconWrapClassName,
  itemClassName,
  labelClassName,
  menuItems,
  sidebarContainerClassName,
  sidebarInnerWrapperClassName,
  sidebarNavClassName,
} from "@/widgets/app-sidebar/model/sidebar.config.ts";
import {
  ClientsTrigger,
  SidebarSubmenuContentLayout,
  SidebarToggleButton,
  SubmenuLink,
} from "@/widgets/app-sidebar/ui/ClientsSubmenu.tsx";

export const AppSidebar = () => {
  const location = useLocation();
  const { isCollapsed } = useSidebarContext();

  const isClientsActive =
    CLIENT_SUB_ROUTES.includes(
      location.pathname as (typeof CLIENT_SUB_ROUTES)[number],
    ) || location.pathname === "/clients";

  // В широком режиме держим список открытым на дочернем роуте
  // при переходе на другие значки forceOpen=false и список закрывается
  const forceOpenSubmenu = isClientsActive && !isCollapsed;

  return (
    <SidebarContent className={sidebarContainerClassName}>
      <div className={sidebarInnerWrapperClassName}>
        <div className="hidden md:block md:h-1" />
        <nav className={sidebarNavClassName}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Tooltip key={item.to} content={item.label} enabled={isCollapsed}>
                <SidebarItem
                  as={Link}
                  to={item.to}
                  isActive={location.pathname === item.to}
                  className={itemClassName}
                >
                  <span className={iconWrapClassName}>
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className={labelClassName}>{item.label}</span>
                </SidebarItem>
              </Tooltip>
            );
          })}
          <SidebarSubmenu forceOpen={forceOpenSubmenu}>
            <ClientsTrigger
              isActive={isClientsActive}
              className={itemClassName}
            >
              <span className={iconWrapClassName}>
                <Smile className="size-5" strokeWidth={1.75} />
              </span>
              <span className={labelClassName}>Clients</span>
            </ClientsTrigger>

            <SidebarSubmenuContentLayout title="Clients">
              <SubmenuLink
                to={FIRST_CLIENT_ROUTE}
                isActive={location.pathname === FIRST_CLIENT_ROUTE}
              >
                List
              </SubmenuLink>
              <SubmenuLink
                to="/clients/reviews"
                isActive={location.pathname === "/clients/reviews"}
              >
                Reviews
              </SubmenuLink>
              <SubmenuLink
                to="/clients/notifications"
                isActive={location.pathname === "/clients/notifications"}
              >
                Notifications
              </SubmenuLink>
            </SidebarSubmenuContentLayout>
          </SidebarSubmenu>
        </nav>
      </div>

      <SidebarToggleButton />
    </SidebarContent>
  );
};
