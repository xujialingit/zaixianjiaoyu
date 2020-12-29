<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="navbox">
      <div class="navitem" v-for="item in navarr" :style="'color: '+item.color+';border-bottom:'+item.border" @click="ckecknav(item.type)">{{item.val}}</div>
    </div>
    <div class="ordercontent" v-if="orderarr.length>0">
      <div class="orderitem" v-for="item in orderarr">
        <orderlist :orderobj="item" @replyfn="replyfn"></orderlist>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import orderlist from '@/components/my/orderlist'
  export default {
    components: { topnav,orderlist},
    data() {
      return {
        cheight:'',
        navarr:[
          {type:0,val:'全部订单',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
          {type:1,val:'代付款',color:'rgb(0,0,0)',border:'none'},
          {type:2,val:'待评价',color:'rgb(0,0,0)',border:'none'},
        ],
        alllist:[
          {type:'1',orderid:'1646843168463',status:1,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:1,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:1,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'1',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
        ],
        orderarr:[],
        topobj:{
          type:'',
          typeval:'',
          t_title:'我的订单',
        },
      }
    },
    props: {},
    methods:{
      replyfn(){
        window.location.href = '#/replypage'
      },
      ckecknav(type){
        this.setorderlist(type)
        if(type==0){
          this.navarr = [
            {type:0,val:'全部订单',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
            {type:1,val:'代付款',color:'rgb(0,0,0)',border:'none'},
            {type:2,val:'待评价',color:'rgb(0,0,0)',border:'none'},
          ]
        }else if(type==1){
          this.navarr = [
            {type:0,val:'全部订单',color:'rgb(0,0,0)',border:'none'},
            {type:1,val:'代付款',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
            {type:2,val:'待评价',color:'rgb(0,0,0)',border:'none'},
          ]
        }else if(type==2){
          this.navarr = [
            {type:0,val:'全部订单',color:'rgb(0,0,0)',border:'none'},
            {type:1,val:'代付款',color:'rgb(0,0,0)',border:'none'},
            {type:2,val:'待评价',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)'},
          ]
        }
      },
      setorderlist(type){
        this.orderarr = []
        if(type ==0){
          this.orderarr = this.alllist
        }else{
          for(let i = 0;i<this.alllist.length;i++){
            if(this.alllist[i].status == type){
              this.orderarr.push(this.alllist[i])
            }
          }
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
    .ordercontent{
      width: 100%;
      overflow: hidden;
      padding: 0 4%;
      box-sizing: border-box;
      .orderitem{
        width: 100%;
        margin-top: 20px;
      }
    }
  }
</style>
