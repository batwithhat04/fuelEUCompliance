import { getJSON, postJSON } from "./apiClient";

export type Route = {
  id: string;
  name: string;
  from: string;
  to: string;
  distanceKm: number;
  createdAt: string;
};

export async function listRoutes() { return getJSON<Route[]>("/routes"); }
export async function createRoute(payload: { name: string; from: string; to: string; distanceKm: number }) {
  return postJSON<Route>("/routes", payload);
}

export type ComplianceBalance = { id: string; balanceKgCO2e: number; updatedAt: string };
export async function getCB(id: string) { return getJSON<ComplianceBalance>(`/cb/${id}`); }
export async function depositCB(id: string, amountKg: number) {
  return postJSON<ComplianceBalance>(`/cb/${id}/deposit`, { amountKg });
}
