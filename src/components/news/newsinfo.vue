<template>
    <div>
        
<van-row>
  <van-col span="24"><h4>{{newsinfo.title}}</h4></van-col>
</van-row>

<van-row >
  <van-col span="24"><p>2018-08-08</p></van-col>
</van-row>

<van-row>
  <van-col span="24"><div v-html="newsinfo.content"></div></van-col>
</van-row>
       
       <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import { Notify } from 'vant';
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo: {},
            newslist: []
        }
    },
    created() {
        this.getNewsInfo()
        
    },
    methods: {
        getNewsInfo(){
            this.$http.get('api/getnew/'+ this.id).then(result => {
                if (result.body.status === 0) {
                        this.newsinfo = result.body.message[0]
                    } else {
                        Notify({
                            duration:2000,
                            message: '获取内容失败,请通知管理员!',
                            background: 'red'
                        });
                    }
            })
        }
    },
    components: {
        'comment-box':comment
    }
}
</script>
<style scoped>

h4{
    text-align: center;
    font-size: 16px;
}
p{
    text-align: center;
}
</style>
