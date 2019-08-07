import VueRouter from 'vue-router'


// 导入 account 组件
import account from './main/account.vue'

// 导入 goodslist 组件
import goodslist from './main/goodslist.vue'

// 导入account和goodslist的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'


// 3.创建路由对象
var router = new VueRouter({
    routes: [
        // account goodslist
        {
             path: '/account',
              component: account,
              children: [
                  {path:'login' ,component: login},
                  {path:'register' ,component: register}
              ]
        },
        { 
            path: '/goodslist', 
            component: goodslist,
            children: [
                
            ]
        },
    ]
})

export default router