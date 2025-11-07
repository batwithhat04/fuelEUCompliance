import { Route } from "../../domain/models/Route";
import { RouteRepository } from "../../ports/repositories/RouteRepository";
import { query } from "../../infra/dbClient";
import { randomUUID } from "crypto";

export class PgRouteRepository implements RouteRepository {
  async list(): Promise<Route[]> {
    const res = await query(`SELECT id, name, "from", "to", distance_km, created_at FROM routes ORDER BY created_at DESC`);
    return res.rows.map((r: any) => ({
      id: r.id,
      name: r.name,
      from: r.from,
      to: r.to,
      distanceKm: Number(r.distance_km),
      createdAt: r.created_at.toISOString(),
    }));
  }

  async create(route: Omit<Route, "id" | "createdAt">): Promise<Route> {
    const id = randomUUID();
    const now = new Date();
    await query(
      `INSERT INTO routes (id, name, "from", "to", distance_km, created_at) VALUES ($1,$2,$3,$4,$5,$6)`,
      [id, route.name, route.from, route.to, route.distanceKm, now]
    );
    return {
      id,
      name: route.name,
      from: route.from,
      to: route.to,
      distanceKm: route.distanceKm,
      createdAt: now.toISOString(),
    };
  }

  async findById(id: string): Promise<Route | null> {
    const res = await query(`SELECT id, name, "from", "to", distance_km, created_at FROM routes WHERE id=$1`, [id]);
    if (res.rowCount === 0) return null;
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
