"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const { currentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
    }
  }, [currentUser, router]);

  if (!currentUser) return null;
  return <ProfileForm key={currentUser._id} user={currentUser} />;
}

function ProfileForm({ user }: { user: User }) {
  const [profile, setProfile] = useState(user);
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  return (
    <div id="wd-profile-screen" className="max-w-md">
      <h1 className="mb-4 text-3xl font-normal">Profile</h1>
      <label className="mb-1 block text-sm">Username</label>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label className="mb-1 block text-sm">Password</label>
      <input
        id="wd-password"
        type="password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label className="mb-1 block text-sm">First name</label>
      <input
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label className="mb-1 block text-sm">Last name</label>
      <input
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label className="mb-1 block text-sm">Email</label>
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Sign out
      </button>
    </div>
  );
}
