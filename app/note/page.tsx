"use client";

import { useRouter } from "next/navigation";

export default function NotePage() {
  const router = useRouter();

  return (
    <main style={{ padding: 40 }}>
      <h1>Selling your current home</h1>

      <p style={{ marginTop: 12, color: "#555" }}>
        If you also need to sell a property, we’ll help coordinate that
        after your offer strategy is clear.
      </p>

      <button
        onClick={() => router.push("/")}
        style={{ marginTop: 20, padding: "8px 12px" }}
      >
        Continue
      </button>
    </main>
  );
}
