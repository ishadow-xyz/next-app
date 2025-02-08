import Link from "next/link";
import React from "react";
import UserAvatar from "./user-avatar";
import { auth } from "../../auth";
import SignIn from "./sign-in";
import { FaGithub } from "react-icons/fa";
import SignOut from "./sign-out";

export default async function Header() {
  const session = await auth();
  return (
    <header className="max-w-5xl mx-auto p-5">
      <nav className="flex items-center justify-between">
        <Link href="/">Home</Link>
        {session ? (
          <div className="flex items-center gap-2">
            <span>{session.user?.name}</span>
            <Link href="/profile">
              <UserAvatar />
            </Link>
            <SignOut />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <FaGithub />
            <SignIn />
          </div>
        )}
      </nav>
    </header>
  );
}
