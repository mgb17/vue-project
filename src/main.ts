import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'


import './assets/main.css'

const app = createApp(App)

app.use(store);
app.use(router);

app.mount('#app')
