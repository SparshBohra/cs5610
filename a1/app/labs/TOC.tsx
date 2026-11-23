"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-labs", label: "Labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1" },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2" },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3" },
  { href: "/labs/lab4", id: "wd-lab4-link", label: "Lab 4" },
  { href: "/labs/lab5", id: "wd-lab5-link", label: "Lab 5" },
  { href: "/dashboard", id: "wd-kambaz-link", label: "Kambaz" },
] as const;

export default function TOC() {
  const pathname = usePathname() ?? "";
  // mark the lab we are on so it looks highlited
  return (
    <ul className="m-0 list-none space-y-2 p-0 text-base">
      <li>
        <b>Sparsh Bohra</b>
      </li>
      {LINKS.map((link) => {
        const current =
          link.href === "/labs"
            ? pathname === "/labs"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              id={link.id}
              className={
                current
                  ? "font-semibold text-black no-underline"
                  : "text-red-600 no-underline"
              }
            >
              {link.label}
            </Link>
          </li>
        );
      })}
      <li>
        <a
          href="https://github.com/SparshBohra/cs5610"
          id="wd-github"
          className="text-red-600 no-underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
