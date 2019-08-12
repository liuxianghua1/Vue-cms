<template>
    <div>
        <van-row>
  <van-col span="24"><h4>{{photoinfo.title}}</h4></van-col>
</van-row>

<van-row >
  <van-col span="24"><p>{{photoinfo.add_time | dateFormat }}</p></van-col>
</van-row>

<van-row>
  <van-col span="24"><div v-html="photoinfo.content"></div></van-col>
    </van-row>

    <comment-box :id="this.id"></comment-box>
    
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo: {}
        }
    },
    created() {
        this.getPhotoInfo()
    },
    methods: {
        getPhotoInfo() {
            this.$http.get("api/getimageInfo/" + this.id).then(result => {
                if (result.body.status === 0) {
                    this.photoinfo = result.body.message[0];
                } else {
                    
                }
            })
        }
    },
    components: {
    "comment-box": comment
  }
}
</script>

<style scoped>
h4,p{
    text-align: center;
}
</style>