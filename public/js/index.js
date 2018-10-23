const socket = io()

socket.on('connect', function () {
    console.log('Connected to server.')

    socket.emit('createMessage', {
        from: 'ahmed@browser.com',
        text: 'Hello from the browser'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server.')
})

socket.on('newMessage', function (newMessage) {
    console.log('newMessage', newMessage)
})

