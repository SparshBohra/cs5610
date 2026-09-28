"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "../../session";

export default function Signin() {
  const router = useRouter();

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <label htmlFor="wd-username">Username</label>
      <input id="wd-username" defaultValue="sparsh" />
      <label htmlFor="wd-password">Password</label>
      <input id="wd-password" type="password" defaultValue="123" />
      <button
        id="wd-signin-btn"
        type="button"
        onClick={() => {
          signIn();
          router.push("/dashboard");
        }}
      >
        Sign in
      </button>
      <div id="wd-account-navigation">
        <Link href="/account/signup" id="wd-signup-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
