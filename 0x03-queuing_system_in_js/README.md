0x03. Queuing System in JS
# Queuing System in JavaScript

## Project Setup

1. **Install Redis**:
    - Download and extract Redis:
      ```sh
      wget http://download.redis.io/releases/redis-6.0.10.tar.gz
      tar xzf redis-6.0.10.tar.gz
      cd redis-6.0.10
      make
      ```
    - Start Redis server:
      ```sh
      src/redis-server &
      ```

2. **Verify Redis**:
    - Check Redis server status:
      ```sh
      src/redis-cli ping
      ```
    - Set and get a key-value pair:
      ```sh
      src/redis-cli set Holberton School
      src/redis-cli get Holberton
      ```

3. **Shutdown Redis**:
    - Find and kill Redis server process:
      ```sh
      ps aux | grep redis-server
      kill [PID_OF_Redis_Server]
      ```

4. **Copy dump.rdb**:
    - Copy the `dump.rdb` file to the project root:
      ```sh
      cp redis-6.0.10/dump.rdb /alx-backend/0x03-queuing_system_in_js/
      ```

## Dependencies

- Node.js
- Redis

Run `npm install` in the project directory to install dependencies.


