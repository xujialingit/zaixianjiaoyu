<template>
    <div class="activeinfo">
      <div class="infotitle">{{activeobj.title}}</div>
      <div class="infoval">{{activeobj.val}}</div>
      <div class="infoimg"><img :src="activeobj.img"></div>
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        cheight:'',
      }
    },
    props: {
      activeobj:{}
    },
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
  .activeinfo{
    width: 100%;
    background-color: #fff;
    padding: 16px 4%;
    box-sizing: border-box;
    border-radius: 5px;
    .infotitle{
      width: 100%;
      padding: 5px 0;
      box-sizing: border-box;
      font-size: 1.1rem;
    }
    .infoval{
      width: 100%;
      padding: 5px 0;
      box-sizing: border-box;
      color: rgb(150,150,150);
    }
    .infoimg{
      width: 100%;
      margin-top: 10px;
      img{
        width: 100%;
      }
    }
  }

</style>
