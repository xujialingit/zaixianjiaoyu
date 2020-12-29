<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="userinfo">
      <setitem v-for="(item,index) in infobox" :key="index" :infobox="item" @clickright="clickright" @itemfn="itemfn"></setitem>
    </div>
    <div class="loginout">
      <btn :btnobj="btnobj" @btnfn="btnfn"></btn>
    </div>
    <confirm
      v-model="showalt"
      title="提示"
      @on-confirm="onConfirm">
      <p style="text-align:center;">确定要清楚缓存吗?</p>
    </confirm>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import btn from '@/components/public/btn'
  import setitem from '@/components/my/setitem'
  import { Confirm } from 'vux'
  export default {
    components: {topnav,setitem,btn,Confirm},
    data() {
      return {
        showalt:false,
        cheight:'',
        topobj:{
          type:'',
          typeval:'',
          t_title:'设置',
        },
        btnobj:{
          type:2,
          val:'退出登录',
        },
        infobox:[
          {name:'账户安全',val:'',border:false,type:1,right:true,margin:'10px',color:'rgb(20,20,20)'},
          {name:'清除缓存',val:'16.78MB',border:true,type:2,right:false,margin:'0px',color:'rgb(255,150,0)'},
          {name:'关于',val:'',border:false,type:3,right:true,margin:'10px',color:'rgb(20,20,20)'},
          {name:'当前版本',val:'1.02',border:true,type:4,right:false,margin:'0px',color:'rgb(20,20,20)'},
          {name:'客服热线',val:'4000-1234-123',border:true,type:5,right:false,margin:'0px',color:'rgb(255,150,0)'},
        ]
      }
    },
    props: {},
    methods:{
      itemfn(obj){
        if(obj.type == 2){
          this.showalt =true
        }
      },
      onConfirm(){

      },
      btnfn(){

      },
      clickright(obj){
        var type = obj.type
        if(type == 1){
          window.location.href = '#/security'
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
    .userinfo {
      width: 100%;
      box-sizing: border-box;
    }
    .loginout{
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>
<style>
  .weui-dialog__btn_primary{
    color:rgb(255,150,0)!important;
  }
</style>
