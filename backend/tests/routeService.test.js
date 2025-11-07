"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeService_1 = require("../application/services/routeService");
class InMemoryRouteRepo {
    constructor() {
        this.items = [];
    }
    async list() { return this.items; }
    async create(route) {
        const id = "r1";
        const now = new Date().toISOString();
        const inserted = { id, ...route, createdAt: now };
        this.items.push(inserted);
        return inserted;
    }
    async findById(id) { return this.items.find(x => x.id === id) || null; }
}
test("routeService create + list", async () => {
    const repo = new InMemoryRouteRepo();
    const svc = new routeService_1.RouteService(repo);
    const r = await svc.createRoute({ name: "A-B", from: "A", to: "B", distanceKm: 123 });
    expect(r.id).toBeDefined();
    const lst = await svc.listRoutes();
    expect(lst.length).toBe(1);
    expect(lst[0].name).toBe("A-B");
});
