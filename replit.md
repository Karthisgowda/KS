# Karthik S Gowda Portfolio

## Overview

This is a modern portfolio website for Karthik S Gowda, a BCA student and full-stack developer. The application showcases professional experience, technical skills, projects, education, certifications, and achievements through an interactive, responsive web interface. Built with a React frontend and Express backend, the portfolio features a dark theme design with smooth animations and comprehensive sections covering the developer's background and capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React with TypeScript** and follows a component-based architecture:

- **UI Framework**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS with a custom dark theme design system
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

The frontend follows a modular structure with separate directories for components (layout, sections, UI), pages, hooks, and utilities. The design system uses CSS custom properties for theming and includes responsive breakpoints and animation utilities.

### Backend Architecture
The backend uses **Express.js with TypeScript** in an ESM environment:

- **Framework**: Express.js with TypeScript for type safety
- **Architecture Pattern**: RESTful API design with route-based organization
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Development Server**: Vite integration for seamless full-stack development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request/response logging for API endpoints

The server implements a clean separation between routes, storage, and utility functions, making it easy to extend and maintain.

### Database Schema
The application defines a PostgreSQL schema using **Drizzle ORM**:

- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Definition**: Users table with fields for id (UUID), username (unique), and password
- **Validation**: Zod schemas for input validation and type inference
- **Migrations**: Drizzle Kit for database schema management and migrations

The schema is shared between frontend and backend through the `/shared` directory, ensuring type consistency across the application.

### Development Workflow
The application supports both development and production environments:

- **Development**: Vite dev server with HMR for frontend, tsx for backend hot reloading
- **Build Process**: Vite builds frontend to `/dist/public`, esbuild bundles backend to `/dist`
- **Module System**: ESM modules throughout the application
- **Type Checking**: TypeScript with strict configuration and path mapping

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Modern TypeSQL ORM with type safety and excellent developer experience
- **express**: Web application framework for the backend API server
- **react**: Frontend UI library with TypeScript support
- **@tanstack/react-query**: Server state management and data synchronization

### UI and Styling
- **@radix-ui/react-***: Comprehensive collection of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for constructing className strings conditionally

### Development and Build Tools
- **vite**: Fast build tool and development server with plugin ecosystem
- **typescript**: Static type checking and enhanced developer experience
- **drizzle-kit**: Database toolkit for schema management and migrations
- **tsx**: TypeScript execution environment for Node.js development

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for various schema libraries
- **zod**: TypeScript-first schema validation library

### Additional Utilities
- **wouter**: Minimalist routing library for React applications
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique string ID generator
- **connect-pg-simple**: PostgreSQL session store for Express sessions