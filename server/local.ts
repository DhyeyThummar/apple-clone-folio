// Simplified server for local development
import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple logging middleware
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    console.log(`${req.method} ${req.path}`);
  }
  next();
});

async function startServer() {
  const server = await registerRoutes(app);
  
  // Serve static files from client/dist (after build)
  const staticPath = path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  
  // Fallback to index.html for SPA
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(staticPath, "index.html"));
  });

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer().catch(console.error);