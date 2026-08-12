import { createContext, useContext } from "react";

interface SubmenuContextType {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const SubmenuContext = createContext<SubmenuContextType | undefined>(
  undefined,
);

export const useSubmenuContext = () => {
  const context = useContext(SubmenuContext);
  if (!context) {
    throw new Error(
      "Submenu components must be rendered within SidebarSubmenu",
    );
  }
  return context;
};
