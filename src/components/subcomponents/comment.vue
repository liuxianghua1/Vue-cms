<template>
  <div>
    <van-tabs>
      <van-tab>
        <div slot="title">评论专区</div>
        <textarea v-model="msg" placeholder="请输入评论" rows="5" maxlength="50"></textarea>
        <van-button type="primary" size="large" @click="postComment">发送评论</van-button>
      </van-tab>
    </van-tabs>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-panel
        title="评论"
        :desc="item.user_name"
        :status="item.add_time | dateFormat"
        v-for="item in comments"
        :key="item.add_time"
      >
        <div>{{item.content === '' || item.content === 'undefined' ? '此用户很懒,什么都没说。': item.content}}</div>
        <div slot="footer">
          <van-button size="small"  icon="arrow-up" @click="up" >赞</van-button>
          <van-button size="small" type="danger" icon="arrow-down" @click="down">踩</van-button>
        </div>
      </van-panel>
      <!-- <van-button  type="danger" text="加载更多" size="large" @click="getMore" /> -->
    </van-list>
  </div>
</template>
<script>
import { Notify, Toast } from "vant";

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageindex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    up() {
      Toast({
        message: "赞了一下",
        icon: "arrow-up",
        duration: 1000,
        
        onClose() {
          this
        }
      });
    },
    down() {
      Toast({
        message: "踩了一下",
        icon: "arrow-down",
        duration: 1000
      });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // 异步滑动加载数据
        this.getMore();
        // 加载状态结束
        this.loading = false;
        // 限制评论数
        if (this.comments.length >= 80) {
          this.finished = true;
        }
      }, 500);
    },
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            // 不替换老数据
            this.comments = this.comments.concat(result.body.message);
          } else {
            Notify({
              duration: 2000,
              message: "获取评论内容失败,请通知管理员!",
              background: "red"
            });
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("说点什么吧");
      }

      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = "";
            Toast("发表成功!");
          } else {
            Toast("发表失败,请联系管理员!");
          }
        });
    }
  },
  props: ["id"]
};
</script>
<style scoped>
.van-button--primary {
  background-color: #84c225;
  border: #84c225;
}
.van-panel__content {
  margin-left: 17px;
}
.van-cell:not(:last-child)::after {
  left: 0px;
}
textarea{
  border: none;
}

</style>