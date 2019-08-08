import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import LoginContainer from './components/tabbar/LoginContainer.vue';
import PhoneContainer from './components/tabbar/PhoneContainer.vue';

var router = new VueRouter({
    routes: [
        { 
            path: '/',
            redirect: '/home'
         },
         { 
            path: '/home',
            component: HomeContainer
         },
         { 
            path: '/shopcar',
            component: ShopcarContainer
         },
         { 
            path: '/login',
            component: LoginContainer
         },
         { 
            path: '/phone',
            component: PhoneContainer
         },
    ]
})

export default router