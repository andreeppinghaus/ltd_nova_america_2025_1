import { twMerge } from "tailwind-merge";
import { SidebarTitle } from "./sidebar-title";

type SideBarItemProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>

export function SideBarItem({ className, children, title, ...props }: SideBarItemProps) {
  return (
    <div className={twMerge(`space-y-1`, className)} {...props}>
      <SidebarTitle href="#" title={title} />
      <div className="pl-10 space-y-1">
        {children}
      </div>
    </div>
  );
}
