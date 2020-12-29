<template>
  <div :class="itemobj.type==1?'gzitem':'gzitem2'">
    <div class="userimg"><img :src="itemobj.img"></div>
    <div class="userzwbox">
      <div class="username">{{itemobj.name}}</div>
      <div class="userzw">职称: {{itemobj.zc}}</div>
    </div>
    <div class="gzright" v-if="itemobj.type ==1">
      <div class="calebtn" v-if="itemobj.status==1">取消关注</div>
      <div class="togzbtn" v-if="itemobj.status==0">关注名师</div>
    </div>
    <div class="gzright2 iconfont icon-jiantouarrow487" v-if="itemobj.type ==2" @click="teachfn()"></div>
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
      teachfn(){
        window.location.href = '#/teacherdetail'
      },
      checknav(type){
        if(type ==1 ){
          window.location.href = '#/home'
        }else if(type ==2 ){
          window.location.href = '#/orderpage'
        }else if(type ==3 ){
          window.location.href = '#/home'
        }else if(type ==4 ){
          window.location.href = '#/home'
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
  .gzitem,.gzitem2{
    width: 100%;
    padding: 20px 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    .userimg{
      width: 50px;
      height: 50px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .userzwbox{
      width: 180px;
      flex: 1;
      margin: 0 10px;
      height: 50px;
      .username{
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-top: 5px;
      }
      .userzw{
        width: 100%;
        height: 20px;
        line-height: 20px;
      }
    }
    .gzright{
      width: 80px;
      height: 50px;
      .calebtn,.togzbtn{
        width: 100%;
        height: 30px;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        color: #ccc;
        border: 1px solid #ccc;
        margin-top: 10px;
      }
      .togzbtn{
        color: white;
        border: none;
        background-color: rgb(255,150,0);
      }
    }
    .gzright2{
      width: 80px;
      height: 50px;
      line-height: 50px;
      font-size: 23px;
      color: rgb(150,150,150);
      text-align: right;
    }
  }
  .gzitem2{
    border-bottom: none;
  }
</style>
