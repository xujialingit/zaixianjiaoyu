<template>
    <div :class="infobox.border?'infoitem':'infoitem2'">
      <div class="itemname">{{infobox.name}}</div>
      <div class="itemimg">{{infobox.val}}</div>
      <div class="itemright">
        <div v-if="infobox.right" class="itemright iconfont icon-jiantouarrow487" @click="rightclick(infobox.type)"></div>
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
      infobox:{}
    },
    methods:{
      rightclick(type){
        this.$emit('rightclick',{type:type})
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
  .infoitem,.infoitem2{
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
      color:rgb(150,150,150);
      img{
        width: 45px;
        height: 100%;
        border-radius: 10px;
      }
    }
    .itemname{
      width: 120px;
    }
    .itemright{
      width: 25px;
      text-align: right;
      font-size: 23px;
      color: rgb(150,150,150);
    }
  }

  .infoitem2{
    border-bottom: none;
  }
</style>
