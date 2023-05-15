FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpinr AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
