import { ComplianceRepository } from "../../ports/repositories/ComplianceRepository";
import { ComplianceBalance } from "../../domain/models/ComplianceBalance";

export class ComplianceService {
  constructor(private complianceRepo: ComplianceRepository) {}

  async getBalance(entityId: string): Promise<ComplianceBalance | null> {
    return this.complianceRepo.get(entityId);
  }

  async deposit(entityId: string, amountKg: number) {
    if (amountKg <= 0) throw new Error("amount must be > 0");
    const existing = await this.complianceRepo.get(entityId);
    let newBal = amountKg;
    if (existing) newBal = existing.balanceKgCO2e + amountKg;
    const cb: ComplianceBalance = { id: entityId, balanceKgCO2e: newBal, updatedAt: new Date().toISOString() };
    return this.complianceRepo.upsert(cb);
  }
}
