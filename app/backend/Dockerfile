# syntax=docker/dockerfile:1
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript app
RUN npm run tsc

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD [ "node", "build/index.js" ]
