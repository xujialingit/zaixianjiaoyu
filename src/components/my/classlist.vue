<template>
    <div class="orderinfo" @click="todetail(classobj.status)">
      <div class="orderunder">
        <div class="orderimg"><img :src="classobj.img"></div>
        <div class="c_orderbox">
          <div class="c_orderval" v-if="classobj.status==2">
            <div class="typebox">音频</div>
            {{classobj.orderval}}
          </div>
          <div class="c_orderval" v-if="classobj.status==0">
            <div class="typebox2">视频</div>
            {{classobj.orderval}}
          </div>
          <div class="c_content">{{classobj.orderval}}</div>
          <div class="keshibox">
            <div class="keshi">
              <div class="erjiicon iconfont icon-erji" v-if="classobj.status==2"></div>
              <div class="erjiicon iconfont icon-yanjing" v-if="classobj.status==0"></div>
              <div>80人</div>
            </div>
            <div class="doudounum" v-if="classobj.type==2">
              <div class="dounum">{{classobj.dounum}}</div>
              <div class="douimg"><img src="/static/images/douimg.png"></div>
            </div>
            <div class="doudounum" v-if="classobj.type==1">
              <div class="douimg2 iconfont icon-shalou"></div>
              <div class="dounum2">已学{{classobj.dounum}}%</div>
            </div>
          </div>
        </div>
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
      classobj:{}
    },
    methods:{
      todetail(status){
        window.location.href = '#/classdetail?type='+status
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
    .orderunder{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .orderimg{
        width: 140px;
        height: 80px;
        img{
          width: 100%;
        }
      }
      .c_orderbox{
        flex: 1;
        margin-left: 4%;
        box-sizing: border-box;
        overflow: hidden;
        height: 80px;
        position: relative;
        .c_orderval{
          width: 100%;
          font-size: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; //行数
          -webkit-box-orient: vertical;
          .typebox,.typebox2{
            display: inline-block;
            padding: 0 5px;
            box-sizing: border-box;
            height: 20px;
            border-radius: 5px;
            border: 1px solid rgb(255,150,0);
            text-align: center;
            line-height: 20px;
            margin-right: 5px;
            color: rgb(255,150,0);;
          }
          .typebox2{
            border: 1px solid rgb(70,179,230);
            color: rgb(70,179,230);
          }
        }
        .c_content{
          color: rgb(150,150,150);
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .keshibox{
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 25px;
          line-height: 25px;
          .keshi{
            width: 70px;
            color: rgb(150,150,150);
            display: flex;
            flex-direction: row;
            .erjiicon{
              font-size: 14px;
              margin-right: 5px;
            }
          }
          .doudounum{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .dounum{
              font-size: 1.2rem;
              color: red;
            }
            .dounum2{
              color: rgb(150,150,150);
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
            .douimg2{
              font-size: 14px;
              height: 25px;
              line-height: 27px;
              color: rgb(150,150,150);
              margin-right: 5px;
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
