<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="signbox">
      <div v-for="(item,index) in signarr" :key="index" :class="index==0?'signitem2':'signitem'">
        <div class="userimg"><img :src="item.img"></div>
        <div class="signname">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  export default {
    components: {topnav},
    data() {
      return {
        cheight:'',
        signarr:[
          {img:'/static/images/tx.jpg',name:'吴欢',id:1},
          {img:'/static/images/tx.jpg',name:'吴欢',id:1},
          {img:'/static/images/tx.jpg',name:'吴欢',id:1},
          {img:'/static/images/tx.jpg',name:'吴欢',id:1},
        ],
        topobj:{
          type:'',
          typeval:'',
          t_title:'已经报名',
        }
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
    box-sizing: border-box;
    background-color: rgb(245,245,245);
    .signbox{
      width: 100%;
      background-color: #fff;
      padding-left: 4%;
      .signitem,.signitem2{
        width: 100%;
        border-top: 1px solid #eee;
        padding: 10px 0;
        padding-right: 4%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .userimg{
          width: 45px;
          height: 45px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .signname{
          height: 45px;
          line-height: 45px;
          margin-left: 15px;
          font-size: 1rem;
        }
      }
      .signitem2{
        border-top: none;
      }
    }
  }
</style>
