FROM node

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

EXPOSE 80

CMD ["node","index.js"]
