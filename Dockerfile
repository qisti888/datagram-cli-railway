FROM node:18

WORKDIR /app

# Download datagram-cli
RUN curl -L https://github.com/Datagram-Group/datagram-cli-release/releases/latest/download/datagram-cli-x86_64-linux -o datagram-cli && \
    chmod +x datagram-cli

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Run app
CMD ["npm", "start"]