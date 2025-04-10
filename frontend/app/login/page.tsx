import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

function InputField({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input className={twMerge(className, "w-full text-md px-5 py-3 bg-[#D9D9D9] text-[#888888] rounded-0")} {...props} />
}

export const metadata: Metadata = {
    title: "Login",
    description: "Login Page",
};

export default function LoginPage() {
    const onLogin = async (form: FormData) => {
        "use server";

        // TODO: Implement login to backend
        void form;
    }

    return (
        <main className="w-full flex items-center justify-center mt-50">
            <form
                action={onLogin}
                className="flex flex-col w-full h-full max-w-md gap-y-5 items-center justify-center"
            >
                <InputField type="text" name="login" id="login" placeholder="Login" />
                <InputField type="password" name="senha" id="senha" placeholder="Senha" />
                <button className="bg-[#333333] text-white px-12 py-2">
                    Login
                </button>
            </form>
        </main>
    );
}