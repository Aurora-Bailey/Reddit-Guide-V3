# syntax=docker/dockerfile:1
FROM node:current-alpine
WORKDIR /back-end-data-collecting
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .