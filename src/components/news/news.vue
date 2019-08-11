<template>
  <div>
      <van-list
  v-model="error"
  :error.sync="error"
  error-text="没有更多了"
>
    <mu-container>
      <mu-card style="margin-top:20px;" v-for="item in newslist" :key="item.id">
        <mu-card-media title sub-title>
          <img :src="item.img_url" />
        </mu-card-media>
        <mu-card-title :title="item.title"></mu-card-title>
        <mu-card-text>{{item.zhaiyao}}</mu-card-text>
        <mu-card-actions>
          <mu-button flat :to="'/home/newsinfo/' + item.id">查看</mu-button>
        </mu-card-actions>
      </mu-card>
    </mu-container>
    </van-list>
  </div>
</template>
<script>
import { Notify } from "vant";

export default {
  data() {
    return {
      newslist: [],
      error: false,
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get(`api/getnewslist`).then(result => {
        if (result.body.status === 0) {
          this.newslist = result.body.message;
        } else {
          Notify({
            duration: 2000,
            message: "获取内容失败,请通知管理员!",
            background: "red"
          });
        }
      });
    },
  }
};
</script>
<style>
.van-notify {
  margin-top: 45px !important;
}
@media (min-width: 1200px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 100%;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 100%;
  }
}
.van-list__loading{
    display: none;
}
</style>
