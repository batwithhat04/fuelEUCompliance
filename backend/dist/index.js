"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./adapters/http/routes"));
const dbClient_1 = require("./infra/dbClient");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
// health
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api", routes_1.default);
app.listen(port, async () => {
    console.log(`Backend listening on ${port}`);
    // ensure tables
    await dbClient_1.pool.query(`
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
