<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in thumb" :key="thumb.url">
        <img :src="thumb.src" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">
          <span class="OldPrice">原价:{{ "￥"+(goods.market_price) }}</span>
          现价:{{ "￥"+(goods.sell_price) }}
        </div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="7">运费：免运费</van-col>
        <van-col span="7">剩余：{{ goods.stock_quantity }}件</van-col>

        <van-col span="10">
          购买数量:
          <numbox @getcount="getSelectCount" :max="goods.stock_quantity"></numbox>
        </van-col>
        
      </van-cell>
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    </van-cell-group>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button
        type="warning"
        @geicount="getSelectCount"
        @click="ballFlag=!ballFlag"
      >加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
    </van-goods-action>
    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link to="/home/GoodsList">
        <template slot="title">
          <span class="van-cell-text">领军者旗舰店</span>
          <van-tag class="goods-tag" type="danger">旗舰店</van-tag>
        </template>
      </van-cell>
    </van-cell-group>

    <van-collapse v-model="activeNames" border accordion>
      <van-collapse-item title="查看商品详情" icon="goods-collect-o" name="1">
        <h4>{{ info.title }}</h4>
        <br />
        <div v-html="info.content" class="content"></div>
      </van-collapse-item>
      <van-collapse-item title="查看商品评价" icon="chat-o" name="2">
        <cmtbox :id="$route.params.id"></cmtbox>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";

import cmtbox from "../subcomponents/comment.vue";
import numbox from "../subcomponents/numbox.vue";

export default {
  components: {
    cmtbox,
    numbox,
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },

  data() {
    return {
      activeNames: [],
      goods: {},
      ballFlag: false,
      id: this.$route.params.id,
      thumb: [],
      info: {},
      selectCount: 1 //添加购物车数量
    };
  },
  created() {
    this.getSwipe();
    this.getGoodsInfo();
    this.getGoodsDesc();
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 购物车位置
      const badgePositon = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePositon.left - ballPosition.left;
      const yDist = badgePositon.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.3 s ease";
      done();
    },
    afterEnter(el) {
      // 这句话， 第一个功能，是控制小球的显示与隐藏
      // 第二个功能： 直接跳过后半场动画，让 flag 标识符 直接变为 false
      // 当第二次再点击 按钮的时候， flag  false  ->    true
      el.style.opacity = 1;
      this.ballFlag = !this.ballFlag;

      // Vue 把一个完整的动画，使用钩子函数，拆分为了两部分：
      // 我们使用 flag 标识符，来表示动画的切换；
      // 刚以开始，flag = false  ->   true   ->   false
    },
    onClickCart() {
      this.$router.push("cart");
    },

    sorry() {
      Toast("暂无后续逻辑~");
    },
    getSwipe() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.thumb = result.body.message;
        }
      });
    },

    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goods = result.body.message[0];
        }
      });
    },

    getGoodsDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
          }
        });
    },

    getSelectCount(count) {
      // 子组件数量传递给父组件 吧选中的值 保存到data上
      this.selectCount = count;
    }
  }
};
</script>
<style lang="less">
//火狐下的移除
input[type="number"] {
  -moz-appearance: textfield;
}

//谷歌下的移除
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  position: absolute;
  z-index: 99999;
}
.content {
  img {
    width: 100%;
  }
}
.OldPrice {
  color: #7d7e80;
  text-decoration: line-through;
}
.van-goods-action {
  z-index: 999 !important;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>