import { useState, ReactNode, useMemo, useEffect } from "react";

import { useSidebarContext } from "@/shared/ui/sidebar/model/SidebarContext.tsx";
import { SubmenuContext } from "@/shared/ui/sidebar/model/SubmenuContext.tsx";

interface SidebarSubmenuProps {
  children: ReactNode;
  forceOpen?: boolean;
}

const DESKTOP_HOVER_MQ = "(min-width: 768px) and (hover: hover)";

export const SidebarSubmenu = ({
  children,
  forceOpen = false,
}: SidebarSubmenuProps) => {
  const { isCollapsed } = useSidebarContext();
  const [isOpen, setIsOpen] = useState(forceOpen);
  const [hoverEnabled, setHoverEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_HOVER_MQ);
    const sync = () => setHoverEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [forceOpen]);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => {
        if (!forceOpen) setIsOpen(false);
      },
      toggle: () => {
        if (forceOpen) return;
        setIsOpen((prev) => !prev);
      },
    }),
    [isOpen, forceOpen],
  );

  const handleMouseEnter = () => {
    if (hoverEnabled && isCollapsed) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverEnabled && isCollapsed && !forceOpen) setIsOpen(false);
  };

  return (
    <SubmenuContext.Provider value={value}>
      <div
        data-submenu-open={isOpen}
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </SubmenuContext.Provider>
  );
};
