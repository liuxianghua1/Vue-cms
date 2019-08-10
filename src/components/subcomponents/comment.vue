<template>
  <div>
    <van-tabs v-model="active">
      <van-tab>
        <div slot="title">
          <van-icon name="more-o" />评论专区
        </div>
        <textarea placeholder="请输入评论" rows="5" maxlength="50"></textarea>
        <van-button type="primary" size="large">发送评论</van-button>
      </van-tab>
    </van-tabs>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          
 <van-panel title="评论" :desc="item.user_name" :status="item.add_time"  v-for="item in comments" :key="item.add_time" >
     
            <div>{{item.content === '' || item.content === 'undefined' ? '此用户很懒,什么都没说。': item.content}}</div>
            <div slot="footer">
              <van-button size="small" icon="arrow-up">赞</van-button>
              <van-button size="small" type="danger" icon="arrow-down">踩</van-button>
            </div>
          </van-panel>
        </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageindex: 3,
      comments: []
    };
  },
created () {
    this.getComments()
},
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 0) {
          this.finished = true;
        }
      }, 500);
    },
    getComments() {
        this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex).then(result => {
            if (result.body.status === 0) {
                this.comments = result.body.message
            } else {
                console.log('失败')
            }
        })
    }
  },
  props: ["id"]
}
</script>
<style>
.van-tabs__line {
  width: 100% !important;
}
.van-button--primary {
  background-color: #84c225;
  border: #84c225;
}
.van-panel__content{
    margin-left: 17px;
}
</style>