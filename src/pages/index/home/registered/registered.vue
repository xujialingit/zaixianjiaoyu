<template>
  <div class="container">
    <div class="content" :style="'max-height:'+ cheight+'px;'">
      <topnav :topobj="topobj"></topnav>
      <div class="loginbox">
        <div class="logininfo">
          <div class="infoitem">
            <div class="iconfont icon-shouji username"></div>
            <div class="inputbox">
              <input type="number" v-model="phone" placeholder="请输入手机号码"/>
            </div>
          </div>
          <div class="infoitem">
            <div class="iconfont icon-yanzhengma username"></div>
            <div class="inputbox">
              <input type="text" v-model="code" placeholder="请输入验证码" />
            </div>
            <div class="getcode" @click="getcode">{{count}}</div>
          </div>
          <div class="infoitem">
            <div class="iconfont icon-ziyuanxhdpi username"></div>
            <div class="inputbox">
              <input type="text" v-model="pwd" placeholder="请输入新密码" />
            </div>
          </div>
          <div class="infoitem" style="margin-bottom: 30px">
            <div class="iconfont icon-ziyuanxhdpi username"></div>
            <div class="inputbox">
              <input type="text" v-model="pwd2" placeholder="请输入新密码" />
            </div>
          </div>
          <btn :btnobj="btnobj" @btnfn="btnfn"></btn>
          <div class="xieyival" style="margin-top: 10px">注册即表示同意<span style="color:rgb(255,150,0); ">《笨鸟在线用户协议》</span></div>
        </div>
      </div>
    </div>
    <toast v-model="toastshow" :type="toatype" :time="1000">{{toasttext}}</toast>
  </div>
</template>

<script>
  import btn from '@/components/public/btn'
  import topnav from '@/components/public/topnav'
  import { Toast } from 'vux'
  export default {
    components: {btn,topnav,Toast},
    data() {
      return {
        phone:'',
        code:'',
        pwd:'',
        pwd2:'',

        cheight:'',
        count:'获取验证码',
        timer: null,
        canlickyzm:true,
        btnobj:{
          type:1,
          val:'注册',
        },
        topobj:{
          type:'',
          typeval:'保存',
          t_title:'注册',
        },
        //toast提示
        toastshow:false,
        toasttext:'成功',
        toatype:'success',
      }
    },
    props: {},
    methods:{
      yznum(num){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(num){
          if (!myreg.test(num)) {
            return false;
          }else {
            return true
          }
        }else {
          return false;
        }
      },
      btnfn(){
        //验证手机号
        if(!this.phone){
          this.toastshow = true
          this.toasttext = '请输入号码'
          this.toatype = 'cancel'
          return false
        }else if(!this.yznum(this.phone)){
          this.toastshow = true
          this.toasttext = '号码有误'
          this.toatype = 'cancel'
          return false
        }
        //验证验证码
        if(!this.code){
          this.toastshow = true
          this.toasttext = '请输入验证码'
          this.toatype = 'cancel'
          return false
        }
        //验证密码
        if(!this.pwd || !this.pwd2){
          this.toastshow = true
          this.toasttext = '请输入密码'
          this.toatype = 'cancel'
          return false
        }
        if(this.pwd != this.pwd2){
          this.toastshow = true
          this.toasttext = '两次密码不一致'
          this.toatype = 'cancel'
          return false
        }
        var data = {
          phone:this.phone,
          code:this.code,
          pwd:this.pwd,
          pwd2:this.pwd2,
        }
        var url = ''
        this.axios.post(url,data).then(function (res) {
          console.log(res)
        })
      },
      getcode(){
        if(!this.canlickyzm){
          return false
        }else {
          this.canlickyzm = false
          this.gettimer()
          var url = ''
          var data = ''
          this.axios.post(url,data).then(function (res) {
            console.log(res)
          })
        }
      },
      gettimer(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.count = '获取验证码'
              this.canlickyzm = true
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
    },
    mounted(){
    },
    created() {
      document.title='注册'
      this.cheight = this.docheight
      console.log(this.cheight)
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .content{
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      img{
        width: 100%;
      }
      .loginbox{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
        .logininfo{
          width: 100%;
          background-color: white;
          margin-top: 20px;
          padding: 10px 10%;
          box-sizing: border-box;
          .infoitem{
            width: 100%;
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            margin-top: 18px;
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
          .loginbtn{
            width: 100%;
            background-color: rgb(255,150,0);
            color: white;
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 0.9rem;
            margin: 30px 0 10px;
            border-radius: 5px;
          }
          .xieyival{
            text-align: center;
            margin-top: 20px;
          }
        }
      }
    }
  }
</style>
