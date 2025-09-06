import { Logo } from "@/lib/components/logo";

type UserHeaderProps = {
  // user: User
};

export function UserHeader({}: UserHeaderProps) {
  return (
    <header id="user-header" className="w-full flex flex-row justify-between py-3 px-5">
      <Logo />

      <section id="logged-user" className="flex flex-row items-center gap-x-2">
        NOME
        <div className="size-10 rounded-full border-2 border-black"></div>
      </section>
    </header>
  );
}
