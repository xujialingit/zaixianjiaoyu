<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="userinfo">
      <div class="infoitem">
        <div class="itemname">头像</div>
        <div class="itemimg"><img src="/static/images/tx.jpg"></div>
        <div class="itemright iconfont icon-jiantouarrow487"></div>
      </div>
      <infoitem v-for="(item,index) in infobox" :key="index" :infobox="item" @rightclick="rightclick"></infoitem>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import infoitem from '@/components/my/infoitem'
  export default {
    components: {topnav,infoitem},
    data() {
      return {
        cheight:'',
        topobj:{
          type:'',
          typeval:'',
          t_title:'个人信息',
        },
        infobox:[
          {name:'昵称',val:'挥着辣条的男孩',border:true,type:1,right:true},
          {name:'电话号码',val:'18483613963',border:true,type:2,right:true},
          {name:'钱包地址',val:'16487684',border:false,type:3,right:false},
        ]
      }
    },
    props: {},
    methods:{
      rightclick(obj){
        var type = obj.type
        if(type == 1){
          window.location.href='#/editName'
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
    box-sizing: border-box;
    .userinfo{
      width: 100%;
      padding-left: 4%;
      box-sizing: border-box;
      background-color: #fff;
      .infoitem{
        width: 100%;
        border-bottom: 1px solid #eee;
        padding: 6px 0;
        padding-right: 4%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        line-height: 45px;
        .itemimg{
          flex: 1;
          height: 45px;
          text-align: right;
          img{
            width: 45px;
            height: 100%;
            border-radius: 10px;
          }
        }
        .itemname{
          width: 80px;

          font-size: 1.1rem;
        }
        .itemright{
          width: 25px;
          text-align: right;
          font-size: 23px;
          color: rgb(150,150,150);
        }
      }
    }
  }
</style>
