"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-md">
      <h1 className="mb-4 text-3xl font-normal">Sign in</h1>
      <label htmlFor="wd-username" className="mb-1 block text-sm">
        Username
      </label>
      <input
        id="wd-username"
        placeholder="username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label htmlFor="wd-password" className="mb-1 block text-sm">
        Password
      </label>
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="rounded bg-red-600 px-4 py-2 text-white"
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
