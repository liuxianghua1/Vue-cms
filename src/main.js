//入口文件
import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 按需导入vant
import { Button, NavBar, Tabbar, TabbarItem, Row, Col, Swipe, SwipeItem,Lazyload, Grid, GridItem } from 'vant';
Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem);

// 导入router.js路由
import router from './router.js'

import app from './app.vue'

var vm = new Vue({
    el: "#app",
    render: CreateElement => CreateElement(app), //render会吧原有的数据 给覆盖
    router
})