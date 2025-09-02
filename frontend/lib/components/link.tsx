import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

type LinkProps = React.ComponentProps<typeof NextLink>;

export function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink className={twMerge("flex flex-col gap-0 space-0 group w-fit", className)} {...props}>
      <span>{children}</span>
      <span className="border-t-2 w-[70%] group-hover:w-[102%] transition-all duration-700"></span>
    </NextLink>
  );
}
