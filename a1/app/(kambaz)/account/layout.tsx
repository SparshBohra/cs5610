"use client";

import AccountNavigation from "./Navigation";

export default function AccountFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wd-kambaz-account" className="flex gap-10">
      <AccountNavigation />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
