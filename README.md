# Assistant Monorepo

Welcome to the **Assistant** monorepo! This project is a full-stack, production-grade application featuring multiple frontend interfaces and a robust backend API, all managed with [Turborepo](https://turbo.build/repo).

## 🏗 Architecture

This monorepo contains the following apps and packages:

### 📱 Apps

- `apps/admin`: Admin dashboard built with Vite, React, and MUI.
- `apps/user`: User portal built with Vite, React, and MUI.
- `apps/web`: Public-facing marketing website built with Vite, React, and MUI.
- `apps/docs`: Documentation site built with Next.js.
- `apps/api`: High-performance backend REST API built with FastAPI (Python), SQLAlchemy, and Alembic.

### 📦 Packages

- `packages/ui`: Shared React components and MUI themes used across the frontends.
- `@repo/eslint-config`: Shared ESLint configurations.
- `@repo/typescript-config`: Shared `tsconfig.json` files for consistent type checking.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) & [pnpm](https://pnpm.io/)
- [Python 3.11+](https://www.python.org/)

### Installation

1. Install frontend dependencies from the root:
   ```sh
   pnpm install
   ```

2. Setup environment variables:
   ```sh
   cp .env.example .env
   ```
   *Edit `.env` with your specific local connection strings for Postgres, Redis, etc.*

3. Install backend dependencies:
   ```sh
   cd apps/api
   python -m venv .venv
   source .venv/bin/activate
   pip install -e ".[dev]"
   ```

### Running the Project

**Frontend:**
From the root of the project, run:
```sh
pnpm run dev
```
This command starts all Vite and Next.js applications simultaneously on different ports.

**Backend:**
From the `apps/api` directory (with your virtual environment activated):
```sh
uvicorn app.main:app --reload
```

## 🛠 Commands

- `pnpm build`: Build all applications and packages.
- `pnpm lint`: Run ESLint across all projects.
- `pnpm check-types`: Run TypeScript compiler checks.
- `pytest`: Run backend Python tests (inside `apps/api`).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
