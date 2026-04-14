FROM node:22-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy shared packages if needed (e.g., ui, db)
COPY packages/ui ./packages/ui
COPY packages/db ./packages/db
COPY packages/eslint-config ./packages/eslint-config
COPY packages/typescript-config ./packages/typescript-config

COPY apps/web ./apps/web

RUN pnpm install && pnpm --filter @repo/ui run build && pnpm --filter @repo/db run build

WORKDIR /app/apps/web

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]