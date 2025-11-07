import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">FE</div>
          <div>
            <div className="font-semibold">FuelEU Compliance</div>
            <div className="text-sm text-gray-500">Dashboard</div>
          </div>
        </div>
        <div className="text-sm text-gray-600">Avinash Singh</div>
      </div>
    </header>
  );
}
