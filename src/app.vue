<template>
  <div>
    <!-- 头部 -->
    <div class="top-placeholder"></div>
    <van-nav-bar title="领军者商城" fixed>
      <div slot="left">
        <div class="van-nav-bar__left" @click="back" v-show="flag">
          <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
          <span class="van-nav-bar__text">返回</span>
        </div>
      </div>
    </van-nav-bar>

    <!-- 中间内容展示 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 192.168.1.160 -->
    <!-- 底部 -->
    <div class="bottom-placeholder"></div>

    <van-tabbar  route active-color="#84C225">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="$store.getters.getAllCount" to="/shopcar">
        <span id="badge">购物车</span>
      </van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/login">登录</van-tabbar-item>
      <van-tabbar-item icon="phone-circle-o" to="/phone">联系我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === '/home' ? false : true
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style>
.van-nav-bar__left {
  width: 80px;
  left: 0px;
}
.van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar__text {
  color: white;
}
.van-goods-action {
  bottom: 50px;
}
html {
  overflow-x: hidden;
}
.v-enter {
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
  z-index: 999 !important;
}
.van-nav-bar__title {
  color: white;
}
</style>


