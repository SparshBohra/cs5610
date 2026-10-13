"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { signIn, signedIn } from "./session";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
  { label: "Calendar", path: "/calendar", icon: IoCalendarOutline },
  { label: "Inbox", path: "/inbox", icon: FaInbox },
  { label: "Labs", path: "/labs", icon: LiaCogSolid },
] as const;

export default function Rail() {
  const pathname = usePathname() ?? "";
  const [, setReady] = useState(false);

  useEffect(() => {
    // Prototype: stay signed in so Account opens Profile (with Sign out), not Sign in
    if (!signedIn()) {
      signIn();
    }
    setReady(true);
  }, [pathname]);

  const accountActive = pathname.includes("/account");

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:flex md:flex-col"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center bg-black py-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/neu-n.svg"
          width={56}
          height={56}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>
      <Link
        href="/account/profile"
        id="wd-account-link"
        className={`block py-3 text-center text-sm no-underline ${
          accountActive ? "bg-white text-red-600" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${
            accountActive ? "text-red-600" : "text-red-500"
          }`}
        />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const active =
          link.label === "Courses"
            ? pathname.includes("/courses")
            : pathname.includes(link.path);
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.path}
            id={`wd-${link.label.toLowerCase()}-link`}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className="inline-block text-3xl text-red-500" />
            <br />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
