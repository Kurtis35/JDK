import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Pure frontend: No backend routes needed.
  // API requests are mocked on the frontend.
  
  return httpServer;
}
