From node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY  public/ /app/public

COPY  src/ /app/src

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" ]

