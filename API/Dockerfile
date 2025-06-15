FROM node:20
WORKDIR /usr/src/app
COPY . .
EXPOSE 4000

RUN npm i

RUN npm run build

CMD ["npm", "start"]
