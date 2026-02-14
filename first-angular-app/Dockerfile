# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:22-alpine AS production
WORKDIR /app

# Copy only the build output — Angular 21 bundles everything into server.mjs
COPY --from=build /app/dist/first-angular-app/ ./dist/first-angular-app/

ENV PORT=4200
ENV NODE_ENV=production
EXPOSE 4200

CMD ["node", "dist/first-angular-app/server/server.mjs"]
