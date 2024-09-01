"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/*

NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.

*/

type NavLinkType = {
  href: string,
  exact?: boolean,
  children: React.ReactNode,
  onClick?: () => void;
}

export const NavLink = ({ href, exact=true, children, onClick }: NavLinkType) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} onClick={onClick} className={`${isActive && "active"}`}>
      {children}
    </Link>
  );
};