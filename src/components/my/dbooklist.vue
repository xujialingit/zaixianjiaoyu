<template>
    <div class="bookinfo" @click="todetail(1)">
      <div class="bookimg">
        <img src="/static/images/bookimg.png">
      </div>
      <div class="bookval">真实的自我表达真实的自我表达</div>
      <div class="doubox">
        <div class="douimg"><img src="/static/images/douimg.png"></div>
        <div class="dounum">200</div>
      </div>
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
      classobj:{}
    },
    methods:{
      todetail(){
        window.location.href = '#/classdetail?type=1'
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
  .bookinfo{
    width: 100%;
    box-sizing: border-box;
    .bookimg{
      width: 100%;
      img{
        width: 100%;
        border-radius: 5px;
      }
    }
    .bookval{
      width: 100%;
      height: 16px;
      line-height: 16px;
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 5px;
    }
    .doubox{
      height: 23px;
      line-height: 23px;
      width: 100%;
      display: flex;
      .douimg{
        width: 23px;
        img{
          width: 100%;
        }
      }
      .dounum{
        color: red;
        font-size: 1rem;
        margin-left: 5px;
      }
    }
  }

</style>
