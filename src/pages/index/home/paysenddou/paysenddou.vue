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
      <div class="ordercontent" v-if="orderarr.length>0&&navtype2!=1">
        <div class="orderitem" v-for="item in orderarr">
          <classlist :classobj="item"></classlist>
        </div>
      </div>
      <div class="ordercontent2" v-if="orderarr.length>0&&navtype2==1">
        <div v-for="(item,index) in orderarr" :key="index" :class="index%3==0?'orderitem21':'orderitem2'">
          <dbooklist :classobj="item"></dbooklist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import classlist from '@/components/my/classlist'
  import dbooklist from '@/components/my/dbooklist'
  import activeitem from '@/components/active/activeitem'
  export default {
    components: { topnav,classlist,dbooklist,activeitem},
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
        navarr2:[
          {type:0,val:'视频',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
          {type:1,val:'音频',color:'rgb(0,0,0)',border:'none'},
          {type:2,val:'电子书',color:'rgb(0,0,0)',border:'none'},
        ],
        activearr:[
          {img:'/static/images/activeimg.png',val:'远洋太古里',title:'传递理财小知识，通过增加理财知识，让自己更增加理财知识，让自己更',time:'05月20日结束',type:'1',id:'1',typeclass:'财商教育'},
          {img:'/static/images/activeimg.png',val:'远洋太古里',title:'传递理财小知识，通过增加理财知识，让自己更增加理财知识，让自己更',time:'05月20日结束',type:'1',id:'1',typeclass:'财商教育'},
          {img:'/static/images/activeimg.png',val:'远洋太古里',title:'传递理财小知识，通过增加理财知识，让自己更增加理财知识，让自己更',time:'05月20日结束',type:'1',id:'1',typeclass:'财商教育'},
        ],
        alllist:[
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:0,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
        ],
        orderarr:[],
        navtype:0,
        navtype2:0,
        topobj:{
          type:'',
          typeval:'',
          t_title:'消费送教育豆',
        },
      }
    },
    props: {},
    methods:{
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
        this.setorderlist(type)
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
      this.setorderlist(0)
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
  }
</style>
<style>
</style>
