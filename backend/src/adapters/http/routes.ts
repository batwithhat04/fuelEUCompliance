import express from "express";
import { RouteService } from "../../application/services/routeService";
import { ComplianceService } from "../../application/services/complianceService";
import { PgRouteRepository } from "../pg/PgRouteRepository";
import { PgComplianceRepository } from "../pg/PgComplianceRepository";

const router = express.Router();

// instantiate with PG adapters. In production inject via DI
const routeRepo = new PgRouteRepository();
const complianceRepo = new PgComplianceRepository();
const routeService = new RouteService(routeRepo);
const complianceService = new ComplianceService(complianceRepo);

// routes
router.get("/routes", async (req, res) => {
  try {
    const r = await routeService.listRoutes();
    res.json(r);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});




router.post("/routes", express.json(), async (req, res) => {
  try {
    const { name, from, to, distanceKm } = req.body;
    const created = await routeService.createRoute({ name, from, to, distanceKm });
    res.status(201).json(created);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/cb/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const cb = await complianceService.getBalance(id);
    if (!cb) return res.status(404).json({ error: "not found" });
    res.json(cb);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/cb/:id/deposit", express.json(), async (req, res) => {
  try {
    const id = req.params.id;
    const { amountKg } = req.body;
    const result = await complianceService.deposit(id, Number(amountKg));
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
