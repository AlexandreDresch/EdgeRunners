# EDGERUNNERS

![cover](.github/image.png?style=flat)

A responsive and interactive fan page dedicated to the anime Cyberpunk: Edgerunners, built with React, TypeScript, GSAP, and Tailwind CSS. 

You can access the deployed version of this project [here](https://edge-runners-three.vercel.app).

## Features

- **Dynamic Animations**: Powered by GSAP for smooth transitions.
- **Mobile-First Design**: Built with Tailwind CSS.
- **Blazing Fast**: Optimized with Vite.
- **Docker Support**: Easy containerized deployment.
- **Type Safety**: TypeScript integration.

## Getting Started

### Prerequisites

- Node.js and npm (if running locally).
- Docker installed (if running with Docker).

## Running the Application

You can run this application either with Docker or locally on your machine.

### Option 1: Running with Docker

1. Clone the repository:

```bash
  git clone https://github.com/AlexandreDresch/EdgeRunners.git
```

2. Navigate to the project directory:

```bash
  cd EdgeRunners
```

3. Build and start the Docker containers:

```bash
  docker-compose up --build
```

4. Open your browser and navigate to:

```bash
  http://localhost:5173
```

5. To stop the Docker containers:

```bash
  docker-compose down
```

### Option 2: Running Locally (Without Docker)

1. Clone the repository:

```bash
  git https://github.com/AlexandreDresch/EdgeRunners.git
```

2. Navigate to the project directory:

```bash
  cd EdgeRunners
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm run dev
```

5. Open your browser and navigate to:

```bash
  http://localhost:5173
```

## Scripts

- **dev**: Starts the Vite development server.
- **build**: Builds the project using TypeScript and Vite.
- **preview**: Runs a Vite preview of the built app.