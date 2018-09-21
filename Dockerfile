FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./usr/src/app

RUN npm install

COPY . /user/src/app

CMD node server.js

EXPOSE 3000
