<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="msgbox">
      <div class="msgnav" v-for="item in msgnavlist" @click="msgnavfn(item.type)">
        <div class="msgnavimg"><img :src="item.img"></div>
        <div class="msgval">{{item.val}}</div>
      </div>
    </div>
    <div class="msglistbox">
      <div class="msgitem">
        <div class="msgitem_img"><img src="/static/images/tx.jpg"></div>
        <div class="msgitem_right">
          <div class='right_val'>
            <div class="r_valtitle">系统消息</div>
            <div class="r_valtext">一场展览正在成都举行，看波兰摄影师</div>
          </div>
          <div class="r_timebox">
            <div class="r_time">13:55</div>
            <div class="r_num">4</div>
          </div>
        </div>
      </div>
    </div>
    <footnav :footobj="footobj"></footnav>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import footnav from '@/components/public/footnav'
  export default {
    components: {topnav,footnav},
    data() {
      return {
        cheight:'',
        msgnavlist:[
          {img:'/static/images/tx.jpg',val:'交易消息',type:1},
          {img:'/static/images/tx.jpg',val:'通知消息',type:2},
          {img:'/static/images/tx.jpg',val:'活动消息',type:3},
        ],
        footobj:[
          {val:'首页',icon:'icon-shouyeshouye',color:'rgb(50,50,50)'},
          {val:'活动',icon:'icon-huomiao',color:'rgb(50,50,50)'},
          {val:'消息',icon:'icon-message',color:'rgb(255,131,21)'},
          {val:'我的',icon:'icon-gerenzhongxin',color:'rgb(50,50,50)'},
        ],
        topobj:{
          type:1,
          typeval:'',
          t_title:'消息',
        },
      }
    },
    props: {},
    methods:{
      msgnavfn(type){
        if(type == 1){
          window.location.href = '#/tradmsg'
        }else if(type == 2){
          window.location.href = '#/noticemsg'
        }else if(type == 3){
          window.location.href = '#/activemsg'
        }
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
    padding-bottom: 60px;
    box-sizing: border-box;
    .msgbox{
      width: 100%;
      background-color: #fff;
      padding: 15px 4%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-sizing: border-box;
      .msgnav{
        width: 34%;
        overflow: hidden;
        .msgnavimg{
          width: 50px;
          height: 50px;
          margin: 0 auto;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .msgval{
          margin-top: 7px;
          font-size: 1rem;
          text-align: center;
          width: 100%;
        }
      }
    }
    .msglistbox{
      width: 100%;
      padding: 10px 0;
      padding-left: 4%;
      min-height: 400px;
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 10px;
      .msgitem{
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        .msgitem_img{
          width: 45px;
          height: 45px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .msgitem_right{
          flex: 1;
          height: 55px;
          padding-right: 4%;
          margin-left: 4%;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
          .right_val{
            flex: 1;
            .r_valtitle{
              font-size: 1.1rem;
              height: 20px;
              line-height: 20px;
              margin-top: 3px;
            }
            .r_valtext{
              width: 100%;
              color: rgb(150,150,150);
              width: 200px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .r_timebox{
            width: 50px;
            text-align: right;
            .r_time{
              color: rgb(130,130,130);
            }
            .r_num{
              display: inline-block;
              margin-top: 3px;
              padding: 0 6px;
              border-radius: 10px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              box-sizing: border-box;
              background-color:red;
              color: white;
            }
          }
        }
      }
    }
  }
</style>
