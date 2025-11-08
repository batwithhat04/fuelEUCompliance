# FuelEU Maritime Compliance Platform

A full-stack application for monitoring, comparing, and managing maritime fuel emissions in compliance with the FuelEU Maritime Regulation.  
This repository demonstrates a minimal, production-aware implementation of route tracking, compliance comparison, banking, and pooling — implemented with React, Node.js, TypeScript, and PostgreSQL.

---

## Overview

This project was developed as part of the FuelEU Full-Stack Developer Assignment to demonstrate:

- Clean Hexagonal Architecture (Ports & Adapters)
- Domain-driven modelling for Routes, Compliance Balances (CB), Banking & Pooling
- Integration: frontend + backend + database with end-to-end type safety
- Practical AI-agent assisted development (see AGENT_WORKFLOW.md)

---

## Project Structure (high level)

```
fuel-eu-compliance/
│
├── backend/
│ ├── src/
│ │ ├── domain/
│ │ ├── application/
│ │ ├── infrastructure/
│ │ └── server.ts
│ ├── tests/
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ └── api/
│ ├── package.json
│ └── vite.config.ts
│
├── docker-compose.yml
├── AGENT_WORKFLOW.md
├── REFLECTION.md
└── README.md
```

---

## Tech Stack

### Frontend
- React (Vite + TypeScript)
- TailwindCSS

### Backend
- Node.js + Express + TypeScript
- PostgreSQL
- Jest + Supertest for testing
- Docker & Docker Compose for infra

---

## Features Implemented

- Route management (list / create)
- Compliance Balance (CB) read + deposit API
- Banking (bank surplus) — scaffolded
- Pooling (pool creation/validation) — scaffolded
- Frontend dashboard with:
  - Routes tab
  - Compliance balance display + deposit
  - Simple compare/baseline UI

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm
- Docker Desktop

### 1) Clone repository
```bash
git clone https://github.com/batwithhat04/fuelEUCompliance
cd fuelEUCompliance
```

### 2) Start PostgreSQL
```bash
docker compose up -d
```

### 3) Backend setup
```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:4000`.

### 4) Frontend setup
```bash
cd ../frontend
npm install
echo "VITE_API_BASE=http://localhost:4000/api" > .env
npm run dev
```

Frontend runs on `http://localhost:5173`.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/routes` | List all routes |
| POST | `/routes` | Create new route |
| GET | `/cb/:id` | Get compliance balance |
| POST | `/cb/:id/deposit` | Deposit CO₂ balance |
| POST | `/banking/bank` | Bank surplus (scaffold) |
| POST | `/pools` | Create/validate pooling (scaffold) |

---

## Testing

```bash
cd backend
npm run test
```

---

## AI Agent Usage

This project used AI assistance (ChatGPT / GitHub Copilot / Cursor / Claude) to accelerate scaffolding and design decisions.  
See `AGENT_WORKFLOW.md` for detailed workflow and ethical usage documentation.

---

## Author

Developed by **Avinash Singh**  
Assisted by **AI Agents** (ChatGPT GPT‑5, Copilot, Claude, Cursor)

---

## License

Educational / Demonstration Use Only  
© 2025 Avinash Singh. All rights reserved.
