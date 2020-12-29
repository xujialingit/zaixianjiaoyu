<template>
    <div class="orderinfo">
      <div class="ordertop" v-if="orderobj.type==1">
        <div class="ordernum">订单编号:{{orderobj.orderid}}</div>
        <div class="orderstatus2" v-if="orderobj.status==1">等待买家付款</div>
        <div class="orderstatus" v-if="orderobj.status==2">已完成</div>
      </div>
      <div class="ordertop" v-if="orderobj.type==2">
        <div class="orderstatus2" v-if="orderobj.status==1">等待买家付款</div>
        <div class="orderstatus" v-if="orderobj.status==2">订单已完成</div>
        <div class="ordernum">订单编号:{{orderobj.orderid}}</div>
      </div>
      <div class="orderunder">
        <div class="orderimg"><img :src="orderobj.img"></div>
        <div class="c_orderbox">
          <div class="c_orderval">{{orderobj.orderval}}</div>
          <div class="keshibox">
            <div class="keshi">共{{orderobj.keshi}}课时</div>
            <div class="doudounum" v-if="orderobj.type==1">
              <div class="dounum">{{orderobj.dounum}}</div>
              <div class="douimg"><img src="/static/images/douimg.png"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="orderbtn" v-if="orderobj.type==1">
        <div class="caleorder" v-if="orderobj.status==1">取消订单</div>
        <div class="payorder" v-if="orderobj.status==1">付款</div>
        <div class="replyorder" v-if="orderobj.status==2" @click="replyfn()">评价</div>
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
      orderobj:{}
    },
    methods:{
      replyfn(){
        this.$emit('replyfn')
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
  .orderinfo{
    width: 100%;
    background-color: #fff;
    padding: 16px 4%;
    box-sizing: border-box;
    .ordertop{
      width: 100%;
      height: 20px;
      line-height: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding-bottom: 15px;
      .ordernum{
        color: rgb(150,150,150);
      }
      .orderstatus2{
        color: rgb(255,150,0);
      }
    }
    .orderunder{
      margin-top: 15px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .orderimg{
        width: 120px;
        height: 70px;
        img{
          width: 100%;
        }
      }
      .c_orderbox{
        flex: 1;
        margin-left: 4%;
        box-sizing: border-box;
        .c_orderval{
          font-size: 1rem;
        }
        .keshibox{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 5px;
          height: 25px;
          line-height: 25px;
          .keshi{
            width: 70px;
            color: rgb(150,150,150);
          }
          .doudounum{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .dounum{
              font-size: 1.5rem;
              color: rgb(255,150,0);
            }
            .douimg{
              width: 25px;
              height: 25px;
              margin-left: 8px;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .orderbtn{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-top: 10px;
      .caleorder,.payorder,.replyorder{
        display:inline-block;
        padding: 0 10px;
        border: 1px solid rgb(46,174,211);
        color: rgb(46,174,211);
        height: 30px;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
      }
      .payorder,.replyorder{
        color: rgb(255,150,0);
        border: 1px solid rgb(255,150,0);
        margin-left: 10px;
      }
    }
  }

</style>
