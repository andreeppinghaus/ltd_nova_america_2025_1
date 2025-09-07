import { LeftPanel } from "@/lib/components/layout/left-panel";
import { UserHeader } from "@/lib/components/layout/user-header";
import { TwoPanel } from "@/lib/components/two-panel";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

// TODO: Implement integration with backend
const userIsLoggedIn = true;

export default function UserLayout({ children }: PropsWithChildren) {
  if (!userIsLoggedIn) throw redirect("/welcome");
  
  return (
    <div className="h-screen w-full flex flex-col">
      <UserHeader />

      <TwoPanel left={<LeftPanel />} right={children} />
    </div>
  )
}
