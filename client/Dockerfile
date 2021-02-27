# base image
FROM node:12.2.0-alpine

RUN mkdir --parents /client/app
WORKDIR /client/app
COPY ./app/package.json /client/app/package.json
RUN npm install
EXPOSE 3333
