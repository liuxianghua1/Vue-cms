<template>
  <div>
    <van-row>
      <van-col span="24">
        <h4>{{photoinfo.title}}</h4>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <p>{{photoinfo.add_time | dateFormat }}</p>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24" class="suoluetu">
        <vue-preview :slides="list"></vue-preview>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <div v-html="photoinfo.content"></div>
      </van-col>
    </van-row>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: [],
      imglist: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        } else {
        }
      });
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.msrc = item.src;
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
        } else {
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style>
h4,
p {
  text-align: center;
}
.my-gallery figure img{
    width: 100%;
}
</style>