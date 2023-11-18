export default {
  install: (app) => {
    const socket = new WebSocket("ws://localhost:8080/ws")
    
    socket.onopen = () => {
      console.log("Connected to server")
    }
    
    app.config.globalProperties.$socket = socket
  }
}