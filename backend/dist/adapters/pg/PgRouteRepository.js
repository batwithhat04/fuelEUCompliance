"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgRouteRepository = void 0;
const dbClient_1 = require("../../infra/dbClient");
const crypto_1 = require("crypto");
class PgRouteRepository {
    async list() {
        const res = await (0, dbClient_1.query)(`SELECT id, name, "from", "to", distance_km, created_at FROM routes ORDER BY created_at DESC`);
        return res.rows.map((r) => ({
            id: r.id,
            name: r.name,
            from: r.from,
            to: r.to,
            distanceKm: Number(r.distance_km),
            createdAt: r.created_at.toISOString(),
        }));
    }
    async create(route) {
        const id = (0, crypto_1.randomUUID)();
        const now = new Date();
        await (0, dbClient_1.query)(`INSERT INTO routes (id, name, "from", "to", distance_km, created_at) VALUES ($1,$2,$3,$4,$5,$6)`, [id, route.name, route.from, route.to, route.distanceKm, now]);
        return {
            id,
            name: route.name,
            from: route.from,
            to: route.to,
            distanceKm: route.distanceKm,
            createdAt: now.toISOString(),
        };
    }
    async findById(id) {
        const res = await (0, dbClient_1.query)(`SELECT id, name, "from", "to", distance_km, created_at FROM routes WHERE id=$1`, [id]);
        if (res.rowCount === 0)
            return null;
        const r = res.rows[0];
        return {
            id: r.id,
            name: r.name,
            from: r.from,
            to: r.to,
            distanceKm: Number(r.distance_km),
            createdAt: r.created_at.toISOString(),
        };
    }
}
exports.PgRouteRepository = PgRouteRepository;
