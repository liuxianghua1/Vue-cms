<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="initcount"
      @change="countChange"
      ref="numbox"
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    //初始化数字选择框
    mui(".mui-numbox").numbox();
  },

  methods: {
    countChange() {
      //   this.$emit("getcount", parseInt(this.$refs.numbox.value));
    //   数量改变 同步覆盖之前的数量
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsid,
        count: this.$refs.numbox.value
      });
    }
  },
  props: ["initcount", "max", "goodsid"],

  watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>
<style>
/* //火狐下的移除 */
input[type="number"] {
  -moz-appearance: textfield;
}

/* //谷歌下的移除 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.mui-input-numbox {
  font-size: 13px;
  background-color: white !important;
}
.mui-numbox {
  border: 0px;
  width: 64px;
  height: 22px;
  border: 1px solid #ebedf0;
  padding: 0 0px 0 0px !important;
}
.mui-numbox [class*="btn-numbox"] {
  width: 20px;
  background-color: white !important;
}
</style>