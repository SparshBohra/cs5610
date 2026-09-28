"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { signedIn } from "./session";

export default function Rail() {
  const path = usePathname();
  const [inApp, setInApp] = useState(false);

  useEffect(() => {
    setInApp(signedIn());
  }, [path]);

  const accountHref = inApp ? "/account/profile" : "/account/signin";

  return (
    <nav id="wd-kambaz-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer">
        NEU
      </a>
      <Link href={accountHref} id="wd-account-link">
        Account
      </Link>
      <br />
      <Link href="/dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />
      <Link href="/dashboard" id="wd-courses-link">
        Courses
      </Link>
      <br />
      <Link href="/calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />
      <Link href="/inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />
      <Link href="/labs" id="wd-labs-link">
        Labs
      </Link>
    </nav>
  );
}
