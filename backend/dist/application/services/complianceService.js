"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceService = void 0;
class ComplianceService {
    constructor(complianceRepo) {
        this.complianceRepo = complianceRepo;
    }
    async getBalance(entityId) {
        return this.complianceRepo.get(entityId);
    }
    async deposit(entityId, amountKg) {
        if (amountKg <= 0)
            throw new Error("amount must be > 0");
        const existing = await this.complianceRepo.get(entityId);
        let newBal = amountKg;
        if (existing)
            newBal = existing.balanceKgCO2e + amountKg;
        const cb = { id: entityId, balanceKgCO2e: newBal, updatedAt: new Date().toISOString() };
        return this.complianceRepo.upsert(cb);
    }
}
exports.ComplianceService = ComplianceService;
