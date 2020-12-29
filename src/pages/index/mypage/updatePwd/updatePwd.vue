<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="userinfo">
      <div v-for="item in inputarr" :class="item.border?'infoitem':'infoitem2'">
        <div class="inputbox">
          <input type="text" v-model="item.val" :placeholder="item.placher"/>
        </div>
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
        inputarr:[
          {val:'',type:1,border:true,placher:'请输入当前密码'},
          {val:'',type:2,border:true,placher:'请输入新密码'},
          {val:'',type:3,border:false,placher:'再次输入新密码'},
        ],
        topobj:{
          type:'text',
          typeval:'保存',
          t_title:'修改登录密码',
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
      margin-top: 10px;
      overflow: hidden;
      .infoitem,.infoitem2{
        width: 100%;
        height: 54px;
        line-height: 54px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        .inputbox{
          input{
            width: 100%;
            border: none;
            outline: none;
            color: rgb(255,150,0);
            font-size: 0.9rem;
          }
        }
      }
      .infoitem2{
        border-bottom: none;
      }
    }
  }
</style>
