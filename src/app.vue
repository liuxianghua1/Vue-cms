<template>
  <div>
    <!-- 头部 -->
    <div class="top-placeholder"></div>
    <van-nav-bar title="领军者商城" fixed />
    <!-- 中间内容展示 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 192.168.1.160 -->
    <!-- 底部 -->
    <div class="bottom-placeholder"></div>
    <van-tabbar v-model="active" active-color="#84C225" inactive-color="#000" route>
      <van-tabbar-item icon="home-o" to="/home" >首页</van-tabbar-item>

      <van-tabbar-item icon="shopping-cart-o" to="/shopcar" info="1">购物车</van-tabbar-item>

      <van-tabbar-item  icon="user-circle-o" to="/login">登录</van-tabbar-item>

      <van-tabbar-item icon="phone-circle-o" to="/phone">联系我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
   
    }
  }
};
</script>

<style>

html{
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
/* .v-enter-active 入场动画的时间段  */
/* .v-leave-active 离开场动画的时间段 */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.van-swipe-item {
  height: 255px !important;
}
.van-swipe-item img {
  height: 100%;
  width: 100%;
}
.top-placeholder {
  width: 100%;
  height: 46px;
  visibility: hidden;
}
.bottom-placeholder {
  width: 100%;
  height: 50px;
  visibility: hidden;
}
.van-nav-bar {
  background-color: #84c225;
  /* z-index: -1 !important; */
}
.van-nav-bar__title {
  color: white;
}
</style>


