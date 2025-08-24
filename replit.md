# Portfolio Website

## Overview

This is a modern portfolio website for a Computer Science Engineering student specializing in data analytics and business intelligence. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with PostgreSQL as the database layer. The site features an Apple-inspired design system with smooth animations, responsive layouts, and comprehensive sections showcasing skills, projects, experience, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom Apple-inspired design system and shadcn/ui component library
- **State Management**: TanStack Query for server state management and caching
- **Routing**: React Router for client-side navigation with dedicated routes for main portfolio and 404 handling
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Radix UI primitives wrapped in custom components for accessibility and consistency

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **API Design**: RESTful API structure with `/api` prefix for all backend routes

### Development Environment
- **Dev Server**: Vite development server with hot module replacement
- **Database Management**: Drizzle Kit for schema migrations and database management
- **Type Checking**: Shared TypeScript configuration across client, server, and shared modules
- **Path Aliases**: Configured aliases for clean imports (`@/`, `@shared/`, `@assets/`)

### Design System
- **Theme**: Apple-inspired design language with neutral color palette and subtle gradients
- **Typography**: Inter font family with custom typography scale (apple-headline, apple-subheadline, etc.)
- **Components**: Comprehensive UI component library based on Radix UI with custom styling
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts
- **Animations**: CSS transitions and transforms for smooth user interactions

### Data Architecture
- **Schema**: User management schema with username/password authentication structure
- **Validation**: Zod schemas for runtime type validation and form handling
- **Types**: Shared TypeScript types between frontend and backend for consistency

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **@tanstack/react-query**: Server state management and caching for React applications

### UI and Styling Dependencies
- **@radix-ui/react-***: Comprehensive set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Modern icon library with React components

### Form and Validation Dependencies
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation library

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for JavaScript
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution environment for Node.js

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling integration

### Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-kit**: CLI tools for database schema management and migrations

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Conditional className utility for dynamic styling
- **cmdk**: Command menu component for enhanced user interactions