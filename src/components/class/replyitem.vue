<template>
    <div class="infoitem">
      <div class="infoimg"><img src="/static/images/tx.jpg"></div>
      <div class="itemright">
        <div class="username">挥着辣条的男孩</div>
        <div class="timebox">
          <div class="timeleft">学习12课时时评论</div>
          <div class="timeright">2019-04-24</div>
        </div>
        <div class="infoval">非常好，听着比看着的更有趣非常好，听着比看着的更有趣非常好，听着比看着的更有趣</div>
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
      pagetype:{},
      muluobj:{}
    },
    methods:{
      openfn(id){
        // this.$emit('openfn',{id:id})
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
  .infoitem{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 0;
    box-sizing: border-box;
    .infoimg{
      width: 40px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .itemright{
      flex: 1;
      margin-left: 15px;
      padding: 5px 0;
      box-sizing: border-box;
      .timebox{
        margin-top: 5px;
        margin-bottom: 10px;
        color: rgb(150,150,150);
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .timeright{
          width: 120px;
          text-align: right;
        }
      }
      .infoval{
        width: 100%;
      }
    }
  }

</style>
