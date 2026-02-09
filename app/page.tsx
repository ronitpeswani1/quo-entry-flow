"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [buyerType, setBuyerType] = useState<string | null>(null);

  const handleClick = (mode: string) => {
    if (!buyerType) {
      alert("Please select your buying situation.");
      return;
    }
    router.push(`/intent?mode=${mode}&buyer=${buyerType}`);
  };

  return (
    <main className="bg-gray-100 text-gray-800">

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-semibold text-gray-900">
          Master Your Next Move.
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Design a winning offer strategy before you talk to a lender or a listing agent.
        </p>
      </section>

      {/* ACTION CARD */}
      <section className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-center text-gray-700">
          How can we help today?
        </h2>

        <div className="mt-6 space-y-4">
          <button
            onClick={() => handleClick("learn")}
            className="w-full bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            I want to learn how offers work
          </button>

          <button
            onClick={() => handleClick("property")}
            className="w-full border border-gray-300 py-3 rounded-lg font-medium text-gray-700 hover:border-gray-700 transition"
          >
            I have a specific property in mind
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-8 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="buyer" onChange={() => setBuyerType("buying")} />
            I'm just buying
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="buyer" onChange={() => setBuyerType("buying_selling")} />
            I'm buying & need to sell
          </label>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="text-center py-16 px-6">
        <h3 className="text-2xl font-semibold text-gray-800">How It will Works</h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing eli matis sit phasellus mollis sit aliquam sit nullam.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Strategize", "Verify", "Execute"].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-left">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold mb-4">
                {i + 1}
              </div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-gray-500 mt-2">Short description goes here.</p>
              <a className="text-sm text-gray-700 mt-4 inline-block">Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* UPSTREAM SECTION */}
      <section className="bg-gray-200 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Upstream, not automated.</h3>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing eli matis sit phasellus mollis sit aliquam sit nullam.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {["No Advice", "Human Verified"].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-left">
              <div className="h-32 bg-gray-100 rounded-lg mb-4"></div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-gray-500 mt-2">Short description goes here.</p>
              <a className="text-sm text-gray-700 mt-4 inline-block">Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 text-center text-sm text-gray-500">
        Copyright © 2026 QUO | All Rights Reserved
      </footer>

    </main>
  );
}
