# NLW Agents

Frontend application for NLW Agents developed during Rocketseat's NLW (Next Level Week) event.

## 📋 About the Project

This is the frontend repository for the NLW Agents application. The backend is available at: [nlw-agents-server](https://github.com/renatomarquesteles/nlw-agents-server)

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

### Development

- **Biome** - Linter and formatter
- **Ultracite** - Development tools

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

## 📁 Project Structure

```
src/
├── pages/          # Page components
├── components/     # Reusable components
├── app.tsx         # Main app configuration
└── main.tsx        # Entry point
```

## 🌐 Backend

The application backend is available at: [nlw-agents-server](https://github.com/renatomarquesteles/nlw-agents-server)

Make sure the backend server is running on `http://localhost:3333` for the frontend to work properly.
