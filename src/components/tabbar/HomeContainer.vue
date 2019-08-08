<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="#84c225">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3">
      <van-grid-item v-for="value in 1" :key="value" icon="newspaper-o" text="公司动态" />
      <van-grid-item v-for="value in 1" :key="value" icon="exchange" text="联盟合作" />
      <van-grid-item v-for="value in 1" :key="value" icon="friends-o" text="企业文化" />
      <van-grid-item v-for="value in 1" :key="value" icon="shopping-cart-o" text="产品购买" />
      <van-grid-item v-for="value in 1" :key="value" icon="award-o" text="关于我们" />
      <van-grid-item v-for="value in 1" :key="value" icon="comment-o" text="留言反馈" />
    </van-grid>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "../../images/SlideshowImg1.jpg",
        "../../images/SlideshowImg2.jpg",
        "../../images/SlideshowImg3.jpg",
        "../../images/SlideshowImg4.jpg"
      ]
    };
  }
};
</script>
<style scoped>
</style>
