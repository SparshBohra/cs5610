"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signedIn } from "../session";

export default function AccountIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace(signedIn() ? "/account/profile" : "/account/signin");
  }, [router]);
  return null;
}
