# NLW Agents

Frontend application for NLW Agents developed during Rocketseat's NLW (Next Level Week) event.

## 📋 About the Project

This is the frontend repository for the NLW Agents application. The backend is available at: [nlw-agents-server](https://github.com/renatomarquesteles/nlw-agents-server)

The application allows creating meeting rooms, recording audio, and all the questions about the meetings are answered by AI based on the recorded content.

## ✨ Features

- **Room Creation**: Interface for creating new meeting rooms
- **Question Management**: System for adding and viewing questions
- **Audio Recording**: Functionality for recording meeting audio
- **Responsive Interface**: Adaptive design for different devices
- **Form Validation**: Robust validation using Zod and React Hook Form

## 🛠️ Technologies Used

### Core

- **React 19** - Library for building user interfaces
- **TypeScript** - Static typing for JavaScript
- **Vite** - Build tool and dev server

### Routing & State Management

- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management and caching

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icons
- **Class Variance Authority** - Component variant system
- **clsx & tailwind-merge** - Utilities for conditional classes

### Forms & Validation

- **React Hook Form** - Form management
- **Zod** - Schema validation

### UI Components

- **shadcn** - Component Library
- **Radix UI** - Accessible components (Label, Slot)
- **dayjs** - Date manipulation

### Development

- **Biome** - Linter and formatter
- **Ultracite** - Development tools
- **TypeScript** - Static typing

## 🚀 Project Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/renatomarquesteles/nlw-agents-web.git
cd nlw-agents-web
```

2. Install dependencies:

```bash
npm install
```

3. Run the project in development mode:

```bash
npm run dev
```

4. Access `http://localhost:5173` in your browser

### Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Generates production build
- `npm run preview` - Previews production build locally

## 📁 Project Structure

```
src/
├── components/     # Reusable components
│   ├── ui/        # Base UI components
│   ├── question-item.tsx
│   ├── question-form.tsx
│   ├── question-list.tsx
│   ├── create-room-form.tsx
│   └── room-list.tsx
├── pages/         # Page components
│   ├── create-room.tsx
│   ├── room.tsx
│   ├── record-room-audio.tsx
│   └── not-found.tsx
├── http/          # HTTP configurations and APIs
├── lib/           # Utilities and configurations
├── app.tsx        # Main application configuration
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## 🌐 Backend

The application backend is available at: [nlw-agents-server](https://github.com/renatomarquesteles/nlw-agents-server)

Make sure the backend server is running on `http://localhost:3333` for the frontend to work properly.

## 🎯 Application Routes

- `/` - Home page for creating a new room
- `/room/:roomId` - Specific room with questions
- `/room/:roomId/audio` - Room audio recording
- `*` - 404 page for not found routes
