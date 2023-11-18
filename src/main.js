import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import websocket from './plugins/websocket'

const app = createApp(App)

app.use(store)
app.use(websocket)

app.mount('#app')
