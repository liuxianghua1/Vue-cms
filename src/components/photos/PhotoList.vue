<template>
  <div>
    <mu-container>
      <mu-tabs class="mu-tabs mu-tabs-full-width">
        <mu-tab
          v-for="item in cates"
          :key="item.id"
          @click="getPhotoList(item.id)"
          full-width
        >{{item.title}}</mu-tab>
      </mu-tabs>
    </mu-container>

      <div class="mui-card" v-for="item in imageList" :key="item.id">
    <router-link tag="span" :to="'/home/photoinfo/' + item.id">

        <div class="mui-card-header">{{item.title}}</div>
        <div class="mui-card-content">
          <img alt width="100%" v-lazy="item.img_url" />
        </div>
        <div class="mui-card-footer">{{item.zhaiyao}}</div>
    </router-link>
      </div>
  </div>
</template>
<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      active: 0,
      cates: [],
      imageList: []
    };
  },
  created() {
    this.getAllCate();
    this.getPhotoList(0);
  },
  methods: {
    getAllCate() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          // result.body.message.unshift(
          //   { title: "全部", id: 0 }
          // );
          // this.cates = result.body.message;
          this.cates.unshift(
            { title: "全部", id: 0 },
            { title: "户型装饰", id: 18 },
            { title: "空间设计", id: 17 }
          );
        } else {
          Notify({
            duration: 2000,
            message: "获取分类失败,请通知管理员!",
            background: "red"
          });
        }
      });
    },

    getPhotoList(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.imageList = result.body.message;
        }
        if (this.imageList.length === 0) {
          Notify({
            duration: 2000,
            message: "获取内容失败,请通知管理员!",
            background: "red"
          });
        }
      });
    }
  }
};
</script>
<style>
img {
  vertical-align: middle;
}
.mu-tabs {
  color: #7d7e80;
  background-color: white;
}
.mu-tab-active {
  color: #f44;
}
.mu-tab-link-highlight {
  height: 0px;
}
.container {
  padding-left: 0px;
  padding-right: 0px;
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
</style>
