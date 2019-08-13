import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import LoginContainer from './components/tabbar/LoginContainer.vue';
import PhoneContainer from './components/tabbar/PhoneContainer.vue';
import News from './components/news/news.vue'
import NewsInfo from './components/news/newsinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/Goods/GoodsList.vue'


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
      {
         path: '/home/photolist',
         component: PhotoList
      },
      {
         path: '/home/photoinfo/:id',
         component: PhotoInfo
      },
      {
         path: '/home/GoodsList',
         component: GoodsList
      },
   ],

})

export default router