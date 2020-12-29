<template>
  <div class="container">
    <topnav :topobj="topobj"></topnav>
    <div class="infobox">
      <myguanzhu :itemobj="teacherinfo"></myguanzhu>
    </div>
    <div class="fengebox"></div>
    <div class="navbox">
      <div class="navitem" v-for="item in navarr" :style="'color: '+item.color+';border-bottom:'+item.border" @click="ckecknav(item.type)">{{item.val}}</div>
    </div>
    <div class="t_jsbox" v-if="navtype==0">
      <div class="timgbox">
        <div class="imgbox"><img src="/static/images/tx.jpg"></div>
        <div class="t_name">璐璐</div>
        <div class="t_val">清华大学五道口金融学院家族企业课程主任，战略合作发展办公室主任</div>
      </div>
      <div class="easyvalbox">
        <div class="easytitle">个人简介</div>
        <div class=" sesyval">清华大学五道口金融学院家族企业课程主任，战略合作发展办公室主任清华大学五道口金融学院家族企业课程主任，战略合作发展办公室主任清华大学五道口金融学院家族企业课程主任，战略合作发展办公室主任清华大学五道口金融学院家族企业课程主任，战略合作发展办公室主任清华大学五道口金融学院家族企业课程主任，战略合作发展办公室主任</div>
      </div>
    </div>
    <div class="less_jsbox" v-if="navtype==1">
      <div class="orderitem" v-for="item in orderarr">
        <classlist :classobj="item"></classlist>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import myguanzhu from '@/components/my/myguanzhu'
  import classlist from '@/components/my/classlist'
  export default {
    components: { topnav,myguanzhu,classlist},
    data() {
      return {
        navtype:0,
        navarr:[
          {type:0,val:'名师介绍',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
          {type:1,val:'课程介绍',color:'rgb(0,0,0)',border:'none'},
        ],
        orderarr:[
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
        ],
        teacherinfo:{img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:0,type:1},
        topobj:{
          type:'',
          typeval:'',
          t_title:'名师',
        },
      }
    },
    props: {},
    methods:{
      ckecknav(type){
        this.navtype = type
        for(let i = 0;i<this.navarr.length;i++){
          if(type==this.navarr[i].type){
            this.navarr[i].color = 'rgb(255,150,0)'
            this.navarr[i].border = '2px solid rgb(255,150,0)'
          }else {
            this.navarr[i].color = 'rgb(0,0,0)'
            this.navarr[i].border = 'none'
          }
        }
      },
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
    .infobox{
      background-color: #fff;
    }
    .fengebox{
      width: 100%;
      height: 11px;
      background-color: rgb(245,245,245);
    }
    .navbox{
      width: 100%;
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 0 4%;
      height: 45px;
      line-height: 45px;
      background-color: #fff;
      box-sizing: border-box;
      .navitem{
        width: 100/3%;
        height: 100%;
        text-align: center;
      }
    }
    .t_jsbox{
      width: 100%;
      padding: 15px 4%;
      box-sizing: border-box;
      background-color: #fff;
      overflow: hidden;
      .timgbox{
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 5px rgb(220,220,220);
        border-radius: 10px;
        margin-top: 43px;
        padding: 0 20px 15px;
        box-sizing: border-box;
        .imgbox{
          width: 86px;
          height: 86px;
          margin: 0 auto;
          position: relative;
          top: -43px;
          img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
        .t_name{
          width: 100%;
          text-align: center;
          font-size: 1.1rem;
          margin-top: -33px;
          margin-bottom: 10px;
        }
      }
      .easyvalbox{
        margin-top: 20px;
        background-color: #fff;
        width: 100%;
        .easytitle{
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        .sesyval{
          line-height: 1.4rem;
        }
      }
    }
    .less_jsbox{
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      .orderitem{
        width: 100%;
        padding: 16px 4%;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom: 1px solid #eee;
      }
    }
  }
</style>
