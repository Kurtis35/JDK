import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.services.get.path, async (req, res) => {
    const service = await storage.getServiceBySlug(req.params.slug);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const submission = await storage.createContactSubmission(input);
      res.status(201).json(submission);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data
  seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    const seedServices = [
      {
        title: "Electrical Installations",
        description: "Complete electrical installations for new homes, renovations, and extensions. We ensure all wiring meets the latest safety standards.",
        icon: "Zap",
        slug: "electrical-installations",
      },
      {
        title: "Electrical Maintenance",
        description: "Routine maintenance and inspections to keep your electrical systems running safely and efficiently.",
        icon: "Wrench",
        slug: "electrical-maintenance",
      },
      {
        title: "DB Board Upgrades",
        description: "Expert distribution board installations, upgrades, and rewiring to handle modern electrical loads safely.",
        icon: "Server",
        slug: "db-board-upgrades",
      },
      {
        title: "Fault Finding & Repairs",
        description: "Quick and accurate troubleshooting of electrical faults to minimize downtime and ensure safety.",
        icon: "Search",
        slug: "fault-finding-repairs",
      },
      {
        title: "Lighting Installations",
        description: "Indoor and outdoor lighting solutions, including LED upgrades, security lighting, and automated systems.",
        icon: "Lightbulb",
        slug: "lighting-installations",
      },
      {
        title: "Commercial Electrical",
        description: "Comprehensive electrical services for offices, retail spaces, and industrial properties.",
        icon: "Building2",
        slug: "commercial-electrical",
      },
    ];

    for (const service of seedServices) {
      await storage.createService(service);
    }
    console.log("Database seeded with services.");
  }
}
