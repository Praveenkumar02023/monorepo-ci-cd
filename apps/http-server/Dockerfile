FROM node:22-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/db ./packages/db
COPY apps/http-server ./apps/http-server

RUN pnpm install && \
    npx prisma generate --schema=./packages/db/prisma/schema.prisma && \
    pnpm --filter @repo/db run build

WORKDIR /app/apps/http-server

RUN pnpm run build

CMD ["pnpm","run","start"]


