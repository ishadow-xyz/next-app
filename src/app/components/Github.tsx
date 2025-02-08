"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Github() {
  return (
    <div>
      <button onClick={() => signIn("github", { callbackUrl: "/" })}>
        <FaGithub />
        <span>Sign in with Github</span>
      </button>
    </div>
  );
}
