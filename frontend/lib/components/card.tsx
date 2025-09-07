import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = React.AllHTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={twMerge("w-full p-4 rounded-2xl border-[1px] shadow-sm shadow-gray-200 border-gray-300 flex flex-col items-start", className)} {...props} />
  );
}

export function CardTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="font-bold font-accent text-2xl">
      {children}
    </h1>
  );
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div className={twMerge("w-full px-2 flex flex-col items-center justify-center", className)} {...props} />
  );
}
