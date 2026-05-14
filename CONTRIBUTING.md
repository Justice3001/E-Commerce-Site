# Contributing to Plushify

Thanks for your interest in contributing.

## Getting Started

1. Fork the repository.
2. Clone your fork.
3. Run `npm install` to install frontend dependencies.
4. Run `cd server && npm install` to install server dependencies.
5. Copy `.env.example` to `server/.env` and adjust if needed.
6. Start the development server with `npm run dev`.
7. Start the API server with `cd server && npm run dev`.

## Project Structure

- `src/` — React frontend
- `server/` — Express API backend
- `public/` — Static assets

## Making Changes

- Keep changes focused. One feature or fix per pull request.
- Run `npm run lint` and `npm run lint:server` to check code style.
- Run `npm run build` to verify the frontend compiles.
- Follow the existing code style (Prettier config is included).

## Pull Requests

1. Create a new branch from `main`.
2. Make your changes.
3. Run `npm run lint` and `npm run build` to verify everything passes.
4. Open a pull request with a clear title and description using the provided template.

## Reporting Issues

Open a GitHub issue using the provided templates. Include steps to reproduce, expected behavior, and environment details.

## Security

Report security vulnerabilities privately via a [GitHub Security Advisory](https://github.com/Justice3001/E-Commerce-Site/security/advisories/new). See `SECURITY.md` for details.

## Code of Conduct

Be respectful and constructive. We're all here to learn and build great software.
