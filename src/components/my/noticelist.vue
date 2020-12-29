<template>
    <div class="noticeinfo">
      <div class="infotitle">今日奖励已到账</div>
      <div class="infoval">你的200教育豆...</div>
      <div class="clicklookbox">
        <div class="lookval">点击查看</div>
        <div class="righticon iconfont icon-jiantouarrow487"></div>
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
      noticeobj:{}
    },
    methods:{
    },
    mounted(){
    },
    created() {
      this.cheight = this.docheight
    },
  }
</script>

<style scoped lang="less">
  .noticeinfo{
    width: 100%;
    background-color: #fff;
    padding: 16px 4% 0;
    box-sizing: border-box;
    border-radius: 5px;
    .infotitle{
      width: 100%;
      padding: 5px 0;
      box-sizing: border-box;
      font-size: 1.1rem;
    }
    .infoval{
      width: 100%;
      padding: 5px 0 16px;
      box-sizing: border-box;
      color: rgb(150,150,150);
    }
    .clicklookbox{
      width: 100%;
      padding: 16px 0 16px;
      box-sizing: border-box;
      border-top: 1px solid #eee;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .lookval{
        color: rgb(255,150,0);
        font-size: 1rem;
      }
      .righticon{
        color: rgb(150,150,150);
        font-size: 23px;
      }
    }
  }

</style>
