"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Google() {
  return (
    <div>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        <div className="flex items-center gap-2">
          <FcGoogle className="text-2xl" />
          <span>Sign in with Google</span>
        </div>
      </button>
    </div>
  );
}
