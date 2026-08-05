import { ReactNode, ElementType } from "react";

//Пропсы для поддержки любого тега или внешнего компонента
type SidebarItemProps = {
  as?: ElementType;
  isActive?: boolean;
  children: ReactNode;
  onClick?: () => void;
  [key: string]: any;
};

//Универсальный элемент меню. Принимает `isActive` снаружи и прокидывает его в атрибут data-active.

export const SidebarItem = ({
  as,
  isActive = false,
  children,
  ...props
}: SidebarItemProps) => {
  const Component = as || "button";

  return (
    <Component
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};
