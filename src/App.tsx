import { AppSidebar } from "@/widgets/app-sidebar";
import { RouterMenu, useRouterMenuContext } from "@/shared/ui/router-menu";

export const App = () => {
  return (
    <RouterMenu defaultCollapsed>
      <AppShell />
    </RouterMenu>
  );
};

const AppShell = () => {
  const { isCollapsed } = useRouterMenuContext();

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
