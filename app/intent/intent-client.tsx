"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function IntentClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sell = searchParams.get("sell");

  return (
    <div style={{ padding: 24 }}>
      <h1>How would you like to get started?</h1>

      {sell === "true" && (
        <p style={{ marginTop: 12, color: "#555" }}>
          If you also need to sell a property, we’ll help coordinate that after
          your offer strategy is clear.
        </p>
      )}

      <div style={{ marginTop: 24 }}>
        <button onClick={() => router.push("/note")}>
          Learn how offers work
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => router.push("/note")}>
          I have a property in mind
        </button>
      </div>
    </div>
  );
}
