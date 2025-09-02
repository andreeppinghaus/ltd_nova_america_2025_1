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
        <span className="px-12 py-5 border-2">Logo</span>
    
        <h1 className="font-accent text-xl font-bold">Login</h1>
        
        <label className="w-full">
          <input className="w-full py-2 px-1 border-b-2 border-b-gray-400" placeholder="Email" type="email" name="email" id="email" />
        </label>
        
        <label className="w-full">
          <input className="w-full py-2 px-1 border-b-2 border-b-gray-400" placeholder="Senha" type="password" name="password" id="password" />
        </label>
        
        <button className="bg-btn text-btn-content w-full hover:bg-btn-hover hover:text-btn-hover-content text-white text-center px-5 py-3 mt-3 mb-2 rounded-xl" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
