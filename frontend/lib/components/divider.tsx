import { twMerge } from "tailwind-merge";

export function Divider({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge("w-full h-1 border-black border-b", className)} {...props} />
  )
}
