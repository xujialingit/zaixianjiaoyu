<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="ordercontent" v-if="orderarr.length>0">
      <div class="orderitem" v-for="item in orderarr">
        <div class="tradtime">2019年5月11日 15:54</div>
        <orderlist :orderobj="item"></orderlist>
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
        orderarr:[
          {type:'2',orderid:'1646843168463',status:1,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:2,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
          {type:'2',orderid:'1646843168463',status:1,img:'/static/images/orderimg.png',orderval:'北大学霸给8-18岁孩子成长悄悄话',keshi:'20',dounum:'66'},
        ],
        topobj:{
          type:'',
          typeval:'',
          t_title:'交易消息',
        },
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
        .tradtime{
          width: 150px;
          height: 20px;
          line-height: 20px;
          margin: 0 auto;
          margin-bottom: 10px;
          text-align: center;
          border-radius: 5px;
          background-color: rgb(208,208,208);
          color: white;
        }
      }
    }
  }
</style>
