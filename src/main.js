//入口文件
import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)

// 过滤器全局
import moment from 'moment';
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

import './lib/mui/css/mui.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'             //设置请求的根路径
Vue.http.options.emulateJSON = true           //全局设置post请求表单数据
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import { Button, NavBar, Tabbar, TabbarItem, Row, Col, Swipe, SwipeItem, Lazyload, Grid, GridItem, Card, Notify,  Panel, List, } from 'vant';
Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Card).use(Notify).use(Panel).use(List).use(MuseUI);


// 导入router.js路由
import router from './router.js'

import app from './app.vue'
import VueLazyload from '_vue-lazyload@1.3.1@vue-lazyload';

var vm = new Vue({
    el: "#app",
    render: CreateElement => CreateElement(app), //render会吧原有的数据 给覆盖
    router,

})