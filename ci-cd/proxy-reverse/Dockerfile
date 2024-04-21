FROM nginx:latest AS runtime

COPY ci-cd/proxy-reverse/nginx.conf /etc/nginx/nginx.conf
RUN apt-get update && apt-get install -y curl

WORKDIR /etc/nginx

EXPOSE 4000