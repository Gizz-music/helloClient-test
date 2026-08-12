import { ReactNode, ElementType, MouseEventHandler } from "react";

const sidebarItemClassName =
  "outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

export type SidebarItemProps = {
  as?: ElementType;
  isActive?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  [key: string]: unknown;
};

export const SidebarItem = ({
  as,
  isActive = false,
  children,
  className,
  ...props
}: SidebarItemProps) => {
  const Component = as || "button";

  return (
    <Component
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      className={[sidebarItemClassName, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
};
