<template>
  <div class="container">
    <topnav2 :topobj="topobj"></topnav2>
    <div class="lsbox">
      <div class="serchlsbox">
        <div class="lsval">历史搜索</div>
        <div class="delicon iconfont icon-dustbin_icon" @click="delfn"></div>
      </div>
      <div class="lsitembox">
        <div class="lsitem">牛仔裤群</div>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav2 from '@/components/public/topnav2'
  export default {
    components: {topnav2},
    data() {
      return {
        topobj:{type:2},
      }
    },
    props: {},
    methods:{
      delfn(){

      }
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .lsbox{
      width: 100%;
      padding: 0 4%;
      box-sizing: border-box;
      .serchlsbox{
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .delicon{
          color: rgb(150,150,150);
        }
      }
      .lsitembox{
        width: 100%;
        .lsitem{
          display: inline-block;
          background-color: rgb(237,237,237);
          color: rgb(150,150,150);
          padding: 2px 7px;
          border-radius: 5px;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
