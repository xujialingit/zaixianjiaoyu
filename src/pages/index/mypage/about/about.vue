<template>
  <div class="container" >
    <topnav :topobj="topobj"></topnav>
    <div class="aboutval">关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线关于笨鸟在线</div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  export default {
    components: {topnav},
    data() {
      return {
        topobj:{
          type:'',
          typeval:'',
          t_title:'关于笨鸟在线',
        }
      }
    },
    props: {},
    methods:{
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .aboutval{
      margin-top: 30px;
      width: 100%;
      padding: 0 4%;
      box-sizing: border-box;
    }
  }
</style>
