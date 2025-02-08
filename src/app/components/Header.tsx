import Link from "next/link";
import React from "react";
import UserAvatar from "./Avatar";
import { auth } from "../../../auth";
import Google from "./Google";
import Logout from "./Logout";
export default async function Header() {
  const session = await auth();
  return (
    <header className="max-w-5xl mx-auto p-5">
      <nav className="flex items-center justify-between">
        <Link href="/">iShadow</Link>
        {session ? (
          <div className="flex items-center gap-2">
            <span>{session.user?.name}</span>
            <Logout />
            <Link href="/profile">
              <UserAvatar />
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Google />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
