<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <div class="t_container">我的</div>
    <div class="my_top">
      <div class="whitebox"></div>
      <div class="userinfobox">
        <img src="/static/images/mybg.png">
        <div class="userinfo">
          <div class="infobox">
            <div class="userid">ID:{{iphone}}</div>
            <div class="username">挥着辣条的男孩</div>
            <div class="userimg"><img src="/static/images/tx.jpg"></div>
            <div class="edit iconfont icon-bianji" @click="editfn"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="czdhbox">
      <div class="czdhitem">
        <div class="item_top" style="border-right: 1px solid #eee">
          <div class="item_toptitle">MIC余额</div>
          <div class="item_topval">6666</div>
        </div>
        <div class="itembtn">充值MIC</div>
      </div>
      <div class="czdhitem">
        <div class="item_top">
          <div class="item_toptitle">教育豆余额</div>
          <div class="item_topval">123456</div>
        </div>
        <div class="itembtn" @click="changedou">兑换教育豆</div>
      </div>
    </div>
    <div class="itembox">
      <myitem :itemobj="historyitem"></myitem>
    </div>
    <div class="historybox">
      <div class="hiscardbox">
        <div v-for="(item,index) in [1,1,1,1,1]" :class="index==0?'hiscard2':'hiscard'">
          <div class="hisimg"><img src="/static/images/hisimg.png"></div>
          <div class="histext">传递理财小知识</div>
        </div>
      </div>
    </div>
    <div class="itembox" style="margin-bottom: 10px">
      <div class="itemlistbox" v-for="item in myitemlist">
        <myitem :itemobj="item"></myitem>
      </div>
    </div>

    <div class="itembox">
      <myitem :itemobj="setitem"></myitem>
    </div>
    <!--<div @click="clearfn">清除</div>-->
    <footnav :footobj="footobj"></footnav>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import footnav from '@/components/public/footnav'
  import myitem from '@/components/my/myitem'
  import Topnav from "@/components/public/topnav";
  export default {
    components: {Topnav, topnav,footnav,myitem},
    data() {
      return {
        cheight:'',
        iphone:'',
        topobj:{
          type:1,
          typeval:'',
          t_title:'我的',
        },
        historyitem:{type:1,val:'历史浏览',icon:'icon-3lishi',border:false},
        myitemlist:[
          {type:2,val:'我的订单',icon:'icon-dingdanzhuangtai',border:true},
          {type:3,val:'我的课程',icon:'icon-bofang1',border:true},
          {type:4,val:'我的收藏',icon:'icon-aixin',border:true},
          {type:5,val:'我的关注',icon:'icon-gerenzhongxin',border:false},
        ],
        setitem:{type:6,val:'设置',icon:'icon-shezhi',border:false},
        footobj:[
          {val:'首页',icon:'icon-shouyeshouye',color:'rgb(50,50,50)'},
          {val:'活动',icon:'icon-huomiao',color:'rgb(50,50,50)'},
          {val:'消息',icon:'icon-message',color:'rgb(50,50,50)'},
          {val:'我的',icon:'icon-gerenzhongxin',color:'rgb(255,131,21)'},
        ],
      }
    },
    props: {},
    methods:{
      clearfn(){
        localStorage.removeItem("id2222");
      },
      changedou(){
        window.location.href = '#/changedou'
      },
      editfn(){
        window.location.href = '#/userCenter'
      }
    },
    mounted(){
    },
    created() {
      console.log(localStorage.getItem('id2222'))
      this.iphone = localStorage.getItem('id2222')
      this.cheight = this.docheight
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    overflow: hidden;
    background-color: rgb(245,245,245);
    padding-bottom: 60px;
    box-sizing: border-box;
    .t_container{
      width: 100%;
      height: 45px;
      line-height: 45px;
      overflow: hidden;
      padding: 0 18px;
      text-align: center;
      background-color: #fff;
      font-size: 1.1rem;
      box-sizing: border-box;
    }
    .my_top{
      width: 100%;
      position: relative;
      .whitebox{
        width: 100%;
        height: 76px;
        background-color: #fff;
      }
      .userinfobox{
        width: 92%;
        margin-left: 4%;
        position: relative;
        border-radius: 10px;
        margin-top: -76px;
        overflow: hidden;
        img{
          width: 100%;
        }
        .userinfo{
          width: 100%;
          height:100%;
          position: absolute;
          top: 0;
          left: 0;
          .infobox{
            width: 100%;
            height: 100%;
            text-align: center;
            box-sizing: border-box;
            padding-top: 20px;
            font-size: 1.1rem;
            display: flex;
            flex-direction: column-reverse;
            position: relative;
            .edit{
              position: absolute;
              top: 20px;
              right: 20px;
              font-size: 23px;
              color: rgb(150,150,150);

            }
            .userimg{
              width: 76px;
              height: 76px;
              margin: 0 auto;
              img{
                width: 100%;
                border-radius: 50%;
                height: 100%;
              }
            }
            .username{
              margin: 5px 0;
            }
            .userid{
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    .czdhbox{
      width: 100%;
      background-color: #fff;
      margin-top: 10px;
      padding: 15px 4%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .czdhitem{
        width: 50%;
        text-align: center;
        .item_top{
          width: 100%;
          .item_toptitle{
            font-size: 1.1rem;
          }
          .item_topval{
            margin: 10px auto;
            color: rgb(150,150,150);
          }
        }
        .itembtn{
          width: 70%;
          margin-left: 15%;
          height: 32px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgb(255,150,0);
          color: rgb(255,150,0);
          font-size: 1rem;
          line-height: 32px;
        }
      }
    }
    .itembox{
      width: 100%;
      padding: 0 4%;
      box-sizing: border-box;
      background-color: #fff;
      .itemlistbox{
        width: 100%;
      }
    }
    .historybox{
      width: 100%;
      background-color: #fff;
      padding: 0 4%;
      box-sizing: border-box;
      padding-bottom: 15px;
      margin-bottom: 10px;
      .hiscardbox{
        width: 100%;
        display: flex;
        overflow-x: scroll;
        flex-direction: row;
        justify-content: flex-start;
        .hiscard,.hiscard2{
          width: 135px;
          margin-left: 5px;
          .hisimg{
            width: 100%;
            height: 80px;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .histext{
            width: 135px;
            font-size: 1.1rem;
            margin-top: 5px;
            overflow: hidden;
            margin-bottom: 5px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; //行数
            -webkit-box-orient: vertical;
          }
        }
        .hiscard2{
          margin-left: 0px;
        }
      }
      .hiscardbox::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
