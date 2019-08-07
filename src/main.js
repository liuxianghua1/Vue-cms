import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)

// 导入 mint-ui
// import MintUI from 'mint-ui'
// // 这里可以省略 node-modules目录
// import 'mint-ui/lib/style.css'
// // MintUI安装到Vue中
// Vue.use(MintUI)

// 按需导入mintui
import { Button  } from 'mint-ui'
// 使用Vue.component(名称,)注册按钮主件
Vue.component(Button.name, Button)
// Vue.component(Indicator)

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

import app from './app.vue'

// 导入 account 组件
import router from './router';
import './lib/mui/css/mui.css'

var vm = new Vue({
    el: "#app",
    render: c => c(app), //render会吧原有的数据 给覆盖
    router //挂在路由对象
})