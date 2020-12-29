<template>
  <div class="t_container">
    <div class="titem">
      <div v-if="topobj.type==1" class="topitem iconfont icon-gerenzhongxin"></div>
      <div v-if="topobj.type==2" class="topitem iconfont icon-jiantou-copy" @click="backfn"></div>
    </div>
    <div class="titemserch">
      <div class="serchicon iconfont icon-sousuo"></div>
      <input @focus="focusfn" placeholder="搜索你感兴趣的内容"/>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        cheight:'',
      }
    },
    props: {
      topobj:{}
    },
    methods:{
      backfn(){
        window.history.go(-1);
      },
      focusfn(){
        this.$emit('focusfn')
      }
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .t_container{
    background-color: #fff;
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    padding: 0 18px;
    font-size: 1.1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .titem{
      width: 40px;
      height: 100%;
      .topitem{
        font-size: 23px;
      }
    }
    .titemserch{
      flex: 1;
      height: 32px;
      margin-top: 6.5px;
      padding: 0 10px;
      box-sizing: border-box;
      line-height: 32px;
      background-color: rgb(238,238,238);
      border-radius: 18px;
      position: relative;
      .serchicon{
        position: absolute;
        height: 32px;
        line-height: 32px;
        top: 0;
        left: 15px;
        font-size: 20px;
      }
      input{
        text-indent: 30px;
        border: none;
        outline: none;
        width: 100%;
        background-color: rgb(238,238,238);
      }
    }
  }
</style>
