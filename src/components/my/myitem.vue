<template>
  <div :class="itemobj.border?'myitem':'myitem2'">
    <div :class="'itemicon iconfont '+itemobj.icon"></div>
    <div class="itemval">{{itemobj.val}}</div>
    <div class="itemright iconfont icon-jiantouarrow487" @click="checknav(itemobj.type)"></div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
      }
    },
    props: {
      itemobj:{}
    },
    methods:{
      checknav(type){
        if(type ==1 ){
          window.location.href = '#/home'
        }else if(type ==2 ){
          window.location.href = '#/orderpage'
        }else if(type ==3 ){
          window.location.href = '#/myclass'
        }else if(type ==4 ){
          window.location.href = '#/mycollection'
        }else if(type ==5 ){
          window.location.href = '#/myattention'
        }else if(type ==6 ){
          window.location.href = '#/setpage'
        }
      }
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .myitem,.myitem2{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    line-height: 59px;
    .itemicon{
      width: 40px;
      height: 59px;
      color:rgb(255,150,0);
      font-size: 23px;
    }
    .itemval{
      height: 59px;
      flex: 1;
      font-size: 1.1rem;
    }
    .itemright{
      width: 40px;
      height: 59px;
      text-align: right;
      color: rgb(150,150,150);
      font-size: 20px;
    }
  }
  .myitem2{
    border-bottom: none;
  }
</style>
