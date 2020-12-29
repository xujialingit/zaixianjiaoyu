<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="ordercontent" v-if="activearr.length>0">
      <div class="orderitem" v-for="item in activearr">
        <div class="tradtime">2019年5月11日 15:54</div>
        <noticelist :noticeobj="item"></noticelist>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import noticelist from '@/components/my/noticelist'
  export default {
    components: { topnav,noticelist},
    data() {
      return {
        cheight:'',
        activearr:[1,1,1],
        topobj:{
          type:'',
          typeval:'',
          t_title:'通知消息',
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
