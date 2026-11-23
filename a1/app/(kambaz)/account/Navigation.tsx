"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  const label = (link: (typeof links)[number]) =>
    link === "signin" ? "Sign in" : link === "signup" ? "Sign up" : "Profile";

  return (
    <div id="wd-account-navigation" className="w-36 shrink-0 space-y-3 text-lg">
      {links.map((link) => {
        const href = `/account/${link}`;
        const current = pathname.includes(href);
        return (
          <div key={link}>
            <Link
              href={href}
              id={link === "profile" ? "wd-profile-link" : undefined}
              className={
                current
                  ? "font-semibold text-black no-underline"
                  : "text-red-600 no-underline"
              }
            >
              {label(link)}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
