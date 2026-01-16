# JDK Electrical Website

## Overview

A premium electrician business website for JDK Electrical built with a modern full-stack architecture. The site communicates safety, reliability, and professional workmanship through a dark, premium visual design with electric blue and gold accent colors. Features include service listings, contact form submissions, and informational pages about the business.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark electric theme (navy, charcoal, electric blue, gold accents)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints defined in shared routes file with Zod schemas for type-safe validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect

### Data Storage
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema**: Two main tables - `services` (electrical service offerings) and `contact_submissions` (customer inquiries)
- **Migrations**: Drizzle Kit for schema management (`npm run db:push`)

### Project Structure
- `/client` - React frontend application
- `/server` - Express backend server
- `/shared` - Shared types, schemas, and route definitions
- `/migrations` - Database migration files

### Build System
- Development: TSX for running TypeScript directly
- Production: Custom build script using esbuild for server, Vite for client
- Output: Combined into `/dist` directory

### Key Design Patterns
- Shared Zod schemas between frontend and backend for type safety
- API routes defined centrally in `shared/routes.ts` with input/output schemas
- Storage abstraction layer (`IStorage` interface) for database operations
- Component-based UI with reusable service cards, forms, and layout components

## External Dependencies

### Database
- PostgreSQL database (required, provisioned separately)
- Connection via `DATABASE_URL` environment variable
- Session storage using `connect-pg-simple`

### Frontend Libraries
- Radix UI primitives for accessible components
- Embla Carousel for image carousels
- Recharts for any chart visualizations
- Lucide React for icons

### Development Tools
- Replit-specific Vite plugins for development experience
- PostCSS with Tailwind and Autoprefixer