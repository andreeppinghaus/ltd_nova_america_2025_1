import { PropsWithChildren } from "react";

export default function AuthedLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex flex-row justify-between py-3 px-5">
        <section id="logo-sec" className="flex flex-row items-center gap-x-2">
          <div className="size-10 rounded-full border-2 border-black"></div>
          LOGO
        </section>

        <section id="logged-user" className="flex flex-row items-center gap-x-2">
          NOME
          <div className="size-10 rounded-full border-2 border-black"></div>
        </section>
      </header>

      {children}
    </>
  )
}
