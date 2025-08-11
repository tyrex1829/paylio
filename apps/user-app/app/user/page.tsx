import React from "react";
import { client } from "@repo/db/client";
import Balance from "../../components/Balance";

export default async function User() {
  const user = await client.user.create({
    data: {
      email: "asd",
      name: "adsads",
    },
  });

  return (
    <div>
      <Balance />
      <h1>dbcdhc</h1>
    </div>
  );
}
