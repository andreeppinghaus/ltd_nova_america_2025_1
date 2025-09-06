import { LeftPanel } from "@/lib/components/layout/left-panel";
import { UserHeader } from "@/lib/components/layout/user-header";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

// TODO: Implement integration with backend
const userIsLoggedIn = true;

export default function UserLayout({ children }: PropsWithChildren) {
  if (!userIsLoggedIn) throw redirect("/welcome");
  
  return (
    <div className="h-screen w-full flex flex-col">
      <UserHeader />

      <section className="h-full w-full flex flex-row gap-x-2">
        <LeftPanel />
        
        <main className="w-full bg-gray-200 rounded-tl-2xl p-3">
          {children}
        </main>
      </section>
    </div>
  )
}
