import { UserType } from "@/lib/schemas/user-type";
import { PropsWithChildren } from "react";
import { SideBarLayout } from "./sidebar";

type UserLayoutProps = {
  type: UserType
};

export function UserLayout({ type, children }: PropsWithChildren<UserLayoutProps>) {
  return (
    <div className="flex flex-row gap-x-2">
      <SideBarLayout type={type} />

      <main>
        {children}
      </main>
    </div>
  )
}
