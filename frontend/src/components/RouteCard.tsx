import React from "react";
import { Route } from "../api/routes";

export default function RouteCard({ r }: { r: Route }) {
  return (
    <div className="border rounded p-3 shadow-sm">
      <div className="font-semibold">{r.name}</div>
      <div className="text-sm text-gray-600">{r.from} → {r.to}</div>
      <div className="mt-2 text-xs">Distance: {r.distanceKm} km</div>
      <div className="text-xs text-gray-500">Created: {new Date(r.createdAt).toLocaleString()}</div>
    </div>
  );
}
