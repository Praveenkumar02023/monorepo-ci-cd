FROM node:22-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/db ./packages/db
COPY apps/ws-server ./apps/ws-server
RUN pnpm install && pnpm --filter @repo/db run build

WORKDIR /app/apps/ws-server

RUN pnpm run build

CMD ["pnpm","run","start"]


