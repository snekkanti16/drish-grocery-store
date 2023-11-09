# build environment
FROM node:18.14.2-slim
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .


ENV PORT 3000
ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "run", "start" ]
