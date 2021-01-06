FROM node:10

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ./wait-for-it.sh db:3306 -- npm run dev

