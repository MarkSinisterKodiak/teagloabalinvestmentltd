FROM node:20-alpine

WORKDIR /app

# Install dependencies first (uses cached layer when package.json unchanged)
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy source
COPY . .

EXPOSE 5173

# Run Vite dev server and bind to all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
