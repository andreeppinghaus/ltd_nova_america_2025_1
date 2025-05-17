import { UserType } from "@/lib/schemas/user-type";
import { Divider } from "../divider";
import { SidebarTitle } from "./sidebar-title";
import { SideBarItem } from "./sidebar-item";
import { SideBarAction } from "./sidebar-action";
import { capitalize } from "@/lib/common/capitalize";

type SideBarLayoutProps = {
  type: UserType
};

// TODO: Colocar links corretos nas paginas e nos hrefs
export function SideBarLayout({ type }: SideBarLayoutProps) {
  return (
    <section id="sidebar" className="bg-gray-300 px-2 space-y-2 h-full py-2 text-lg">
      <div className="w-full border border-neutral-700 bg-white text-black rounded-3xl text-center">
        {capitalize(type)}
      </div>

      {(type === "admin" || type === "professor") && (
        <>
          <SideBarItem title="Usuário">
            <SideBarAction href="#" of="NÃO IMPLEMENTADO" />
          </SideBarItem>
          <Divider />

          <SideBarItem title="Turma">
            <SideBarAction href="#" of="NÃO IMPLEMENTADO" />
          </SideBarItem>
          <Divider />
        </>
      )}

      {type === "admin" && (
        <>
          <SideBarItem title="Unidade">
            <SideBarAction href="#" of="NÃO IMPLEMENTADO" />
          </SideBarItem>
          <Divider />
        </>
      )}

      {(type === "professor" || type === "monitor") && (
        <>
          <SidebarTitle href="#" title="Realizar Presença" />
          <Divider />

          <SidebarTitle href="#" title="Visualizar Presença" />
          <Divider />
        </>
      )}
    </section>

  )
}
