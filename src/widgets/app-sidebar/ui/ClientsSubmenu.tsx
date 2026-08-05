import { ReactNode } from "react";
import { Link, useNavigate } from "react-router";

import {
  SidebarItem,
  SidebarSubmenuContent,
  useSidebarContext,
  useSubmenuContext,
} from "@/shared/ui/sidebar";
import {
  FIRST_CLIENT_ROUTE,
  iconWrapClassName,
  subItemClassName,
  submenuContentClassName,
  submenuHeaderClassName,
  submenuInnerWrapperClassName,
  toggleButtonClassName,
} from "@/widgets/app-sidebar/model/sidebar.config.ts";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

//Клик по Clients: открывает список сразу и при первом входе выбирает первый пункт
export const ClientsTrigger = ({
  isActive,
  className,
  children,
}: {
  isActive: boolean;
  className?: string;
  children: ReactNode;
}) => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useSubmenuContext();

  const handleClick = () => {
    if (!isActive) {
      navigate(FIRST_CLIENT_ROUTE);
      open();
      return;
    }

    if (isOpen) close();
    else open();
  };

  return (
    <SidebarItem
      as="button"
      isActive={isActive}
      onClick={handleClick}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={className}
    >
      {children}
    </SidebarItem>
  );
};

export const SubmenuLink = ({
  to,
  isActive,
  children,
}: {
  to: string;
  isActive: boolean;
  children: ReactNode;
}) => {
  const { close } = useSubmenuContext();
  const { isCollapsed } = useSidebarContext();

  return (
    <SidebarItem
      as={Link}
      to={to}
      isActive={isActive}
      onClick={() => {
        // Mobile sheet и desktop закрываем после выбора
        if (isCollapsed) close();
      }}
      className={subItemClassName}
    >
      <>
        {!isCollapsed && (
          <span
            className={`size-1.5 shrink-0 rounded-full ${
              isActive ? "bg-blue-600" : "bg-slate-800"
            }`}
            aria-hidden
          />
        )}
      </>
      <span>{children}</span>
    </SidebarItem>
  );
};

export const SidebarSubmenuContentLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const { isOpen, close } = useSubmenuContext();

  return (
    <>
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden
        />
      )}

      <SidebarSubmenuContent className={submenuContentClassName}>
        <div className={submenuInnerWrapperClassName}>
          <div className={submenuHeaderClassName}>
            <span className="text-lg font-bold text-slate-900 md:text-base">
              {title}
            </span>
            <button
              onClick={close}
              className="p-1 text-xl font-medium text-slate-400 hover:text-slate-700 md:hidden"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </SidebarSubmenuContent>
    </>
  );
};

export const SidebarToggleButton = () => {
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
