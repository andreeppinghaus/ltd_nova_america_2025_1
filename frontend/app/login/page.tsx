import { Button } from "@/lib/components/button";
import { LabelledInput } from "@/lib/components/input";
import { Logo } from "@/lib/components/logo";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Login",
    description: "Login Page",
};

export default function LoginPage() {
  const onLogin = async (form: FormData) => {
      "use server";
      
      // TODO: Implement login to backend
      void form;
      throw redirect("/admin");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-l from-slate-50 via-accent to-slate-50">
      <form action={onLogin} className="min-w-sm flex flex-col items-center gap-5 py-10 px-12 bg-white rounded-lg shadow-md shadow-gray-400">
        <Logo />
    
        <h1 className="font-accent text-xl font-bold">Login</h1>
        
        <LabelledInput placeholder="Email" type="email" name="email" id="email" />
        <LabelledInput placeholder="Senha" type="password" name="password" id="password" />
        
        <Button type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}
