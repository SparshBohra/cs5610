"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "../../session";

export default function Signup() {
  const router = useRouter();

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <label htmlFor="wd-username">Username</label>
      <input id="wd-username" />
      <label htmlFor="wd-password">Password</label>
      <input id="wd-password" type="password" />
      <label htmlFor="wd-verify">Verify password</label>
      <input id="wd-verify" type="password" />
      <button
        type="button"
        onClick={() => {
          signIn();
          router.push("/account/profile");
        }}
      >
        Sign up
      </button>
      <p>
        <Link href="/account/signin">Sign in</Link>
      </p>
    </div>
  );
}
