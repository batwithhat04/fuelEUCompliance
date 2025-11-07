"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgComplianceRepository = void 0;
const dbClient_1 = require("../../infra/dbClient");
class PgComplianceRepository {
    async get(entityId) {
        const res = await (0, dbClient_1.query)(`SELECT id, balance_kg_co2e, updated_at FROM compliance_balances WHERE id=$1`, [entityId]);
        if (res.rowCount === 0)
            return null;
        const r = res.rows[0];
        return { id: r.id, balanceKgCO2e: Number(r.balance_kg_co2e), updatedAt: r.updated_at.toISOString() };
    }
    async upsert(cb) {
        const now = new Date();
        await (0, dbClient_1.query)(`INSERT INTO compliance_balances (id, balance_kg_co2e, updated_at) VALUES ($1,$2,$3)
       ON CONFLICT (id) DO UPDATE SET balance_kg_co2e = EXCLUDED.balance_kg_co2e, updated_at = EXCLUDED.updated_at`, [cb.id, cb.balanceKgCO2e, now]);
        return { ...cb, updatedAt: now.toISOString() };
    }
}
exports.PgComplianceRepository = PgComplianceRepository;
