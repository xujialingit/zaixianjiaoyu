<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="ctopbox">
      <div class="carimgbox">
        <img src="/static/images/bg2.jpg">
        <div class="xinicon iconfont icon-xin"></div>
      </div>
      <div class="detaititle">传递理财小知识，通过增加理财知识，让自己更自信</div>
      <div class="teacherbox">
        <myguanzhu :itemobj="teacherobj"></myguanzhu>
      </div>
      <div class="itembox">
        <div class="itemicon iconfont icon-shangmenriqi01"></div>
        <div class="itemval">12月31日—12月31日 10:00-22:00</div>
      </div>
      <div class="itembox">
        <div class="itemicon iconfont icon-weizhi"></div>
        <div class="itemval">成都市远洋太古里</div>
      </div>
      <div class="signbox">
        <div class="signtitle">已经报名</div>
        <div class="signuser">
          <div class="userbox">
            <div class="signitem" v-for="item in  [1,1,1,1,1,]"><img src="/static/images/tx.jpg"></div>
          </div>
          <div class="signright iconfont icon-jiantouarrow487" @click="signrfn"></div>
        </div>
      </div>
    </div>
    <div class="active_js">
      <div class="jstitlebox">
        <div class="jstitle">活动介绍</div>
      </div>
      <div class="jsval">如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱如果你有很多钱</div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import myguanzhu from '@/components/my/myguanzhu'
  export default {
    components: { topnav,myguanzhu},
    data() {
      return {
        cheight:'',
        teacherobj:{img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:1,type:2},
        topobj:{
          type:'',
          typeval:'',
          t_title:'活动详情',
        },
      }
    },
    props: {},
    methods:{
      signrfn(){
        window.location.href = '#/alreadysign'
      }
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
    background-color: rgb(245,245,245);
    box-sizing: border-box;
    .ctopbox{
      background-color: #fff;
      margin-top: 10px;
      width: 100%;
      padding: 15px 0;
      box-sizing: border-box;
      .carimgbox{
        width: 92%;
        margin-left: 4%;
        position: relative;
        .xinicon{
          position: absolute;
          bottom: -24px;
          width: 48px;
          height: 48px;
          font-size: 30px;
          text-align: center;
          line-height: 48px;
          background-color: rgb(182,182,182);
          right: 5px;
          color: white;
        }
        img{
          width: 100%;
          border-radius: 5px;
        }
      }
      .detaititle{
        padding: 0 4%;
        box-sizing: border-box;
        width: 100%;
        box-sizing: border-box;
        line-height: 1.8rem;
        margin-top: 35px;
        font-size: 1.2rem;
      }
      .itembox{
        width: 100%;
        padding: 0 4%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        line-height: 25px;
        margin-bottom: 5px;
        .itemicon{
          width: 25px;
          height: 25px;
          font-size: 25px;
          margin-right: 7px;
        }
        .itemval{
          flex: 1;
        }
      }
      .signbox{
        width: 100%;
        padding: 0 4%;
        box-sizing: border-box;
        margin-top: 15px;
        .signuser{
          margin-top: 8px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          overflow: hidden;
          .userbox{
            flex: 1;
            .signitem{
              width: 25px;
              height: 25px;
              font-size: 0px;
              display: inline-block;
              margin-right: -5px;
              img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }
          .signright{
            width: 25px;
            height: 25px;
            text-align: right;
            line-height: 25px;
            font-size: 23px;
            color: rgb(150,150,150);
          }
        }
      }
    }
    .active_js{
      width: 100%;
      background-color: #fff;
      padding: 25px 4% 20px;
      box-sizing: border-box;
      margin-top: 10px;
      .jstitlebox{
        width: 80%;
        margin-left: 10%;
        height: 1px;
        background-color: #eee;
        .jstitle{
          width: 90px;
          text-align: center;
          background-color: #fff;
          height: 20px;
          line-height: 20px;
          margin: 0 auto;
          position: relative;
          top: -10px;
        }
      }
      .jsval{
        width: 100%;
        margin-top: 20px;
        box-sizing: border-box;
        line-height: 1.4rem;
        padding-bottom: 10px;
      }
    }
  }
</style>
