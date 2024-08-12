# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory to /src
WORKDIR /src

# Copy package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output from /src/build to Nginx's web directory
COPY --from=build /src/build /usr/share/nginx/html

# Copy the Nginx configuration file (optional, for custom config)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]