const socket = io.connect('http://localhost:10000');

const notification = document.getElementById('chat-message-notice')
const output = document.getElementById('chat-message-show');
const message = document.getElementById('send-message-text');
const send = document.getElementById('send-message-btn');

// emit events

send.addEventListener('click', () => {
    socket.emit('send-message', message.value)
})

message.addEventListener('keypress', () => {
    socket.emit('typing')
})

socket.emit('pair')


// listen for events

socket.on('notice', (message) => {
    console.log(message.message)
    output.innerHTML += '<p>' + message.sender + ": " + message.message + '</p>'
})

socket.on('send-message', (data) => {
    console.log(data.message)
    output.innerHTML += '<p>' + data.sender + ": " + data.message + '</p>'
    notification.innerHTML = ''
    message.value = ""
}) 

socket.on('typing', (data) => {
    console.log(data.sender)
    notification.innerHTML = '<p><em>' + data.sender + ' is typing a message...</em></p>'
    
})