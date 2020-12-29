<template>
    <div class="activeitem">
      <div class="activeimg">
        <img :src="itemobj.img">
        <div class="imgtype">{{itemobj.typeclass}}</div>
      </div>
      <div class="itemright">
        <div class="itemtitle">{{itemobj.title}}</div>
        <div class="itemval">{{itemobj.val}}</div>
        <div class="itemdate">{{itemobj.time}}</div>
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
      itemobj:{}
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
.activeitem{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .activeimg{
    width: 150px;
    height: 83px;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .imgtype{
      display: inline-block;
      padding: 0 10px;
      box-sizing: border-box;
      text-align: center;
      position: absolute;
      top: 5px;
      left: 0;
      border-radius: 0 9px 9px 0;
      background-color: rgb(52,53,57);
      color: white;
      height: 18px;
      line-height: 18px;
    }
  }
  .itemright{
    flex: 1;
    height: 83px;
    margin-left: 10px;
    position: relative;
    .itemtitle{
      width: 100%;
      font-size: 1.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; //行数
      -webkit-box-orient: vertical;
    }
    .itemval{
      height: 20px;
      line-height: 20px;
    }
    .itemdate{
      height: 20px;
      line-height: 20px;
      color: rgb(150,150,150);
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
