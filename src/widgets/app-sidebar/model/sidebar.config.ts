import { ChartPie, CheckSquare, Ticket, CreditCard } from "lucide-react";

//Конфигурация стилей для десктоп и мобильной версий. Решено декомпозировать в отдельный файл

export const menuItems = [
  { to: "/trends", label: "Trends", icon: ChartPie },
  { to: "/tasks", label: "Tasks", icon: CheckSquare },
  { to: "/tickets", label: "Tickets", icon: Ticket },
  { to: "/payments", label: "Payments", icon: CreditCard },
];

export const CLIENT_SUB_ROUTES = [
  "/clients/list",
  "/clients/reviews",
  "/clients/notifications",
];

export const FIRST_CLIENT_ROUTE = CLIENT_SUB_ROUTES[0];

export const sidebarNavClassName = [
  "flex w-full flex-row items-center justify-between",
  "[&>*]:flex-1 [&>*]:w-full [&>*]:min-w-0",
  "md:[&>*]:flex-none md:[&>*]:w-auto",

  // Десктопные стили
  "md:w-full md:flex-col md:items-stretch md:gap-1",
].join(" ");

export const itemClassName = [
  "flex flex-col items-center justify-center gap-1 p-2 rounded-xl",
  "w-full transition-colors cursor-pointer",
  "text-slate-600",
  "data-[active=true]:text-blue-600 data-[active=true]:bg-blue-100/80",

  "md:max-w-none md:flex-row md:items-center md:justify-start md:gap-3",
  "md:px-3 md:py-2.5 md:rounded-xl",
  "md:text-slate-800 md:hover:bg-slate-200/70",
  "md:data-[active=true]:bg-blue-100 md:data-[active=true]:text-blue-600",

  "md:group-data-[collapsed=true]:justify-center md:group-data-[collapsed=true]:gap-0",
  "md:group-data-[collapsed=true]:size-10 md:group-data-[collapsed=true]:p-0 md:group-data-[collapsed=true]:mx-auto",
  "md:group-data-[collapsed=true]:data-[active=true]:bg-blue-100",
  "md:group-data-[collapsed=true]:data-[active=true]:text-blue-600",
].join(" ");

export const labelClassName = [
  "text-[11px] font-medium",
  "md:text-sm md:leading-none",
  "md:group-data-[collapsed=true]:hidden",
  "whitespace-nowrap",
].join(" ");

export const iconWrapClassName =
  "flex size-5 shrink-0 items-center justify-center";

export const subItemClassName = [
  "flex w-full items-center rounded-xl text-left text-sm font-medium",
  "transition-colors cursor-pointer",
  "text-slate-800 hover:bg-slate-200/70",
  "data-[active=true]:bg-blue-100 data-[active=true]:text-blue-600",
  "px-3 py-2.5",
  "md:group-data-[collapsed=false]:gap-3 md:group-data-[collapsed=false]:py-2.5",
  "md:group-data-[collapsed=false]:pl-5 md:group-data-[collapsed=false]:pr-3",
].join(" ");

export const sidebarContainerClassName = [
  "fixed bottom-0 left-0 z-40 flex h-20 w-full flex-row items-center justify-around",
  "border-t border-slate-200 bg-slate-50 px-2 text-slate-950 transition-all duration-300",
  "md:fixed md:top-0 md:left-0 md:h-screen md:w-16 md:data-[collapsed=false]:w-64",
  "md:flex-col md:justify-between md:border-r md:border-t-0 md:border-slate-200",
  "md:bg-slate-100 md:px-2 md:py-4 group",
].join(" ");

export const sidebarInnerWrapperClassName =
  "flex w-full flex-row items-center justify-around md:w-full md:flex-col md:items-stretch md:justify-start md:gap-1";

export const submenuContentClassName = [
  "fixed bottom-0 left-0 z-50 flex w-full flex-col gap-1",
  "rounded-t-2xl bg-white p-6 shadow-2xl",

  "md:group-data-[collapsed=true]:absolute md:group-data-[collapsed=true]:top-0",
  "md:group-data-[collapsed=true]:bottom-auto md:group-data-[collapsed=true]:left-full",
  "md:group-data-[collapsed=true]:w-auto md:group-data-[collapsed=true]:pl-1.5",
  "md:group-data-[collapsed=true]:rounded-none md:group-data-[collapsed=true]:border-0",
  "md:group-data-[collapsed=true]:bg-transparent md:group-data-[collapsed=true]:p-0",
  "md:group-data-[collapsed=true]:shadow-none",

  "md:group-data-[collapsed=false]:relative md:group-data-[collapsed=false]:bottom-auto",
  "md:group-data-[collapsed=false]:left-0 md:group-data-[collapsed=false]:mt-0.5",
  "md:group-data-[collapsed=false]:w-full",
  "md:group-data-[collapsed=false]:rounded-none md:group-data-[collapsed=false]:border-0",
  "md:group-data-[collapsed=false]:bg-transparent md:group-data-[collapsed=false]:p-0",
  "md:group-data-[collapsed=false]:px-3 md:group-data-[collapsed=false]:shadow-none",
  "md:group-data-[collapsed=false]:gap-0.5",
].join(" ");

export const submenuInnerWrapperClassName = [
  "flex flex-col gap-1 text-left",
  // карточка только у desktop
  "md:group-data-[collapsed=true]:w-56 md:group-data-[collapsed=true]:rounded-2xl",
  "md:group-data-[collapsed=true]:border md:group-data-[collapsed=true]:border-slate-200",
  "md:group-data-[collapsed=true]:bg-slate-100 md:group-data-[collapsed=true]:p-4",
  "md:group-data-[collapsed=true]:shadow-lg",
].join(" ");

export const submenuHeaderClassName =
  "mb-2 flex items-center justify-between border-b border-slate-100 pb-4 md:group-data-[collapsed=true]:mb-1 md:group-data-[collapsed=true]:justify-start md:group-data-[collapsed=true]:border-0 md:group-data-[collapsed=true]:pb-1 md:group-data-[collapsed=false]:hidden";

export const toggleButtonClassName = [
  "mt-auto hidden w-full items-center rounded-xl text-slate-700 transition-colors md:flex",
  "md:flex-row md:justify-start md:gap-3 md:px-3 md:py-2.5 md:hover:bg-slate-200/70",
  "md:group-data-[collapsed=true]:mx-auto md:group-data-[collapsed=true]:size-10",
  "md:group-data-[collapsed=true]:justify-center md:group-data-[collapsed=true]:p-0",
].join(" ");
