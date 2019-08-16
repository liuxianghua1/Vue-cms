<template>
  <div>
    <van-divider :style="{ color: '#8f8f94', borderColor: '#84c225', padding: '0 16px' }">共有1件商品</van-divider>
    <van-card
      v-for="(item, i) in goodslist"
      :key="item.id"
      :title="item.title"
      :price="item.sell_price"
      :thumb="item.thumb_path"
    >
      <div slot="bottom">
        <van-checkbox-group v-model="checkedGoods">
          <van-checkbox :name="item" v-model="checked"></van-checkbox>
        </van-checkbox-group>
      </div>

      <div slot="footer">
        <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
        <van-button size="mini" @click.prevent="remoev(item.id, i)">删除</van-button>
      </div>
    </van-card>

    <!-- <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>-->

    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import numbox from "../subcomponents/numbox.vue";
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
export default {
  components: {
    numbox,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: [],
      checked: true,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  computed: {
    // 计算数量
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    //计算价格
    totalPrice() {
      return this.goodslist.reduce(
        (total, item) =>
          total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
        0
      );
    }
  },
  methods: {
    // 本地存储删除
    remoev(id, index) {
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFormCar", id);
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },

    onSubmit() {
      Toast("点击结算");
    },
    // 购物车商品列表
    getGoodsList() {
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果没有商品 则不请求
      if (idArr.length <= 0) {
        return;
      }

      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    }
  }
};
</script>

<style lang="less">
.van-checkbox__icon--checked .van-icon {
  color: #fff;
  background-color: #84c225;
  border-color: #84c225;
}
.van-submit-bar {
  bottom: 50px;
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>