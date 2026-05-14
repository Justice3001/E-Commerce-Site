# Plushify

> A modern e-commerce storefront for furniture, fashion, and tech — built with React 18 + Vite and an Express API backend.

Plushify is a full-stack single-page e-commerce application featuring product browsing, category filtering, search, a shopping cart with Redux state management, a RESTful API, and Docker support.

---

## Features

- **Product Catalog** — Browse sofas, chairs, watches, phones, and wireless accessories
- **Category Filtering** — Filter products by category with a custom select component
- **Live Search** — Search products by name with instant results
- **Product Details** — View product descriptions, ratings, and reviews
- **Shopping Cart** — Add, adjust quantities, and remove items with Redux-powered state
- **Cart Persistence** — Cart data persists across sessions via `localStorage`
- **Lazy Loading** — Route-level code splitting with `React.lazy` and `Suspense`
- **Responsive Design** — Mobile-first layout using React-Bootstrap
- **REST API** — Express backend serving product data at `/api/products`
- **Docker** — Run the entire stack with a single command

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Docker (optional, for containerized setup)

### Local Development

```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server && npm install && cd ..

# Start the frontend (Vite dev server)
npm run dev

# In a separate terminal, start the API server
cd server && npm run dev
```

Frontend: [http://localhost:3000](http://localhost:3000)
API: [http://localhost:4000](http://localhost:4000)

### Docker

```bash
# Build and start all services
docker compose up --build
```

Frontend: [http://localhost](http://localhost)
API: [http://localhost:4000](http://localhost:4000)

### Production Build

```bash
npm run build
npm run preview
```

Outputs a static site to `dist/` ready for deployment (Vercel, Netlify, etc.).

---

## API

The backend runs on port `4000` and provides the following endpoints:

| Endpoint | Description |
|---|---|
| `GET /api/health` | Health check |
| `GET /api/products` | List all products (optional `?category=sofa` filter) |
| `GET /api/products/:id` | Get a single product by ID |

## Project Structure

```
├── server/
│   ├── index.js              # Express server entry point
│   ├── routes/products.js    # Product API routes
│   ├── data/products.json    # Product data
│   └── package.json
├── src/
│   ├── main.jsx              # Frontend entry point
│   ├── App.jsx               # Router with lazy-loaded routes
│   ├── index.css             # Global styles
│   ├── app/
│   │   ├── store.js          # Redux store
│   │   └── features/cart/    # Cart reducer + middleware
│   ├── components/           # UI components
│   ├── pages/                # Route pages
│   ├── hooks/                # Custom hooks
│   ├── utils/                # Product data
│   └── assets/               # Product images
├── Dockerfile                # Frontend container (nginx)
├── Dockerfile.backend        # Backend container (node)
├── nginx.conf                # Reverse proxy config
├── docker-compose.yml        # Multi-service orchestration
├── .github/workflows/ci.yml  # CI pipeline
├── .editorconfig
├── .prettierrc
├── CONTRIBUTING.md
└── LICENSE
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool and dev server |
| [Redux Toolkit](https://redux-toolkit.js.org) | State management |
| [React Router 6](https://reactrouter.com) | Client-side routing |
| [React-Bootstrap](https://react-bootstrap.netlify.app) | UI components and grid |
| [React Slick](https://react-slick.neostack.com) | Hero slider |
| [React Select](https://react-select.com) | Category filter dropdown |
| [React Toastify](https://fkhadra.github.io/react-toastify) | Cart notifications |
| [React Spinners](https://www.davidhu.io/react-spinners) | Loading indicator |
| [Ionicons](https://ionic.io/ionicons) | Icons |
| [Express](https://expressjs.com) | REST API backend |
| [Docker](https://docker.com) | Containerization |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |

---

## Contributing

Contributions welcome. Open an issue or pull request.

---

## License

[MIT](LICENSE)
