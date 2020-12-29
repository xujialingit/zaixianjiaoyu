<template>
  <div class="container">
    <div :class="btnobj.type==1?'loginbtn':'loginbtn2'" @click="btnfn">{{btnobj.val}}</div>
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
      btnobj:{}
    },
    methods:{
      btnfn(){
        this.$emit('btnfn')
      }
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
    height: 100%;
    overflow: hidden;
    .loginbtn,.loginbtn2{
      width: 100%;
      background-color: rgb(255,150,0);
      color: white;
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 0.9rem;
      border-radius: 5px;
    }
    .loginbtn2{
      margin: 0;
      border-radius: 0px;
    }
  }
</style>
