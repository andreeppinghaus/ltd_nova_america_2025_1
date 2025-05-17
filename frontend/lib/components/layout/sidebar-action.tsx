import Link from "next/link";

type SideBarActionProps = {
  of: string;
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function SideBarAction({ of, ...props }: SideBarActionProps) {
  return (
    <Link {...props}>{of}</Link>
  );
}

