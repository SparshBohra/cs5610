"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "../../session";

export default function Signin() {
  const router = useRouter();

  return (
    <div id="wd-signin-screen" className="max-w-md">
      <h1 className="mb-4 text-3xl font-normal">Sign in</h1>
      <label htmlFor="wd-username" className="mb-1 block text-sm">
        Username
      </label>
      <input
        id="wd-username"
        defaultValue="sparsh"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label htmlFor="wd-password" className="mb-1 block text-sm">
        Password
      </label>
      <input
        id="wd-password"
        type="password"
        defaultValue="123"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        id="wd-signin-btn"
        type="button"
        className="rounded bg-red-600 px-4 py-2 text-white"
        onClick={() => {
          signIn();
          router.push("/dashboard");
        }}
      >
        Sign in
      </button>
      <p className="mt-4">
        <Link
          href="/account/signup"
          id="wd-signup-link"
          className="text-red-600 no-underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
