FROM node:14-alpine

WORKDIR /home/app/ui

COPY package.json /home/app/ui

RUN npm install --save

COPY . /home/app/ui

EXPOSE 3001