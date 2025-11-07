import { RouteRepository } from "../../ports/repositories/RouteRepository";
import { Route } from "../../domain/models/Route";

export class RouteService {
  constructor(private routeRepo: RouteRepository) {}

  async listRoutes(): Promise<Route[]> {
    return this.routeRepo.list();
  }

  async createRoute(data: { name: string; from: string; to: string; distanceKm: number }): Promise<Route> {
    // domain validation
    if (!data.name || data.distanceKm <= 0) {
      throw new Error("Invalid route data");
    }
    return this.routeRepo.create({
      name: data.name,
      from: data.from,
      to: data.to,
      distanceKm: data.distanceKm,
    } as any);
  }
}
