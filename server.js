const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.get('/', (req, res) => {
  res.send('Socket.IO backend online');
});

app.get('/api', (req, res) => {

  res.json({
    message: 'Hello from Render backend!'
  });

});

io.on('connection', (socket) => {

  console.log('User connected');

  socket.emit(
    'message',
    'Hello from Socket.IO backend!'
  );

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Server running');
});