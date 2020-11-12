var socket = io();

socket.on('message', (mes) => {
  var elem = document.createElement('p');
  var messageContainer = document.getElementById('messageContainer');
  messageContainer.insertBefore(elem, messageContainer.childNodes[0]);
  elem.textContent = mes;
});

function sendMessage() {
  var name = document.getElementById('name');
  var message = document.getElementById('message');
  socket.emit('message', `${name.value}: ${message.value}`);
  name.value = '';
  message.value = '';
}
