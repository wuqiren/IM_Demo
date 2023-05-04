const Ws = require('ws')
((Ws) => {
const server = new Ws.server({ port: 8000 })
function bindEvent() {
    server.on('open', handleOpen)
    server.on('close', handleClose)
    server.on('error', handleError)
    server.on('connection', handleConnection)
}
const handleOpen = () => {
    console.log('WebSocket open')
}
const handleClose = () => {
        console.log('WebSocket close')
}
const handleError = () => {
        console.log('WebSocket error')
}
const handleConnection = (ws) => {
        console.log('WebSocket Connection')
    ws.on('message', handleMessage)
}
const handleMessage = (msg) => {
        console.log('WebSocket message',msg)
}
    bindEvent()
})(Ws)