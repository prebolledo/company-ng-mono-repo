# Use a specific version of the official Node.js image based on the slim variant
FROM node:20.12.2-bullseye-slim AS build
ARG APP
ARG BASE_HREF
# Set the working directory
WORKDIR /usr/src/root

# Copy required files for installing dependencies
COPY package.json package-lock.json nx.json tsconfig.base.json ./
COPY apps/$APP/ ./apps/$APP/
COPY libs ./libs
COPY ci-cd/app/nginx.conf /etc/nginx/nginx.conf

RUN npm install -g npm@10.5.2

# Install npm dependencies
RUN npm ci

# Install nx globally
RUN npm install -g nx

# Set NX_DAEMON environment variable to false to prevent nx from running in daemon mode
ENV NX_DAEMON=false

# Build the application
RUN nx run $APP:build --prod --baseHref $BASE_HREF --deploy-url $BASE_HREF

# Create a new stage for the runtime image
FROM nginx:latest AS runtime

ARG APP

RUN apt-get update && apt-get install -y curl

WORKDIR /usr/src/root/app

COPY --from=build /usr/src/root/dist/apps/$APP /usr/src/root/app
COPY --from=build /etc/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200