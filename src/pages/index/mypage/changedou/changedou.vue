<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="userinfo">
      <div class="userid">1574855943</div>
      <div class="username">挥着辣条的男孩</div>
    </div>
    <div class="changecontent">
      <div class="doubox">
        <div  v-for="item in douarr" :class="item.check?'douitem':'douitem2'" @click="clickdou(item.id)">
          <div class="itembox">
            <div class="dounum">{{item.num}}</div>
            <div class="douimg"><img src="/static/images/douimg.png"></div>
          </div>
        </div>
        <div class="douitem2"><input v-model="inputdou" placeholder="自定义金额" type="number"/></div>
      </div>
      <div class="paynumbox"><span>应付金额:</span><span class="paynum">10MIC</span></div>
      <div class="paytextbox">
        <div class="ptextitem">1.MIC购买根据实时购买比例计价</div>
        <div class="ptextitem">2.MIC兑换成教育豆比例恒定x%</div>
        <div class="ptextitem">3.教育豆购买相关课程</div>
      </div>
    </div>
    <div class="savebtn">
      <btn :btnobj="btnobj" @btnfn="btnfn"></btn>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import btn from '@/components/public/btn'
  export default {
    components: { topnav,btn},
    data() {
      return {
        cheight:'',
        douarr:[
          {num:10,check:true,id:1},
          {num:50,check:false,id:2},
        ],
        btnobj:{
          type:1,
          val:'立即兑换',
        },
        inputdou:'',
        topobj:{
          type:'',
          typeval:'',
          t_title:'兑换教育豆',
        },
      }
    },
    props: {},
    methods:{
      btnfn(){

      },
      clickdou(id){
        for(let i = 0;i<this.douarr.length;i++){
          if(id==this.douarr[i].id){
            this.douarr[i].check = true
          }else {
            this.douarr[i].check = false
          }
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .userinfo{
      margin: 15px 0;
      background-color: #fff;
      padding: 15px 4%;
      box-sizing: border-box;
      width: 100%;
      .userid{
        font-size: 1.5rem;
      }
      .username{
        color: rgb(150,150,150);
        margin-top: 5px;
      }
    }
    .changecontent{
      width: 100%;
      flex: 1;
      padding: 15px 4%;
      box-sizing: border-box;
      background-color: #fff;
      .doubox{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .douitem,.douitem2{
          width: 30%;
          height: 50px;
          background-color: rgb(255,150,0);
          border: 1px solid rgb(255,150,0);
          color: white;
          display: flex;
          flex-direction: row;
          justify-content: center;
          border-radius: 10px;
          .itembox{
            height: 24px;
            line-height: 24px;
            margin-top: 13px;
            display: flex;
            flex-direction: row;
            text-align: center;
            .douimg{
              width: 24px;
              margin-left: 5px;
              height: 24px;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .douitem2{
          background-color: #fff;
          color: black;
          border: 1px solid #ccc;
          input{
            width: 90%;
            border: none;
            outline: none;
            text-align: center;
            height: 40px;
            line-height: 40px;
            margin-top: 5px;
          }
        }
      }
      .paynumbox{
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin: 15px 0;
        font-size: 1.1rem;
        .paynum{
          margin-left: 5px;
          color: rgb(255,150,0);
        }
      }
      .paytextbox{
        width: 100%;
        margin-bottom: 20px;
        color: rgb(150,150,150);
        .ptextitem{
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
