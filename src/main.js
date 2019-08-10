//入口文件
import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)
import './lib/mui/css/mui.css'
import MuseUI from 'muse-ui';
import '../node_modules/muse-ui/dist/muse-ui'
Vue.use(MuseUI);

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'

import { Button, NavBar, Tabbar, TabbarItem, Row, Col, Swipe, SwipeItem,Lazyload, Grid, GridItem, Card, Notify, Tab, Tabs, Panel, List   } from 'vant';
Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Card).use(Notify).use(Tab).use(Tabs).use(Panel).use(List);

// 导入router.js路由
import router from './router.js'

import app from './app.vue'

var vm = new Vue({
    el: "#app",
    render: CreateElement => CreateElement(app), //render会吧原有的数据 给覆盖
    router,
    
})