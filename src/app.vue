<template>
  <div>
    <h1>这是app组件</h1>
    <!-- 为什么这里叫做mt-button 的button 直接就能用 -->

    <router-link to="/account">
      <mt-button size="small" type="primary" icon="more" plain @click="show">account</mt-button>
    </router-link>

    <router-link to="/goodslist">
      <mt-button size="small" type="primary" icon="more" plain>goodslist</mt-button>
    </router-link>

    <router-link to="/">
      <mt-button size="small" type="primary" icon="back" plain @click="back">返回</mt-button>
    </router-link>

   


    <button type="button" class="mui-btn mui-btn-royal">紫色</button>

    <router-view></router-view>
  </div>
</template>
<script>
// 按需导入toast组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      toastInstanse: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    show() {
      Toast({
        message: "点击了account",
        duration: 500
      });
    },
    back() {
   this.toastInstanse = Toast({
        iconClass: "glyphicon glyphicon-ok", //图标
        message: "已经返回", //显示信息
        duration: -1, //停留时间 毫秒
        className: "" //自定义的类名 自定义样式
      });
    },

    getList() {
      // 模拟获取列表的一个ajax方法
      this.back();
      setTimeout(() => {
        this.toastInstanse.close();
      }, 3000);
    }
  }
};
</script>

<style>
</style>

