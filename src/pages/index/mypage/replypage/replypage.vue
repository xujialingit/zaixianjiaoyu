<template>
  <div class="container" >
    <topnav :topobj="topobj"></topnav>
    <div class="fengebox"></div>
    <div class="replycontent">
      <div class="replybox">
        <textarea placeholder="说说你的使用心得,分享给想买的他们吧!"></textarea>
      </div>
      <div class="isnimbox">
        <div :class="isnim?'itemckeck2':'itemckeck'" @click="isnim= !isnim"><span class="iconfont icon-check"></span></div>
        <div class="isnimval">匿名评论</div>
      </div>
      <div class="sendbtn">
        <btn :btnobj="btnobj" @btnfn="btnfn"></btn>
      </div>
    </div>
   </div>
</template>

<script>
  import btn from '@/components/public/btn'
  import topnav from '@/components/public/topnav'
  export default {
    components: {topnav,btn},
    data() {
      return {
        isnim:false,
        btnobj:{
          type:1,
          val:'发布',
        },
        topobj:{
          type:'',
          typeval:'',
          t_title:'发表评价',
        }
      }
    },
    props: {},
    methods:{
      btnfn(){
        window.location.href = '#/replyok'
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
    .fengebox{
      width: 100%;
      height: 11px;
      background-color: rgb(245,245,245);
    }
    .replycontent{
      width: 100%;
      padding: 15px 4%;
      box-sizing: border-box;
      .replybox{
        width: 100%;
        height: 150px;
        border: 1px solid #eee;
        padding: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        textarea{
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          resize: none;
        }
      }
      .isnimbox{
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .itemckeck,.itemckeck2{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #fff;
          color: white;
          text-align: center;
          line-height: 20px;
          border: 1px solid #ccc;
        }
        .itemckeck2{
          background-color: rgb(255,150,0);
          border: 1px solid rgb(255,150,0);
        }
        .isnimval{
          height: 22px;
          line-height: 22px;
          margin-left: 10px;
          color: rgb(150,150,150);
        }
      }
      .sendbtn{
        width: 80%;
        margin-left: 10%;
        margin-top: 50px;
      }
    }
  }
</style>
