<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="navbox">
      <div class="navitem" v-for="item in navarr" :style="'color: '+item.color+';border-bottom:'+item.border" @click="ckecknav(item.type)">{{item.val}}</div>
    </div>
    <div class="ordercontent" v-if="orderarr.length>0&&navtype!=1">
      <div class="orderitem" v-for="item in orderarr">
        <classlist :classobj="item"></classlist>
      </div>
    </div>
    <div class="ordercontent2" v-if="orderarr.length>0&&navtype==1">
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
          {type:0,val:'视频',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
          {type:1,val:'电子书',color:'rgb(0,0,0)',border:'none'},
          {type:2,val:'音频',color:'rgb(0,0,0)',border:'none'},
        ],
        alllist:[
          {type:'1',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
        ],
        orderarr:[],
        navtype:0,
        topobj:{
          type:'',
          typeval:'',
          t_title:'我的课程',
        },
      }
    },
    props: {},
    methods:{
      ckecknav(type){
        this.navtype = type
        console.log(this.navtype)
        this.setorderlist(type)
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
      setorderlist(type){
        this.orderarr = []
        if(type ==0||type ==2){
          for(let i = 0;i<this.alllist.length;i++){
            if(this.alllist[i].status == type){
              this.orderarr.push(this.alllist[i])
            }
          }
        }else if(type ==1){
          this.orderarr = [1,1,1,1,1]
        }
      }
    },
    mounted(){
    },
    created() {
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
      padding: 0 4%;
      box-sizing: border-box;
      height: 53px;
      line-height: 53px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background-color: #fff;
      .navitem{
        width: 30%;
        height: 100%;
        text-align: center;
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
