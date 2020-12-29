<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="replystatus">
      <div class="replytitle">
        <div class="replyicon iconfont icon-check"></div>
        <div class="statusval">感谢您的评价!</div>
      </div>
    </div>
    <div class="otherbox">
      <div class="othertitle">你可能还愿意评价</div>
      <div class="otherlist">
        <div v-for="(item,index) in [1,1,1,1]" :key="index" :class="index==0?'otheritem2':'otheritem'">
          <div class="itemleft">
            <div class="itemtitle">北大学霸给8-18岁孩子的悄悄话子的悄悄话</div>
            <div class="itemtime">2019年4月26日您购买过</div>
          </div>
          <div class="itemright">去评价</div>
        </div>
      </div>
      <div class="morereplybox">
        <div class="moreval">更多待评论</div>
        <div class="moreicon iconfont icon-jiantouarrow487"></div>
      </div>
    </div>
   </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  export default {
    components: {topnav},
    data() {
      return {
        cheight:'',
        isnim:false,
        topobj:{
          type:'',
          typeval:'',
          t_title:'评价成功',
        }
      }
    },
    props: {},
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
  .container{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    background-color: rgb(245,245,245);
    .replystatus{
      height: 80px;
      width: 100%;
      .replytitle{
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 26px auto;
        .replyicon{
          background-color:rgb(255,150,0);
          color: white;
          width: 40px;
          line-height: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
        }
        .statusval{
          height: 40px;
          color: rgb(255,150,0);
          font-size: 1.5rem;
          line-height: 40px;
        }
      }
    }
    .otherbox{
      width: 100%;
      background-color: #fff;
    }
    .othertitle{
      text-indent: 4%;
      width: 100%;
      height: 45px;
      line-height: 45px;
      color: rgb(150,150,150);
      border-bottom: 1px solid #eee;
      font-size: 1rem;
    }
    .otherlist{
      width: 100%;
      padding-left: 4%;
      box-sizing: border-box;
      .otheritem,.otheritem2{
        padding: 15px 0;
        padding-right: 4%;
        box-sizing: border-box;
        border-top: 1px solid #eee;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .itemleft{
          width: 65%;
          flex: 1;
          .itemtitle{
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 1.1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .itemtime{
            color: rgb(150,150,150);
            width: 100%;
            height: 20px;
            margin-top: 4px;
            line-height: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .itemright{
          width: 80px;
          height: 34px;
          margin-top: 4px;
          margin-left: 20px;
          line-height: 34px;
          border: 1px solid rgb(255,150,0);
          text-align: center;
          color: rgb(255,150,0);
          border-radius: 5px;
        }
      }
      .otheritem2{
        border-top: none;
      }
    }
    .morereplybox{
      width: 100%;
      height: 45px;
      line-height: 45px;
      color: rgb(150,150,150);
      border-top: 1px solid #eee;
      padding: 0 4%;
      box-sizing: border-box;
      font-size: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .moreicon{
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: right;
        font-size: 23px;
      }
    }
  }
</style>
