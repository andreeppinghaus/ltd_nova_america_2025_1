import { UserLayout } from "@/lib/components/layout/user";
import { PropsWithChildren } from "react";

export default function MonitorLayout({ children }: PropsWithChildren) {
  return (
    <UserLayout type="monitor">{children}</UserLayout>
  );
}
