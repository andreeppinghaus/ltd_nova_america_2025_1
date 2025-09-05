import { Link } from "@/lib/components/link";
import NextLink from "next/link";
import { Metadata } from "next";
import { Logo } from "@/lib/components/logo";

export const metadata: Metadata = {
    title: "Página Principal",
    description: "Home Page",
};

export default function HomePage() {
  return (
    <div className="flex flex-col flex-row justify-center h-screen">
      <section className="flex-1 h-full flex flex-col items-center justify-center">
        <div id="left-panel-container" className="flex-5 flex flex-col items-left justify-center gap-y-2">
          <Logo />
          
          <p className="opacity-85">Olá.</p>
          <h1 className="text-3xl font-bold font-accent">Que bom ter você de<br /> volta!</h1>
          <h3 className="opacity-85">Clique abaixo para acessar.</h3>
          <section className="space-y-0">
            <h3 className="opacity-85">Seu e-mail de acesso é:</h3>
            <h2 className="font-bold">suamatricula@alunos.estacio.br</h2>
          </section>
          
          <NextLink href="/login" className="bg-btn text-btn-content hover:bg-btn-hover hover:text-btn-hover-content text-white text-center px-5 py-3 mt-3 mb-2 rounded-xl">
            Entrar
          </NextLink>
          
          <Link href="#">Esqueci minha senha</Link>
        </div>
        
        <aside className="flex-1 flex flex-col items-center justify-center bg-accent w-full gap-y-4">
          <p>Está com dúvidas para fazer o login?</p>
          <p className="flex items-center justify-center space-x-1">
            <img className="size-5" src="/question.svg" /> 
            <Link href="#">
              Acessar Ajuda
            </Link>
          </p>
        </aside>
      </section>
      
      <figure className="flex-1">
        {/* TODO: Adicionar uma imagem melhor */}
        <img src="https://estudante.estacio.br/assets/images/login/estacio/img-aluno.webp" alt="img-aluno" className="w-full h-full" />
      </figure>
    </div>
  );
}
