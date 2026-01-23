import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Quo – Entry Flow Prototype</h1>

      <p style={{ marginTop: 12 }}>
        Are you buying a property?
      </p>

      <div style={{ marginTop: 24 }}>
        <Link href="/intent">
          <button style={{ padding: "10px 14px" }}>
            Buyer
          </button>
        </Link>
      </div>

      <div style={{ marginTop: 12 }}>
        <Link href="/intent?sell=true">
          <button style={{ padding: "10px 14px" }}>
            Buyer who also needs to sell
          </button>
        </Link>
      </div>
    </main>
  );
}
