//入口文件
import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)

// vueX
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        car: [], //购物车商品数据

    },
    mutations: {
        // 加入购物车
        addCar(state, goodsinfo) {
            var flag = false;

            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })
            // 如果没有找到 那就添加
            if (!flag) {
                state.car.push(goodsinfo);
            }
        },

    },
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach( item => {
                c += item.count;
        })
            return c;
        }
    }
})

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






import { Button, NavBar, Tabbar, TabbarItem, Row, Col, Swipe, SwipeItem, Lazyload, Grid, GridItem, Card, Notify, Panel, List, Tab, Tabs, Collapse, CollapseItem } from 'vant';

Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Card).use(Notify).use(Panel).use(List).use(MuseUI).use(Tab).use(Tabs).use(Collapse).use(CollapseItem);

// 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入router.js路由
import router from './router.js'

import app from './app.vue'

var vm = new Vue({
    el: "#app",
    render: CreateElement => CreateElement(app), //render会吧原有的数据 给覆盖
    router,
    store

})