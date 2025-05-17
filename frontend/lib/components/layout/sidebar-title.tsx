import Link from "next/link"

type SidebarTitleProps = {
  href: string,
  title: string,
}

export function SidebarTitle({ href, title }: SidebarTitleProps) {
  return (
    <Link href={href} className="flex flex-row items-center gap-x-3">
      <div className="w-6 h-2 bg-black"></div>
      {title}
    </Link>

  )
}
