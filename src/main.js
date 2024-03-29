//入口文件
import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)

// vueX
import Vuex from 'vuex'
Vue.use(Vuex)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 本地存储中吧购物车数据读出来
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {
        car: car, //购物车商品数据

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
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        // 修改购物车数量
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            // 修改完数量 保存到localStorage
            localStorage.setItem('car', JSON.stringify(state.car))

        },

        removeFormCar(state, id) {
            // 根据id删除购物车商品
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true;
                }
            })
            // 删除后更新数据
            localStorage.setItem('car', JSON.stringify(state.car))
        },

        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            // 开关的最新数据 同步到localStorage
            localStorage.setItem('car', JSON.stringify(state.car))

        }

    },
    getters: {
        // 所有数量
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        },

        getGoodsCount(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },

        getCountSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o;
        },

        getGoodsCountAndAmount(state) {
            var o = {
                count: 0, //数量
                amount: 0//总件
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
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






import { Button, NavBar, Tabbar, TabbarItem, Row, Col, Swipe, SwipeItem, Lazyload, Grid, GridItem, Card, Notify, Panel, List, Tab, Tabs, Collapse, CollapseItem, Divider } from 'vant';

Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Card).use(Notify).use(Panel).use(List).use(MuseUI).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(Divider);

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