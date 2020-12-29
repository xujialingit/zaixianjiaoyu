<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="top_notice">更换手机号，下次登录使用新的手机号，当前绑定手机号为:18483613963</div>
    <div class="userinfo">
      <div class="infoitem">
        <div class="iconfont icon-shouji username"></div>
        <div class="inputbox">
          <input type="number" v-model="phone" placeholder="输入新手机号"/>
        </div>
      </div>
      <div class="infoitem" style="border-bottom: none">
        <div class="iconfont icon-yanzhengma username"></div>
        <div class="inputbox">
          <input type="text" v-model="code" placeholder="请输入验证码" />
        </div>
        <div class="getcode" @click="getcode">{{count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  export default {
    components: {topnav},
    data() {
      return {
        cheight:'',
        count:'获取验证码',
        phone:'',
        code:'',
        topobj:{
          type:'text',
          typeval:'保存',
          t_title:'修改手机号',
        }
      }
    },
    props: {},
    methods:{
      getcode(){

      },
      rightclick(obj){
        var type = obj.type
        if(type == 1){
          window.location.href = '#/home'
        }else if(type ==2){

        }
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
  .container{
    width: 100%;
    overflow: hidden;
    background-color: rgb(245,245,245);
    box-sizing: border-box;
    .top_notice{
      width: 100%;
      padding: 10px 4%;
      box-sizing: border-box;
      color: rgb(150,150,150);
    }
    .userinfo{
      width: 100%;
      padding: 0 4%;
      box-sizing: border-box;
      background-color: #fff;
      overflow: hidden;
      .infoitem{
        width: 100%;
        height: 54px;
        line-height: 54px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        .username{
          color: rgb(187,187,187);
          font-size: 18px;
        }
        .inputbox{
          margin-left: 10px;
          flex: 1;
          input{
            width: 100%;
            border: none;
            outline: none;
            color: rgb(255,150,0);
            font-size: 0.9rem;
          }
        }
        .getcode{
          width: 70px;
          text-align: right;
          color:rgb(255,150,0);
        }
      }
    }
  }
</style>
