"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.query = query;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionString = process.env.DATABASE_URL || "postgresql://fuel_user:fuel_pass@localhost:5432/fuel_eu";
exports.pool = new pg_1.Pool({
    connectionString,
});
async function query(text, params) {
    const res = await exports.pool.query(text, params);
    return res;
}
