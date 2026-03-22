# Run the project with Docker

Prerequisites: Docker installed on your machine.

From the project root (`freeflow-transport-main`):

```bash
# Build and start (one command)
docker compose up --build

# OR run in background
docker compose up --build -d

# Stop
docker compose down
```

The dev server will be available at http://localhost:5173. Vite is started with `--host 0.0.0.0` so it is accessible from the host machine.

If you prefer to run locally without Docker, install Node.js (>=18), then:

```bash
cd freeflow-transport-main
npm install
npm run dev
```
