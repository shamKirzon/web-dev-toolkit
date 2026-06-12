# web-dev-toolkit

A full-stack starter template for building modern web applications. Feel free to fork it and make it your own.

---

## Stack

### Client

- **Vite** - build tool and dev server
- **TypeScript** - type safety across the frontend
- **React** - UI library
- **shadcn/ui** - component library built on Radix UI
- **Tailwind CSS** - utility-first styling
- **Axios** - HTTP client for API requests
- **Zustand** - lightweight state management
- **React Router DOM** - client-side routing

### Server

- **Node.js** - runtime environment
- **TypeScript** - type safety across the backend
- **Express** - web framework
- **Prisma** - ORM and database toolkit
- **PostgreSQL (pg)** - relational database
- **Zod** - schema validation
- **JSON Web Token** - authentication
- **bcrypt** - password hashing
- **CORS** - cross-origin resource sharing
- **dotenv** - environment variable management
- **Rate Limiter** - request throttling and abuse prevention

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Package manager of your choice (npm, pnpm, yarn)

### Installation

Use degit to scaffold the template without the git history:

```bash
npx degit https://github.com/shamKirzon/web-dev-toolkit.git my-app-name
cd my-app-name
```

Install dependencies for both client and server:

```bash
# Client
cd client
npm install

# Server
cd ../server
npm install
```

### Keeping Dependencies Up to Date

```bash
# Check for outdated dependencies
npx npm-check-updates

# Update all versions in package.json
npx npm-check-updates -u
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory and fill in your values:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/your_db
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Database Setup

```bash
cd server
npx prisma migrate dev
```

### Running the App

```bash
# Start the server
cd server
npm run dev

# Start the client
cd client
npm run dev
```

---

## Project Structure

```
web-dev-toolkit/
├── agent/
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── module/
│   │   ├── middleware/
│   │   ├── prisma/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   ├── prisma.config.ts
│   └── tsconfig.json
└── skills/
```

---

## License

MIT
