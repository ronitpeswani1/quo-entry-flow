export const dynamic = "force-dynamic";

import { Suspense } from "react";
import IntentClient from "./intent-client";

export default function IntentPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>
      <IntentClient />
    </Suspense>
  );
}
