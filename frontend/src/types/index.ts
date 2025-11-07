export type Route = {
  id: string;
  name: string;
  from: string;
  to: string;
  distanceKm: number;
  createdAt: string;
};

export type ComplianceBalance = {
  id: string;
  balanceKgCO2e: number;
  updatedAt: string;
};
