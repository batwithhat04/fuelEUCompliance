const { RouteService } = require("../src/application/services/routeService");

import { Route } from "../src/domain/models/Route";

// simple in-memory repo mock
class InMemoryRouteRepo {
  items: any[] = [];

  async findAll(): Promise<Route[]> {
    return this.items;
  }

  async save(route: any): Promise<Route> {
    const id = `r${this.items.length + 1}`;
    const now = new Date().toISOString();
    const inserted = { id, ...route, createdAt: now };
    this.items.push(inserted);
    return inserted;
  }

  async findById(id: string): Promise<Route | null> {
    return this.items.find((x) => x.id === id) || null;
  }
}

test("RouteService: create and list routes", async () => {
  const repo = new InMemoryRouteRepo();
  const svc = new RouteService(repo as any);

  const r = await svc.addRoute({
    id: "1",
    origin: "A",
    destination: "B",
    emissions: 120,
  });

  expect(r.id).toBeDefined();

  const lst = await svc.getAllRoutes();
  expect(lst.length).toBe(1);
  expect(lst[0].origin).toBe("A");
});
