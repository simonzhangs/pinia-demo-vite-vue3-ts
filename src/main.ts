import { createApp } from 'vue'
import App from './App.vue'
//1.首先引入Pinia
import {createPinia} from 'pinia'

//2.创建 pinia 实例
const pinia = createPinia()
const app = createApp(App)

//3.将pinia实例挂载到 Vue 根实例上
app.use(pinia)
app.mount('#app')
