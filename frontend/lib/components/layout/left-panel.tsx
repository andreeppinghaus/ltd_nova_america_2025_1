import { HoverMenuItem } from "@/lib/components/hover-menu-item";
import { AttendIcon } from "@/lib/components/icons/attend";
import { ClassIcon } from "@/lib/components/icons/class";
import { UserIcon } from "@/lib/components/icons/user";
import { UnitIcon } from "@/lib/components/icons/unit";
import NextLink from "next/link";

type LeftPanelProps = {
  // user: User
};

export function LeftPanel({}: LeftPanelProps) {
  return (
    <nav id="left-panel" className="h-full px-1 flex flex-col">
      <HoverMenuItem title="Unidade" icon={<UnitIcon />}>
        <NextLink href="/unit/create">Cadastrar</NextLink>
        <NextLink href="/unit/view">Consultar</NextLink>
      </HoverMenuItem>
      
      <HoverMenuItem title="Turma" icon={<ClassIcon />}>
        <NextLink href="/class/create">Cadastrar</NextLink>
        <NextLink href="/class/view">Consultar</NextLink>
      </HoverMenuItem>
      
      <HoverMenuItem title="Usuário" icon={<UserIcon />}>
        <NextLink href="/user/create">Cadastrar</NextLink>
        <NextLink href="/user/view">Consultar</NextLink>
      </HoverMenuItem>
      
      <HoverMenuItem title="Presença" icon={<AttendIcon />}>
        <NextLink href="/attend/create">Realizar</NextLink>
        <NextLink href="/attend/view">Visualizar</NextLink>
      </HoverMenuItem>
    </nav>
  );
}
