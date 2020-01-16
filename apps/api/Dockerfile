# Note! build context is workspace root

# Use the small alpine image
FROM node:12-alpine

# Build path
WORKDIR /tmp

# Copy package files and install production dependencies,
# which are needed for Nest to launch
COPY package*.json ./
RUN npm install --production

# Copy node assets api path
RUN mkdir -p /app/api && cp -a /tmp/node_modules /app/api/

# Copy assets from api build
WORKDIR /app/api
COPY dist/apps/api/ ./

# Informational port (or mandatory?)
EXPOSE 3333

# Start api command
CMD ["node", "main.js"]
