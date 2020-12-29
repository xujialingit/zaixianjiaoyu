<template>
  <div class="container">
    <div class="content" :style="'max-height:'+ cheight+'px;'">
      <img src="/static/images/birdbg.jpg">
      <div class="loginbox">
        <div class="logininfo">
          <div class="infoitem">
            <div class="iconfont icon-huabanfuben username"></div>
            <div class="inputbox">
              <input type="number" v-model="phone" placeholder="请输入手机号码"/>
            </div>
          </div>
          <div class="infoitem" style="margin-bottom: 30px">
            <div class="iconfont icon-ziyuanxhdpi username"></div>
            <div class="inputbox">
              <input type="text" v-model="pwd" placeholder="请输入密码" />
            </div>
          </div>
          <btn :btnobj="btnobj" @btnfn="btnfn"></btn>
          <div class="zcbox" style="margin-top: 10px">
            <div class="zctext" @click="tozcfn">注册</div>
            <div class="wjmmtext" @click="forgotpwd">忘记密码?</div>
          </div>
        </div>
      </div>
    </div>
    <toast v-model="toastshow" :type="toatype" :time="1000">{{toasttext}}</toast>
  </div>
</template>

<script>
  import btn from '@/components/public/btn'
  import { Toast } from 'vux'
  export default {
    components: {btn,Toast},
    data() {
      return {
        phone:'',
        pwd:'',

        cheight:'',
        btnobj:{
          type:1,
          val:'登录',
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
        if(!this.phone){
          this.toastshow = true
          this.toasttext = '请输入号码'
          this.toatype = 'cancel'
          return false
        } else if(!this.yznum(this.phone)){
          this.toastshow = true
          this.toasttext = '号码有误'
          this.toatype = 'cancel'
          return false
        } else if(!this.pwd){
          this.toastshow = true
          this.toasttext = '请输入密码'
          this.toatype = 'cancel'
          return false
        }
        var data = {
          phone:this.phone,
          pwd:this.pwd,
        }
        localStorage.setItem('id2222',this.phone)
        localStorage.setItem('2312',this.phone)
        localStorage.setItem('idwewq2222',this.phone)
        localStorage.setItem('idsadas2222',this.phone)

        window.location.href = '#/home'
        var url = ''
        // this.axios.post(url,data).then(function (res) {
        //   console.log(res)
        // })
        console.log('登录')
      },
      tozcfn(){
        window.location.href = '#/registered'
      },
      forgotpwd(){
        window.location.href = '#/forgotPwd'
      }
    },
    mounted(){
    },
    created() {
      document.title='登录'
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
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-sizing: border-box;
        overflow: hidden;
        .logininfo{
          width: 100%;
          background-color: white;
          margin-top: 300px;
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
          .zcbox{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 0.9rem;
            .zctext{
              color:rgb(255,150,0);
            }
            .wjmmtext{
              color: rgb(150,150,150);
            }
          }
        }
      }
    }
  }
</style>
