<template>
  <div>
    <!-- 商品区域 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
      check
    >
      <router-link :to="'/home/GoodsInfo/' + item.id" v-for="item in goodslist" :key="item.id">
        <van-card
          :price="item.sell_price"
          :origin-price="item.market_price"
          :desc="item.zhaiyao"
          :title="item.title"
          tag="hot"
          :thumb="item.img_url"
          lazy-load
          centered
        >
          <div slot="footer">
            <h6>月销 {{ item.stock_quantity }} 笔 领军者旗舰店</h6>
          </div>
        </van-card>
      </router-link>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: [], //存放商品列表
      loading: false,
      finished: false
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.loading = false;
        this.getMore();

        if (this.goodslist.length >= this.goodslist.length) {
          this.finished = true;
        }
      }, 1000);
    },
    getGoodsList() {
      // 获取商品列表
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            //   不替换老数据
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    }
  }
};
</script>
<style>
</style>