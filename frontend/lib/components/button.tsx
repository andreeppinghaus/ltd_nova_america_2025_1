import { twMerge } from "tailwind-merge";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={twMerge(className, "bg-black text-white px-5 py-1 mt-3")} />
  )
}
