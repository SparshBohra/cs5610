"use client";

import { useRouter } from "next/navigation";
import { signOut } from "../../session";

export default function Profile() {
  const router = useRouter();

  return (
    <div id="wd-profile-screen">
      <h1>Sparsh Bohra</h1>
      <label>Username</label>
      <input defaultValue="sparsh" />
      <label>First name</label>
      <input defaultValue="Sparsh" />
      <label>Last name</label>
      <input defaultValue="Bohra" />
      <label>Email</label>
      <input defaultValue="bohra.s@northeastern.edu" />
      <h2>Biography</h2>
      <p>CS student. Web development, fall 2026.</p>
      <button
        type="button"
        onClick={() => {
          signOut();
          router.push("/account/signin");
        }}
      >
        Sign out
      </button>
    </div>
  );
}
