//RouterMenu — продуктовый слой меню

import { RouterMenuRoot, RouterMenuPanel } from "./ui/RouterMenuRoot";
import { RouterMenuItem } from "./ui/RouterMenuItem";
import { RouterMenuGroup } from "./ui/RouterMenuGroup";
import { RouterMenuToggle } from "./ui/RouterMenuToggle";

export { useSidebarContext as useRouterMenuContext } from "@/shared/ui/sidebar";

export const RouterMenu = Object.assign(RouterMenuRoot, {
  Panel: RouterMenuPanel,
  Item: RouterMenuItem,
  Group: RouterMenuGroup,
  Toggle: RouterMenuToggle,
});
