<template>
  <div>
    <van-row>
      <van-col span="8" v-for="item in cates"
          :key="item.id" >
        <div
          
          @click="getPhotoList(item.id)"
        >
          <span class="van-ellipsis">{{item.title}}</span>
        </div>
      </van-col>
    </van-row>

    <div class="mui-card" v-for="item in imageList" :key="item.id">
      <div class="mui-card-header">{{item.title}}</div>
      <div class="mui-card-content">
        <img alt width="100%" v-lazy="item.img_url" />
      </div>
      <div class="mui-card-footer">{{item.zhaiyao}}</div>
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
            { title: "空间设计", id: 17 },
            { title: "户型装饰", id: 18 }
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
      // console.log(this.id)
    }
  }
};
</script>
<style>
img {
  vertical-align: middle;
}
</style>
