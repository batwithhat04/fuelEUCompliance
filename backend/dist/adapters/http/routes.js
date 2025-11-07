"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routeService_1 = require("../../application/services/routeService");
const complianceService_1 = require("../../application/services/complianceService");
const PgRouteRepository_1 = require("../pg/PgRouteRepository");
const PgComplianceRepository_1 = require("../pg/PgComplianceRepository");
const router = express_1.default.Router();
// instantiate with PG adapters. In production inject via DI
const routeRepo = new PgRouteRepository_1.PgRouteRepository();
const complianceRepo = new PgComplianceRepository_1.PgComplianceRepository();
const routeService = new routeService_1.RouteService(routeRepo);
const complianceService = new complianceService_1.ComplianceService(complianceRepo);
// routes
router.get("/routes", async (req, res) => {
    try {
        const r = await routeService.listRoutes();
        res.json(r);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.post("/routes", express_1.default.json(), async (req, res) => {
    try {
        const { name, from, to, distanceKm } = req.body;
        const created = await routeService.createRoute({ name, from, to, distanceKm });
        res.status(201).json(created);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get("/cb/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const cb = await complianceService.getBalance(id);
        if (!cb)
            return res.status(404).json({ error: "not found" });
        res.json(cb);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.post("/cb/:id/deposit", express_1.default.json(), async (req, res) => {
    try {
        const id = req.params.id;
        const { amountKg } = req.body;
        const result = await complianceService.deposit(id, Number(amountKg));
        res.json(result);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.default = router;
