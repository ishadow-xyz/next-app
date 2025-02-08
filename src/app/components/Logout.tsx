"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function Logout() {
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: "/" })}>
        <span>Sign out</span>
      </button>
    </div>
  );
}
