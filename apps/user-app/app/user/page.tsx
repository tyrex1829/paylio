import React from "react";
import { client } from "@repo/db/client";

export default async function User() {
  const user = await client.user.create({
    data: {
      email: "asd",
      name: "adsads",
    },
  });

  return (
    <div>
      <h1>dbcdhc</h1>
    </div>
  );
}
