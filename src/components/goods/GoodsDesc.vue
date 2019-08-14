<template>
  <div>
    <h1>{{ info.title }}</h1>
    <div v-html="info.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        info: {}
    };
  },
  created() {
      this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
              this.info = result.body.message[0]
          }
        });
    }
  }
};
</script>
<style lang="">
</style>