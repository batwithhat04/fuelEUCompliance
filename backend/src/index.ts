import express from "express";
import dotenv from "dotenv";
import routes from "./adapters/http/routes";
import { pool } from "./infra/dbClient";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// health
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api", routes);

app.listen(port, async () => {
  console.log(`Backend listening on ${port}`);
  // ensure tables
  await pool.query(`
    CREATE TABLE IF NOT EXISTS routes (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      "from" TEXT,
      "to" TEXT,
      distance_km NUMERIC NOT NULL,
      created_at TIMESTAMP NOT NULL
    );
    CREATE TABLE IF NOT EXISTS compliance_balances (
      id TEXT PRIMARY KEY,
      balance_kg_co2e NUMERIC NOT NULL,
      updated_at TIMESTAMP NOT NULL
    );
  `);
  console.log("DB tables ensured");
});
