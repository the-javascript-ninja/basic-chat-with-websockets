module.exports = (io) => {
  io.on('connection', (client) => {
    console.log('User Connected');

    client.on('message', (mes) => {
      io.emit('message', mes);
      console.log(mes);
    });

    client.on('disconnect', () => {
      console.log('User Disconnected');
    });
  });
};
