"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        
        {/* Step Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Are you buying a property?
        </h1>

        <p className="mt-2 text-gray-600 text-sm">
          This helps us understand your situation before we build your offer strategy.
        </p>

        {/* Options */}
        <div className="mt-6 space-y-4">

          {/* Buyer Only */}
          <Link href="/intent" className="block">
            <div className="border border-gray-300 rounded-xl p-4 hover:border-gray-900 transition cursor-pointer">
              <div className="font-medium text-gray-900">Buyer</div>
              <div className="text-sm text-gray-500 mt-1">
                I’m only purchasing a property
              </div>
            </div>
          </Link>

          {/* Buyer + Needs to Sell */}
          <Link href="/intent?sell=true" className="block">
            <div className="border border-gray-300 rounded-xl p-4 hover:border-gray-900 transition cursor-pointer">
              <div className="font-medium text-gray-900">
                Buyer who also needs to sell
              </div>
              <div className="text-sm text-gray-500 mt-1">
                I need to sell my current home as well
              </div>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
