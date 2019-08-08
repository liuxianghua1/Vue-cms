<template>
  <div>
    <!-- 头部 -->
    <div class="top-placeholder"></div>
    <van-nav-bar title="领军者商城" fixed />
    <!-- 中间内容展示 -->
    <router-view></router-view>

    <!-- 底部 -->
    <van-tabbar v-model="active" active-color="#84C225" inactive-color="#000" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopcar" info="1">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/login">登录</van-tabbar-item>
      <van-tabbar-item icon="phone-circle-o" to="/phone">联系我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {};
</script>

<style>
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
.van-nav-bar {
  background-color: #84c225;
  z-index: -1 !important;
}
.van-nav-bar__title {
  color: white;
}
</style>


