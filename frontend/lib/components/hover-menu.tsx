import Link from "next/link";
import { PropsWithChildren } from "react";

type HoverMenuProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode[];
};

export function HoverMenu({ icon, title, children }: HoverMenuProps) {
  return (
    <div className="relative size-12 group">
      <div className="absolute z-[999] min-w-xs left-12 text-white invisible group-hover:visible">
        <h1 className="text-lg font-bold p-2.5 text-black rounded-tr-2xl group-hover:bg-gray-300">{title}</h1>
        
        <nav className="text-black bg-gray-100 flex flex-col items-start gap-3 rounded-b-2xl shadow-sm shadow-gray-200 py-2">
          {children}
        </nav>
      </div>
      
      <div className="w-full h-full rounded-tl-xl rounded-bl-2xl flex items-center justify-center group-hover:bg-gray-300">
        {icon}
      </div>
    </div>
  );
}

type HoverMenuItemProps = {
  href: string;
}

export function HoverMenuItem({ children, href }: PropsWithChildren<HoverMenuItemProps>) {
  return (
    <Link href={href} className="w-full p-3 border-t-2 border-t-gray-300 rounded-xl hover:bg-blue-600 hover:text-white">
      {children}
    </Link>
  );
}
