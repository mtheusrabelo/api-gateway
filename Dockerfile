FROM oven/bun:1.0.0 as builder
  WORKDIR /app
  ADD . .
  RUN bun install
  RUN bun binary

# Bun base image
# See https://github.com/oven-sh/bun/blob/c896792c37574b745f5b2a05e2f7d20aa4cdd9ac/Dockerfile#L25
FROM bitnami/minideb:bullseye as runner
  ENV PORT 3000
  WORKDIR /app
  RUN cd /app
  COPY --from=builder /app/bin /app/bin
  CMD ["./bin/app"]
