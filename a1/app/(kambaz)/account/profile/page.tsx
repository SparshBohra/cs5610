"use client";

import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { signIn } from "../../session";

export default function Profile() {
  useEffect(() => {
    signIn();
  }, []);

  return (
    <div id="wd-profile-screen" className="max-w-2xl">
      <h1 className="mb-6 text-3xl font-normal">User Profile</h1>

      <div className="flex flex-wrap gap-8">
        <div className="text-center">
          <FaUserCircle className="mx-auto text-neutral-400" size={120} />
          <p className="mt-2 text-sm text-neutral-600">Sparsh Bohra</p>
        </div>
        <div className="min-w-[260px] flex-1">
          <h2 className="mb-4 text-2xl font-semibold">Sparsh Bohra</h2>
          <label className="mb-1 block text-sm">Username</label>
          <input
            defaultValue="sparsh"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label className="mb-1 block text-sm">First name</label>
          <input
            defaultValue="Sparsh"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label className="mb-1 block text-sm">Last name</label>
          <input
            defaultValue="Bohra"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label className="mb-1 block text-sm">Email</label>
          <input
            defaultValue="bohra.s@northeastern.edu"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <h3 className="mb-2 text-lg font-semibold">Biography</h3>
          <p className="text-neutral-700">
            CS student. Web development, fall 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
