import { Route } from "../../domain/models/Route";

export interface RouteRepository {
  list(): Promise<Route[]>;
  create(route: Omit<Route, "id" | "createdAt">): Promise<Route>;
  findById(id: string): Promise<Route | null>;
}
