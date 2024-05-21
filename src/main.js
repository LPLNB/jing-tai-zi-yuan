import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
const pinia = createPinia()

// 引入路由
import router from './router'

// 引入全局css文件
import '@/assets/InitializeCon/ExportCssCon.scss'
// 引入动画css
import 'animate.css';


// 引入antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Antd)
app.mount('#app')
