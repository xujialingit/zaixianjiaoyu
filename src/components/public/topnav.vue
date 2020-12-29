<template>
  <div class="t_container">
    <div class="titem">
      <div class="topitem iconfont icon-jiantou-copy" v-if="topobj.type != 1" @click="toback"></div>
    </div>
    <div class="titem">
      <div class="ttitle">{{topobj.t_title}}</div>
    </div>
    <div class="titem">
      <div class="t_text" v-if="topobj.type=='text'" style="text-align: right">{{topobj.typeval}}</div>
      <div class="t_text2" v-if="topobj.type=='check'">
        <div>{{topobj.typeval}}</div>
        <div class="checkall"></div>
      </div>
      <div class="t_text iconfont icon-gaojisousuo" v-if="topobj.type=='serch'" style="text-align: right"></div>
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
      topobj:{}
    },
    methods:{
      toback(){
        window.history.go(-1);
      }
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .t_container{
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    padding: 0 18px;
    font-size: 1.1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    .titem{
      width: 34%;
      height: 100%;
      .topitem{
        font-size: 23px;
      }
      .ttitle{
        text-align: center;
      }
      .t_text2{
        text-align: right;
        display: flex;
        flex-direction: row-reverse;
        .checkall{
          width: 19px;
          height: 19px;
          border: 1px solid #ccc;
          border-radius: 50%;
          margin-top: 13px;
          margin-right: 5px;
        }
      }
    }
  }
</style>
