<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="navbox">
      <div class="navcontent">
        <div class="navitem" v-for="item in navarr" :style="'color: '+item.color" @click="ckecknav(item.type)">{{item.val}}</div>
      </div>
    </div>
    <div class="ordercontent" v-if="orderarr.length>0&&pagetype!=1">
      <div class="orderitem" v-for="item in orderarr">
        <classlist :classobj="item"></classlist>
      </div>
    </div>
    <div class="ordercontent2" v-if="orderarr.length>0&&pagetype==1">
      <div v-for="(item,index) in orderarr" :key="index" :class="index%3==0?'orderitem21':'orderitem2'">
        <dbooklist :classobj="item"></dbooklist>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import classlist from '@/components/my/classlist'
  import dbooklist from '@/components/my/dbooklist'
  export default {
    components: { topnav,classlist,dbooklist},
    data() {
      return {
        cheight:'',
        navarr:[
          {type:0,val:'全部视频',color:'rgb(0,0,0)'},
          {type:1,val:'财商教育',color:'rgb(150,150,150)'},
          {type:2,val:'区块链教育',color:'rgb(150,150,150)'},
          {type:3,val:'文化教育',color:'rgb(150,150,150)'},
          {type:4,val:'更多教育',color:'rgb(150,150,150)'},
        ],
        alllist:[
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
        ],
        orderarr:[],
        navtype:0,
        pagetype:1,
        topobj:{
          type:'serch',
          typeval:'',
          t_title:'热门电子书',
        },
      }
    },
    props: {},
    methods:{
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
      setorderlist(type){

      }
    },
    mounted(){
    },
    created() {
      if(this.$route.query.type){
        this.pagetype = this.$route.query.type
      }
      this.orderarr = [1,1,1,1,1]
      if(this.pagetype==2){
        this.orderarr = this.alllist
        this.topobj.t_title = '热门视频教程'
      }else if(this.pagetype==3){
        this.orderarr = [
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
        ]
        this.topobj.t_title = '热门音频教程'
      }
      this.cheight = this.docheight
      this.setorderlist(0)
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    overflow: hidden;
    background-color: rgb(245,245,245);
    padding-bottom: 20px;
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
    .ordercontent,.ordercontent2{
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      margin-top: 15px;
      .orderitem{
        width: 100%;
        padding: 16px 4%;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom: 1px solid #eee;
      }
    }
    .ordercontent2{
      padding: 0px 4% 16px;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      .orderitem2,.orderitem21{
        margin-top: 16px;
        width: 31%;
        margin-left: 3.5%;
      }
      .orderitem21{
        margin-left: 0;
      }
    }
  }
</style>
