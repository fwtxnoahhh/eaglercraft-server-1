// src/server.js

const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let players = {};

// Function to handle player connections
server.on('connection', function(socket) {
    let playerId = generatePlayerId();
    players[playerId] = socket;
    console.log(`Player ${playerId} connected`);

    // Handle incoming messages from clients
    socket.on('message', function(message) {
        handleCommand(playerId, message);
    });

    // Handle disconnection
    socket.on('close', function() {
        delete players[playerId];
        console.log(`Player ${playerId} disconnected`);
    });
});

// Function to handle commands
function handleCommand(playerId, message) {
    console.log(`Received message from Player ${playerId}: ${message}`);
    // Here you can implement command handling logic based on the message
}

// Function to generate unique player IDs
function generatePlayerId() {
    return 'player_' + Math.random().toString(36).substr(2, 9);
}

console.log('WebSocket server started on ws://localhost:8080');
