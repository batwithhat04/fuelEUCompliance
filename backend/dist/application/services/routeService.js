"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteService = void 0;
class RouteService {
    constructor(routeRepo) {
        this.routeRepo = routeRepo;
    }
    async listRoutes() {
        return this.routeRepo.list();
    }
    async createRoute(data) {
        // domain validation
        if (!data.name || data.distanceKm <= 0) {
            throw new Error("Invalid route data");
        }
        return this.routeRepo.create({
            name: data.name,
            from: data.from,
            to: data.to,
            distanceKm: data.distanceKm,
        });
    }
}
exports.RouteService = RouteService;
