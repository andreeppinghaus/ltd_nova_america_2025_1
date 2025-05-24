import { twMerge } from "tailwind-merge";

export function InputField({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={twMerge(className, "bg-gray-300 text-black py-1 px-3 rounded-sm w-full text-lg")} {...props} />
}

