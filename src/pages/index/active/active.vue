<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="navbox">
      <div class="navcontent">
        <div class="navitem" v-for="item in navarr" :style="'color: '+item.color" @click="ckecknav(item.type)">{{item.val}}</div>
      </div>
    </div>
    <div class="navbox2">
      <div class="navitem" v-for="item in navarr2" :style="'color: '+item.color+';border-bottom:'+item.border" @click="ckecknav2(item.type)">{{item.val}}</div>
    </div>
    <div class="activebox">
      <div v-for="(item,index) in activearr" :key="index" :class="index==0?'activelist2':'activelist'" @click="todetail(item)">
        <activeitem :itemobj="item"></activeitem>
      </div>
    </div>
    <div class="alerttime iconfont icon-shangmenriqi01">
      <group>
        <datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="changetime"></datetime>
      </group>
    </div>
    <footnav :footobj="footobj"></footnav>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import classlist from '@/components/my/classlist'
  import dbooklist from '@/components/my/dbooklist'
  import activeitem from '@/components/active/activeitem'
  import footnav from '@/components/public/footnav'
  import { Datetime,Group } from 'vux'
  export default {
    components: { topnav,classlist,dbooklist,footnav,activeitem,Datetime,Group},
    data() {
      return {
        cheight:'',
        minuteListValue:'',
        footobj:[
          {val:'首页',icon:'icon-shouyeshouye',color:'rgb(50,50,50)'},
          {val:'活动',icon:'icon-huomiao',color:'rgb(255,131,21)'},
          {val:'消息',icon:'icon-message',color:'rgb(50,50,50)'},
          {val:'我的',icon:'icon-gerenzhongxin',color:'rgb(50,50,50)'},
        ],
        navarr:[
          {type:0,val:'全部视频',color:'rgb(0,0,0)'},
          {type:1,val:'财商教育',color:'rgb(150,150,150)'},
          {type:2,val:'区块链教育',color:'rgb(150,150,150)'},
          {type:3,val:'文化教育',color:'rgb(150,150,150)'},
          {type:4,val:'更多教育',color:'rgb(150,150,150)'},
        ],
        navarr2:[
          {type:0,val:'正在进行中',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
          {type:1,val:'往期活动',color:'rgb(0,0,0)',border:'none'},
        ],
        activearr:[
          {img:'/static/images/activeimg.png',val:'远洋太古里',title:'传递理财小知识',time:'05月20日结束',type:'1',id:'1',typeclass:'财商教育'},
          {img:'/static/images/activeimg.png',val:'远洋太古里',title:'传递理财小知识',time:'05月20日结束',type:'1',id:'1',typeclass:'财商教育'},
          {img:'/static/images/activeimg.png',val:'远洋太古里',title:'传递理财小知识',time:'05月20日结束',type:'1',id:'1',typeclass:'财商教育'},
        ],
        navtype:0,
        navtype2:0,
        topobj:{
          type:1,
          typeval:'',
          t_title:'线下活动',
        },
      }
    },
    props: {},
    methods:{
      todetail(){
        window.location.href = '#/activedetail'
      },
      changetime(){

      },
      ckecknav(type){
        this.navtype = type
        this.setorderlist(type)
        for(let i = 0;i<this.navarr.length;i++){
          if(type==this.navarr[i].type){
            this.navarr[i].color = 'rgb(0,0,0)'
          }else {
            this.navarr[i].color = 'rgb(150,150,150)'
          }
        }
      },
      ckecknav2(type){
        this.navtype2 = type
        for(let i = 0;i<this.navarr2.length;i++){
          if(type==this.navarr2[i].type){
            this.navarr2[i].color = 'rgb(255,150,0)'
            this.navarr2[i].border = '2px solid rgb(255,150,0)'
          }else {
            this.navarr2[i].color = 'rgb(0,0,0)'
            this.navarr2[i].border = 'none'
          }
        }
      },
      setorderlist(type){

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
    .navbox{
      width: 100%;
      box-sizing: border-box;
      height: 53px;
      line-height: 53px;
      background-color: #fff;
      .navcontent{
        width: 100%;
        overflow-x: scroll;
        white-space: nowrap;
        .navitem{
          width: 100/3%;
          height: 100%;
          text-align: center;
          display: inline-block;
        }
      }
      .navcontent::-webkit-scrollbar {
        display: none;
      }
    }
    .navbox2{
      width: 100%;
      margin-top: 11px;
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 0 4%;
      background-color: #fff;
      box-sizing: border-box;
      .navitem{
        width: 30%;
        height: 45px;
        line-height: 45px;
        font-size: 1rem;
        text-align: center;
      }
    }
    .activebox{
      width: 100%;
      padding: 10px 0;
      box-sizing: border-box;
      background-color: #fff;
      .activelist,.activelist2{
        width: 100%;
        border-top: 1px solid #eee;
        padding: 15px 4%;
        box-sizing: border-box;
      }
      .activelist2{
        border-top: none;
      }
    }
    .alerttime{
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 23px;
      background-color: rgba(0,0,0,0.3);
      color: white;
      border-radius: 50%;
      position: fixed;
      right: 30px;
      bottom: 70px;
      div{
        position: relative;
        top: -40px;
        opacity: 0;
      }
    }
  }
</style>
<style>
  .vux-no-group-title{
    margin-top: 0px !important;
  }
</style>
