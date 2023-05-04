((doc) => {
    const oList = doc.querySelector("#list")
    const oMsg = doc.querySelector("#message")
    const oSendBtn = doc.querySelector("#send");
    const ws = new WebSocket('ws:localhost:8000')
    const init = () => {
        bindEvent()
    }
    const bindEvent = () => {
     
        const handleSendBtnClick = () => {
            console.log('send message')
            const msg = oMsg.value;
            ws.send(msg)
        }
        const handleOpen = (e) => {
            console.log('WebSocket Open',e)
        }
        const handleClose = (e) => {
             console.log('WebSocket Close',e)
        }
        const handleError = (e) => {
             console.log('WebSocket Error',e)
        }
        const handleMessage = (e) => {
             console.log('WebSocket Message',e)
        }
           oSendBtn.addEventListener('click', handleSendBtnClick, false)
        ws.addEventListener('open', handleOpen, false)
        ws.addEventListener('close', handleClose, false)
        ws.addEventListener('error', handleError, false)
        ws.addEventListener('message', handleMessage, false)
    }
    init()
})(document)