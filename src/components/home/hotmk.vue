<template>
    <div class="itembox">
      <div class="mimgbox">
        <img :src="mokuaiobj.img">
      </div>
      <div class="m_val">{{mokuaiobj.val}}</div>
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
      }
    },
    props: {
      mokuaiobj:{}
    },
    methods:{
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .itembox{
    width: 100%;
    overflow: hidden;
    .mimgbox{
      width: 110px;
      height: 110px;
      margin: 0 auto;
      border-radius: 10px;
      overflow: auto;
      font-size: 0;
      img{
        width: 100%;
        height: 100%;
        font-size: 0;
      }
    }
    .m_val{
      text-align: center;
      height: 20px;
      line-height: 20px;
      margin-top: 11px;
    }
  }
</style>
