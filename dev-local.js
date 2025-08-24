// Development server for local environment
import { createServer } from 'vite';
import express from 'express';
import { createServer as createHttpServer } from 'http';
import { registerRoutes } from './server/routes.js';

async function startDev() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Register API routes first
  await registerRoutes(app);

  // Create Vite server
  const vite = await createServer({
    configFile: 'local.config.js',
    server: { middlewareMode: true }
  });

  app.use(vite.middlewares);

  const server = createHttpServer(app);
  const port = 5000;

  server.listen(port, () => {
    console.log(`Development server running on http://localhost:${port}`);
  });
}

startDev().catch(console.error);