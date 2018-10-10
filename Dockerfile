FROM node:6

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pm2

COPY . .

CMD pm2 start app.js

EXPOSE 3000
