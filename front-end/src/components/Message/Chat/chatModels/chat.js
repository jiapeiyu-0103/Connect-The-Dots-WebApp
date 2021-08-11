

const socket = io.connect('https://connect-the-dots-chat.herokuapp.com');
// const chatServer = env.NODE_ENV === 'production' ? 'https://connect-the-dots-chat.herokuapp.com' : 'http://localhost:10000';
const notification = document.getElementById('chat-message-notice')
const output = document.getElementById('chat-message-show');
const message = document.getElementById('send-message-text');
const send = document.getElementById('send-message-btn');
const leave = document.getElementById('leave-room-btn');
let randomUser = null;

// emit events

send.addEventListener('click', () => {
    if (randomUser !== null) {
        socket.emit('send-message', {
            message: message.value,
            sender: socket.id,
            receiver: randomUser
        })
        output.innerHTML +=  '<p class="messageContent">' + 'you' + ": " + message.value + '</p>'
        message.value = ""
    } else {
        notification.innerHTML = "<p class='notificationText'> Please wait for someone join the room or refresh the page </p>"
    }
})

leave.addEventListener('click', () => {
    notification.innerHTML = "<p class='notificationText'> You have left the room, please refresh the page for next connection </p>"
    if (randomUser !== null) {
        socket.emit('leave', {
            sender: socket.id,
            receiver: randomUser
        })
    }
    socket.close()
})



message.addEventListener('keypress', () => {
    if (randomUser !== null) {
        socket.emit('typing', {
            sender: socket.id,
            receiver: randomUser
        })
    }
})

socket.emit('pair')


// listen for events
socket.on('enter-room', () => {
    notification.innerHTML = "<p class='notificationText'> Welcome to the chat room !!! </p>"
})


socket.on('request', (req) => {
    console.log(req.message)
    if (randomUser == null) {
        socket.emit('offer', {
            message: ">> get a request and provide an offer",
            sender: socket.id,
            receiver: req.sender
        })
    }
})

socket.on('offer', (offer) => {
    console.log(randomUser)
    if (randomUser == null) {
        randomUser = offer.sender
        socket.emit('confirm', {
            message: `>> connection with socket id ${socket.id} has been set up`,
            sender: socket.id,
            receiver: offer.sender
        })
    }
})

socket.on('confirm', (message) => {
    randomUser = message.sender
    socket.emit('feedback', {
        message: `>> connection with socket id ${socket.id} has been set up`,
        sender: socket.id,
        receiver: message.sender
    })
    notification.innerHTML = '<p class=\'notificationText\'><em> you are now connecting to a random user </em></p>'
})

socket.on('feedback', (message) => {
    randomUser = message.sender
    notification.innerHTML = '<p class=\'notificationText\'><em> you are now connecting to a random user </em></p>'
})


socket.on('send-message', (data) => {
    if (data.sender === randomUser) {
        console.log(data.message)
        output.innerHTML += '<p class="pairMessageContent">' + 'anonymous' + ": " + data.message + '</p>'
        notification.innerHTML = ''
    }
}) 

socket.on('typing', (data) => {
    console.log(data.sender)
    notification.innerHTML = '<p><em>' + data.sender + ' is typing a message...</em></p>'
})

socket.on('leave', (message) => {
    notification.innerHTML = '<p class=\'notificationText\'><em> The random user has left the chat room </em></p>'
    output.innerHTML = ''
    randomUser = null
})
