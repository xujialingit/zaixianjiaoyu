<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="classlist">
      <div class="classitem" v-for="item in classarr">
        <div :class="item.check?'itemckeck2':'itemckeck'" @click="checkitem(item)"><span class="iconfont icon-check"></span></div>
        <div class="itemname">{{item.val}}</div>
      </div>
    </div>
    <div class="bottombox">
      <div class="moneybox">
        <div class="classhour">已选20课时 需付费20课时</div>
        <div class="paydoubox">
          <div class="dounum">66</div>
          <div class="douimg"><img src="/static/images/douimg.png"></div>
        </div>
      </div>
      <div class="paybtn">
        <btn :btnobj="btnobj" @btnfn="btnfn"></btn>
      </div>
    </div>
  </div>
</template>

<script>
  import btn from '@/components/public/btn'
  import topnav from '@/components/public/topnav'
  export default {
    components: { topnav,btn},
    data() {
      return {
        cheight:'',
        orderarr:[],
        navtype:0,
        classarr:[
          {check:false,id:1,val:'孙子兵法三十六计'},
          {check:true,id:2,val:'孙子兵法三十六计'},
          {check:true,id:3,val:'孙子兵法三十六计'},
          {check:false,id:4,val:'孙子兵法三十六计'},
        ],
        btnobj:{
          type:2,
          val:'去结算',
        },
        topobj:{
          type:'check',
          typeval:'全选',
          t_title:'我的课程',
        },
      }
    },
    props: {},
    methods:{
      btnfn(){},
      checkitem(item){
        item.check = !item.check
        console.log(this.classarr)
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
    .classlist{
      width: 100%;
      padding: 10px 4%;
      box-sizing: border-box;
      background-color: #fff;
      .classitem{
        width: 100%;
        height: 56px;
        padding: 18px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .itemckeck,.itemckeck2{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #fff;
          color: white;
          text-align: center;
          line-height: 20px;
          border: 1px solid #ccc;
        }
        .itemckeck2{
          background-color: rgb(255,150,0);
          border: 1px solid rgb(255,150,0);
        }
        .itemname{
          flex: 1;
          width: 22px;
          line-height: 22px;
          height: 22px;
          margin-left: 15px;
        }
      }
    }
    .bottombox{
      width: 100%;
      border-top: 1px solid #eee;
      background-color: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      .moneybox{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 43px;
        line-height: 43px;
        padding: 0 4%;
        box-sizing: border-box;
        .classhour{
          height: 43px;
          line-height: 43px;
          flex: 1;
        }
        .paydoubox{
          width: 120px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          height: 43px;
          .dounum{
            font-size: 1.1rem;
            color: red;
          }
          .douimg{
            width: 23px;
            height: 23px;
            margin-top: 7px;
            margin-left: 7px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
