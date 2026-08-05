import { createContext, useContext } from "react";

//Контекст хук для управления контекстом саб меню
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
  if (!context)
    //Предохранитель для того чтобы приложение не упало с непонятной ошибкой в рантайме
    throw new Error(
      "Submenu components must be rendered within SidebarSubmenu",
    );
  return context;
};
