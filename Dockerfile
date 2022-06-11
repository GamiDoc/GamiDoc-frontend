FROM node:17.8

COPY package.json .
COPY package-lock.json .

RUN npm install 

CMD [ "npm", "run", "dev" ]