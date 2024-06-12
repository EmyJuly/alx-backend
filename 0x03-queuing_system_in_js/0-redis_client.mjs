// Import the redis package using ES modules syntax
import redis from 'redis';

// Create a new Redis client
const client = redis.createClient();

// Handle connection events
client.on('connect', function() {
    console.log('Connected to Redis');
});

// Set a value in Redis
client.set('Holberton', 'School', function(err, reply) {
    if (err) {
        console.error('Error setting value:', err);
    } else {
        console.log('Set value:', reply);
    }
});

// Get a value from Redis
client.get('Holberton', function(err, reply) {
    if (err) {
        console.error('Error getting value:', err);
    } else {
        console.log('Get value:', reply);
    }

    // Quit the client after the operation
    client.quit();
});

