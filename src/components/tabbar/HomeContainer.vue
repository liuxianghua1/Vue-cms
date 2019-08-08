<template>
  <div>
<van-swipe :autoplay="3000" indicator-color="#84c225">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>

    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
          '../../images/SlideshowImg1.jpg',
          '../../images/SlideshowImg2.jpg',
          '../../images/SlideshowImg3.jpg',
          '../../images/SlideshowImg4.jpg',
      ]
    }
  }
}
</script>
<style scoped>
</style>
