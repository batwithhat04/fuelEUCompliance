import { ComplianceBalance } from "../../domain/models/ComplianceBalance";

export interface ComplianceRepository {
  get(entityId: string): Promise<ComplianceBalance | null>;
  upsert(cb: ComplianceBalance): Promise<ComplianceBalance>;
}
