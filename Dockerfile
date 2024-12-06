FROM node:18-alpine

WORKDIR /qp-assessment/src/index

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# Run the application
CMD ["npm", "start"]
