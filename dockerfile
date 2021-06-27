FROM node:14.15.0-alpine3.12

WORKDIR /usr/src/app/
COPY . /usr/src/app/

RUN npm install

EXPOSE 7788

CMD ["node", "/usr/src/app/server.js", "7788"]