<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="领军者商城" fixed/>
    <h1 class="demoasd">阿萨德</h1>
    <!-- 中间内容展示 -->

    <!-- 底部 -->
<van-tabbar
  v-model="active"
  active-color="#84C225"
  inactive-color="#000"
>
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="freinds-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>



  </div>
</template>
<script>
</script>

<style scoped>
.demoasd{
  padding-top: 30px;
  text-align: center;
}
.van-nav-bar{
  background-color: #84C225;
}
.van-nav-bar__title{
  color: white;
}
</style>


