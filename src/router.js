import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import LoginContainer from './components/tabbar/LoginContainer.vue';
import PhoneContainer from './components/tabbar/PhoneContainer.vue';
import News from './components/news/news.vue'
import NewsInfo from './components/news/newsinfo.vue'

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
         { 
            path: '/home/news',
            component: News
         },
         { 
            path: '/home/newsinfo/:id',
            component: NewsInfo
         },
    ],

})

export default router