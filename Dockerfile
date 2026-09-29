FROM node:22-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat && npm install -g pnpm@10
WORKDIR /app

COPY package.json pnpm-lock.yaml* vite.config.ts tsconfig.json ./
RUN pnpm i --frozen-lockfile

FROM deps AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 appuser
COPY --from=builder --chown=appuser:nodejs /app/.output ./.output
USER appuser
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
CMD ["node", ".output/server/index.mjs"]
