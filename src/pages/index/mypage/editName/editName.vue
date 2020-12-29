<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="userinfo">
      <div class="infoitem">
          <div class="xinput">
            <input placeholder="请输入昵称" v-model="nickname"></input>
          </div>
          <div class="delicon iconfont icon-shanchu1" v-if="nickname!=''" @click="clearfn"></div>
      </div>
    </div>
    <div class="nicknotice">请输入2~8个字符</div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import { Toast } from 'vux'
  export default {
    components: {topnav},
    data() {
      return {
        cheight:'',
        nickname:'',
        topobj:{
          type:'text',
          typeval:'保存',
          t_title:'编辑昵称',
        }
      }
    },
    props: {},
    methods:{
      clearfn(){
        this.nickname = ''
      },
    },
    mounted(){
    },
    created() {
      this.cheight = this.docheight
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    overflow: hidden;
    background-color: rgb(245,245,245);
    box-sizing: border-box;
    .userinfo{
      width: 100%;
      padding: 0 4%;
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 10px;
      overflow: hidden;
      .infoitem{
        width: 100%;
        height: 54px;
        line-height: 54px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        box-sizing: border-box;
        .delicon{
          width: 30px;
          text-align: right;
          color: rgb(150,150,150);
        }
        .xinput{
          flex: 1;
          input{
            width: 92%;
            border: none;
            outline: none;
          }
        }
      }
    }
    .nicknotice{
      width: 100%;
      padding: 10px 4%;
      box-sizing: border-box;
      color: rgb(150,150,150);
    }
  }
</style>
