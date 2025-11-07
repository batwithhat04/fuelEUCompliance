# 🤖 AI Agent Workflow — FuelEU Maritime Compliance Platform

This document explains how AI agents were used throughout the development of the project.

---

## 🧩 Tools Used

| Tool | Purpose | Example Usage |
|------|----------|----------------|
| **GitHub Copilot** | Inline code suggestions | Autocomplete of TypeScript interfaces and helper functions |
| **Cursor IDE Agent** | Context-aware refactoring | Converted vanilla JS service logic into TypeScript + Clean Architecture layers |
| **ChatGPT (GPT-5)** | Architecture design and documentation | Helped design the Hexagonal Architecture and define domain boundaries |
| **Claude Code** | Testing and API contract validation | Suggested better test cases for compliance routes |
| **OpenAI Codex (via VSCode)** | Quick prototyping | Generated initial React components for dashboard UI |

---

## 🧱 Workflow Summary

### Step 1 — Project Architecture
- **Prompted GPT-5** to generate a clean **Hexagonal Architecture** layout for backend.
- Used **Copilot** to scaffold initial `src/` folder structure with `domain`, `application`, and `infrastructure` layers.

### Step 2 — Backend Development
- **ChatGPT** assisted in defining `Route`, `ComplianceBalance`, and `Pooling` domain entities.
- **Claude** helped design validation logic and refactor controllers to depend on `Ports`.
- Used **Copilot** to fill in CRUD repository implementations for PostgreSQL.

### Step 3 — Frontend Development
- **Cursor Agent** generated initial dashboard layout using **React + TypeScript + TailwindCSS**.
- **ChatGPT** suggested a modular structure for components and hooks.
- Integrated **Axios** API layer with domain-specific hooks for compliance and banking.

### Step 4 — Testing and Documentation
- **Claude Code** generated initial Jest test templates for backend services.
- **ChatGPT** reviewed and improved this documentation (`README.md` and `REFLECTION.md`).

---

## ⚙️ Example Prompt Snippets

### 1. Architecture Generation
> “Generate a clean hexagonal architecture in Node.js + TypeScript for a maritime compliance system, including folder structure and sample entities.”

### 2. Domain Modeling
> “Create a TypeScript class for Route and ComplianceBalance entities with clear value objects and validation.”

### 3. API Layer
> “Generate Express route handlers for CRUD operations while depending only on domain ports, not repositories directly.”

### 4. Frontend
> “Generate a React component that lists vessel routes and compliance balances using TailwindCSS cards.”

---

## 🧩 Outcomes
- Saved ~50% development time using AI-assisted scaffolding.
- Maintained architectural consistency through iterative AI feedback.
- Improved documentation clarity and modular design.

---
