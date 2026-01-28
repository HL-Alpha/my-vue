import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate' // 1. 引入插件
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
// 將插件安裝到 pinia 實體上 (如果需要持久化的話)
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)

// JS全域放在mount前
window.App_JS_TITLE = 'JS 全域變數test'

// globalProperties 全域屬性
app.config.globalProperties.$globalAppTitle = '全域屬性'

// 宣告provide
app.provide('provideAppTitle', '父層提供資料')
app.mount('#app')
