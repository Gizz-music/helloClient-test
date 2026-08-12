// isRouteActive — точное совпадение pathname === to
// getGroupPrefix — общий префикс группы (например /clients из /clients/list)
// isGroupActive — активен ли любой дочерний to или родительский prefix

export const isRouteActive = (pathname: string, to: string): boolean =>
  pathname === to;

export const getGroupPrefix = (routes: string[]): string | null => {
  if (routes.length === 0) return null;
  const first = routes[0];
  const lastSlash = first.lastIndexOf("/");
  if (lastSlash <= 0) return null;
  return first.slice(0, lastSlash);
};

export const isGroupActive = (pathname: string, routes: string[]): boolean => {
  if (routes.some((to) => isRouteActive(pathname, to))) return true;
  const prefix = getGroupPrefix(routes);
  return prefix !== null && pathname === prefix;
};
