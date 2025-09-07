import { twMerge } from "tailwind-merge";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={twMerge("bg-btn text-btn-content w-full hover:bg-btn-hover hover:text-btn-hover-content text-white text-center px-5 py-3 mt-3 mb-2 rounded-xl", className)} {...props} />
  )
}
