export default {
  install: (app) => {
    const socket = new WebSocket("ws://localhost:8080/ws")
    
    socket.onopen = () => {
      console.log("Connected to server")
    }

    socket.onclose = (event) => {
      console.log("Disconnected from the server: " + event.reason)
    }
    
    app.config.globalProperties.$socket = socket
    console.log(socket)
  }
}