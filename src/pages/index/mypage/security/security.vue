<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="userinfo">
      <infoitem v-for="(item,index) in infobox" :key="index" :infobox="item" @rightclick="rightclick"></infoitem>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import infoitem from '@/components/my/infoitem'
  export default {
    components: {topnav,infoitem},
    data() {
      return {
        cheight:'',
        topobj:{
          type:'',
          typeval:'',
          t_title:'账户与安全',
        },
        infobox:[
          {name:'修改手机号',val:'18483613963',border:true,type:1,right:true},
          {name:'修改登录密码',val:'',border:false,type:2,right:true},
        ]
      }
    },
    props: {},
    methods:{
      rightclick(obj){
        var type = obj.type
        if(type == 1){
          window.location.href = '#/updatePhone'
        }else if(type ==2){
          window.location.href = '#/updatePwd'
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
    .userinfo{
      width: 100%;
      padding-left: 4%;
      box-sizing: border-box;
      background-color: #fff;
    }
  }
</style>
