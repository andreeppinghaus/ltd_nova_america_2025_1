import { HoverMenu, HoverMenuItem } from "@/lib/components/hover-menu";
import { AttendIcon } from "@/lib/components/icons/attend";
import { ClassIcon } from "@/lib/components/icons/class";
import { UserIcon } from "@/lib/components/icons/user";
import { UnitIcon } from "@/lib/components/icons/unit";

type LeftPanelProps = {
  // user: User
};

export function LeftPanel({}: LeftPanelProps) {
  return (
    <nav id="left-panel" className="h-full px-1 flex flex-col bg-background">
      <HoverMenu title="Unidade" icon={<UnitIcon />}>
        <HoverMenuItem href="/unit/create">Cadastrar</HoverMenuItem>
        <HoverMenuItem href="/unit/view">Consultar</HoverMenuItem>
      </HoverMenu>
      
      <HoverMenu title="Turma" icon={<ClassIcon />}>
        <HoverMenuItem href="/class/create">Cadastrar</HoverMenuItem>
        <HoverMenuItem href="/class/view">Consultar</HoverMenuItem>
      </HoverMenu>
      
      <HoverMenu title="Usuário" icon={<UserIcon />}>
        <HoverMenuItem href="/user/create">Cadastrar</HoverMenuItem>
        <HoverMenuItem href="/user/view">Consultar</HoverMenuItem>
      </HoverMenu>
      
      <HoverMenu title="Presença" icon={<AttendIcon />}>
        <HoverMenuItem href="/attend/create">Realizar</HoverMenuItem>
        <HoverMenuItem href="/attend/view">Visualizar</HoverMenuItem>
      </HoverMenu>
    </nav>
  );
}
