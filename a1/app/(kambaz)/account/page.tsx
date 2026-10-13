"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn } from "../session";

export default function AccountIndex() {
  const router = useRouter();
  useEffect(() => {
    signIn();
    router.replace("/account/profile");
  }, [router]);
  return null;
}
