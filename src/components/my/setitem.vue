<template>
    <div :class="infobox.border?'infoitem':'infoitem2'" :style="'margin-bottom:'+infobox.margin " @click="itemfn(infobox.type)">
      <div class="itemname">{{infobox.name}}</div>
      <div class="itemimg" v-if="!infobox.right" :style="'color:'+infobox.color ">{{infobox.val}}</div>
      <div class="itemright" v-if="infobox.right">
        <div class="itemright iconfont icon-jiantouarrow487" @click="clickright(infobox.type)"></div>
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
      clickright(type){
        this.$emit('clickright',{type:type})
      },
      itemfn(type){
        this.$emit('itemfn',{type:type})
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
    padding: 6px 4%;
    box-sizing: border-box;
    background-color: #fff;
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
      width: 80px;
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
