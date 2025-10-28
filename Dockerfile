# Apple iOS 26 Monaco Edition Backend
# Author: Jonathan Sherman
# Copyright: © 2025 Jonathan Sherman. All Rights Reserved.
# Version: 5.0.0

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV AUTHOR="Jonathan Sherman"
ENV COPYRIGHT="© 2025 Jonathan Sherman. All Rights Reserved."

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["node", "server.js"]
