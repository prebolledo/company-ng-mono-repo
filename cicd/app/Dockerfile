FROM node:20.12.2-bullseye-slim AS build

#PNPM path
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

#Arguments to build de application
ARG TENANT
ARG APP
ARG ENV
ARG BASE_HREF

# Set the working directory
WORKDIR /usr/src/root

# Copy required files for installing dependencies
COPY package.json pnpm-lock.yaml nx.json tsconfig.base.json ./
COPY apps/$APP/ ./apps/$APP/
COPY libs ./libs
COPY cicd/app/nginx.conf /etc/nginx/nginx.conf

# Install pnpm
RUN npm install -g pnpm@9.0.6

# Install pnpm dependencies
RUN pnpm i --frozen-lockfile

# Install nx globally
RUN pnpm install -g nx

# Set NX_DAEMON environment variable to false to prevent nx from running in daemon mode
ENV NX_DAEMON=false

# Build the application
RUN NG_APP_TENANT=$TENANT nx run $APP:build --configuration=$ENV --base-href $BASE_HREF 
#--deploy-url $BASE_HREF

# Create a new stage for the runtime image
FROM nginx:latest AS runtime

ARG APP

#RUN apt-get update && apt-get install -y curl

WORKDIR /usr/src/root/app

#Copy app to the current static directory
COPY --from=build /usr/src/root/dist/apps/$APP /usr/src/root/app
COPY --from=build /etc/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200
