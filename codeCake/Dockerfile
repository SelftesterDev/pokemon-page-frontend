FROM node:20-alpine AS builder
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Build
COPY . .
ARG REACT_APP_API_URL=https://pokemon-page-backend.onrender.com
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# --- runtime stage ---
FROM nginx:alpine
# minimal nginx config
COPY ./codeCake/nginx.conf /etc/nginx/conf.d/default.conf
# copy built static files
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build/ /usr/share/nginx/html/
