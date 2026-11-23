"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "../session";

export default function AccountFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const onProfile = pathname.includes("/profile");

  return (
    <div id="wd-kambaz-account" className="flex gap-10">
      <div
        id="wd-account-navigation"
        className="w-36 shrink-0 space-y-3 text-lg"
      >
        <div>
          <Link
            href="/account/profile"
            id="wd-profile-link"
            className={
              onProfile
                ? "font-semibold text-black no-underline"
                : "text-red-600 no-underline"
            }
          >
            Profile
          </Link>
        </div>
        <div>
          <button
            type="button"
            id="wd-signout-link"
            className="cursor-pointer border-0 bg-transparent p-0 text-left text-lg text-red-600"
            onClick={() => {
              signOut();
              router.push("/dashboard");
            }}
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
