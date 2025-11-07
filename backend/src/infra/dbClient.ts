import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.DATABASE_URL || "postgresql://fuel_user:fuel_pass@localhost:5432/fuel_eu";

export const pool = new Pool({
  connectionString,
});

export async function query(text: string, params?: any[]) {
  const res = await pool.query(text, params);
  return res;
}
