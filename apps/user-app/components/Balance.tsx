"use client";

import { useBalance } from "@repo/store";
import React from "react";

export default function Balance() {
  const balance = useBalance();
  return (
    <div>
      <h1>{balance}</h1>
    </div>
  );
}
