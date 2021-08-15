FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

ENTRYPOINT ["node", "dist/index"]

# CMD ["npm", "start"]
