#!/bin/bash

FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prebuild
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/index.js" ]