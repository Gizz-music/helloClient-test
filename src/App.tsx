import { AppSidebar } from "@/widgets/app-sidebar";
import { Sidebar, useSidebarContext } from "@/shared/ui/sidebar";

export const App = () => {
  return (
    // Провайдер контекста сайдбара. Задает начальное свернутое состояние.
    // Внутри себя содержит контекст провайдер
    <Sidebar defaultCollapsed={true}>
      <AppShell />
    </Sidebar>
  );
};

//Layout приложения
const AppShell = () => {
  const { isCollapsed } = useSidebarContext();

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <AppSidebar />

      <main
        className={`flex-1 p-6 pb-24 md:p-8 transition-all duration-300 ${
          isCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      ></main>
    </div>
  );
};
