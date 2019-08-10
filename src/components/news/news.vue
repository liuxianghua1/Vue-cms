<template>
  <div>

      <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url" >
            <div class="mui-media-body">
                {{item.title}}
                <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                <p>{{item.add_time | dateFormat}}</p>
            </div>
        </router-link>
    </li>
    
</ul>

  </div>
</template>
<script>
import { Notify } from 'vant';

export default {
    data() {
        return {
            newslist: []
        }
        
    },
    created () {
        this.getNewsList()
    },
    methods: {
            getNewsList(){
                this.$http.get(`api/getnewslist`).then(result => {
                    if (result.body.status === 0) {
                        this.newslist = result.body.message
                    } else {
                        Notify({
                            duration:2000,
                            message: '获取内容失败,请通知管理员!',
                            background: 'red'
                        });
                    }
                })
            }
        }
};
</script>
<style>
.van-notify{
    margin-top: 45px !important;
}
</style>
