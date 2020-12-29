<template>
    <div class="infoitem">
      <div class="itemtop">
        <div class="itemname">{{muluobj.title}}</div>
        <div :class="muluobj.open?'itemright iconfont icon-jiantou-copy-copy-copy':'itemright iconfont icon-jiantou-copy-copy'" @click="muluobj.open = !muluobj.open"></div>
      </div>
      <div class="itemunder" v-if="muluobj.open">
        <div class="underitem" v-for="(item,index) in muluobj.listarr" :key="index">
          <div class="typeicon">
            <span v-if="pagetype==0">视频</span>
            <span v-if="pagetype==1">电子书</span>
            <span v-if="pagetype==2">音频</span>
          </div>
          <div class="itemname">{{index+1}}.{{item.name}}</div>
<!--          <div class="itemright iconfont icon-jiantouarrow487"></div>-->
          <div class="itemright" v-if="item.status==1">
            <span v-if="pagetype==0">可试看</span>
            <span v-if="pagetype==1">可试读</span>
            <span v-if="pagetype==2">可试听</span>
          </div>
          <div class="itemright2 iconfont icon-ziyuanxhdpi" v-if="item.status==0"></div>
        </div>
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
    box-sizing: border-box;
    .itemtop{
      width: 100%;
      padding: 0px 4%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-sizing: border-box;
      height: 53px;
      line-height: 53px;
    }
    .itemunder{
      background-color: #fff;
      padding: 0 4%;
      box-sizing: border-box;
      .underitem{
        width: 100%;
        height: 53px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        line-height: 53px;
        .typeicon{
          width: 50px;
          margin-right: 15px;
          text-align: center;
          height: 23px;
          margin-top: 15px;
          border-radius: 3px;
          line-height: 23px;
          border: 1px solid rgb(150,150,150);
          color: rgb(150,150,150);
        }
        .itemname{
          flex: 1;
        }
        .itemright,.itemright2{
          width: 60px;
          text-align: right;
          color: rgb(255,150,0);
        }
        .itemright2{
          color: rgb(150,150,150);
        }
      }
    }
  }

</style>
