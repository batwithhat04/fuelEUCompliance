# ⚓ FuelEU Maritime — FullStack Developer Assignment

A minimal, cleanly structured implementation of a **Fuel EU Maritime compliance module**.

---

## 🧱 Tech Stack

| Layer | Tech |
|-------|------|
| **Frontend** | React + TypeScript + TailwindCSS |
| **Backend** | Node.js + Express + TypeScript |
| **Database** | PostgreSQL |
| **Architecture** | Hexagonal (Ports & Adapters / Clean Architecture) |
| **Testing** | Jest |
| **Docs** | Markdown + AI-assisted reflections |

---

## 🚀 Project Overview

The project models a simplified **FuelEU Maritime compliance platform** to manage:

- ✅ Vessel Routes  
- ⚖️ Compliance Balances (CB)  
- 🏦 Banking & Pooling  
- 📊 Dashboard Visualization  

---

## 📂 Folder Structure

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


---

## 🧑‍💻 Setup Instructions

### 1️⃣ Clone Repo
```bash
git clone https://github.com/<your-username>/fuel-eu-compliance.git
cd fuel-eu-compliance

2️⃣ Backend Setup
cd backend
npm init -y
npm install express cors pg dotenv typescript ts-node-dev jest @types/express @types/node --save
npx tsc --init


Run server:

npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm create vite@latest . -- --template react-ts
npm install axios tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev

4️⃣ Database (Docker)
docker-compose up -d

🧩 Features Implemented

✅ Route management (CRUD)

✅ Compliance Balance (CB) calculation API

✅ Banking & Pooling simulation

✅ Dashboard frontend (React)

✅ Type-safe integration (TypeScript)

✅ Hexagonal backend architecture

✅ Dockerized Postgres

📊 Example API
GET /api/routes

Returns all vessel routes.

POST /api/compliance

Calculates compliance balance for a route.

🧠 Documentation

AI Workflow: AGENT_WORKFLOW.md

Developer Reflection: REFLECTION.md

🧪 Testing
cd backend
npm run test

🧰 Credits

Developed by Avinash Singh
AI assistance from ChatGPT (GPT-5), GitHub Copilot, Cursor, and Claude.