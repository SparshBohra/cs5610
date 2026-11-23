"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "../../session";

export default function Signup() {
  const router = useRouter();

  return (
    <div id="wd-signup-screen" className="max-w-md">
      <h1 className="mb-4 text-3xl font-normal">Sign up</h1>
      <label htmlFor="wd-username" className="mb-1 block text-sm">
        Username
      </label>
      <input
        id="wd-username"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label htmlFor="wd-password" className="mb-1 block text-sm">
        Password
      </label>
      <input
        id="wd-password"
        type="password"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label htmlFor="wd-verify" className="mb-1 block text-sm">
        Verify password
      </label>
      <input
        id="wd-verify"
        type="password"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        type="button"
        className="rounded bg-red-600 px-4 py-2 text-white"
        onClick={() => {
          signIn();
          router.push("/account/profile");
        }}
      >
        Sign up
      </button>
      <p className="mt-4">
        <Link href="/account/signin" className="text-red-600 no-underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
