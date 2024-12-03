import { saveVisitor, getVisitorCount } from '../services/visitorService.js';

export function setupSocketHandlers(io) {
  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('newVisitor', async (visitorData) => {
      try {
        const ip = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;
        await saveVisitor(visitorData, ip);
        const counts = await getVisitorCount();
        io.emit('visitorCount', counts);
      } catch (error) {
        console.error('Error handling new visitor:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}