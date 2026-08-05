import type { ReactNode } from "react";

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  enabled?: boolean;
  className?: string;
};

export const Tooltip = ({
  content,
  children,
  enabled = true,
  className,
}: TooltipProps) => {
  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div
      className={["group/tooltip relative", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      <div
        role="tooltip"
        className="pointer-events-none absolute top-1/2 left-full z-50 ml-2 hidden -translate-y-1/2 items-center md:group-hover/tooltip:flex"
      >
        <span
          className="absolute top-1/2 right-full -translate-y-1/2 border-y-[5px] border-r-[6px] border-y-transparent border-r-blue-700"
          aria-hidden
        />
        <span className="whitespace-nowrap rounded-md bg-blue-700 px-2.5 py-1.5 text-left text-sm font-medium text-white">
          {content}
        </span>
      </div>
    </div>
  );
};
