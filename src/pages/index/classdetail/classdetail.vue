<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav v-if="pagetype!=0" :topobj="topobj"></topnav>
    <div class="videobox" v-if="pagetype==0">
      <div class="backicon iconfont icon-jiantou-copy" @click="backfn"></div>
      <video src="https://vd4.bdstatic.com/mda-jaqp8tqpkiyud9ep/sc/mda-jaqp8tqpkiyud9ep.mp4?auth_key=1557888325-0-0-e578903e776494a83e02e2801a5ef684&bcevod_channel=searchbox_feed&pd=bjh&abtest=all" width="100%" controls="controls"></video>
    </div>
    <div class="dbookbox" v-if="pagetype==1">
      <img src="/static/images/bg1.jpg">
    </div>
    <div class="musicbox" v-if="pagetype==2">
      <div class="musicitem">
        <div class="musicimg"><img src="/static/images/bg1.jpg"></div>
        <audio style="width: 100%" id="musicbox" controls>
          <source src="/static/music/ykzzldx.mp3" type="audio/mpeg">
          您的浏览器不支持 audio 元素。
        </audio>
      </div>
    </div>
    <div class="navbox">
      <div class="navitem" v-for="item in navarr" :style="'color: '+item.color+';border-bottom:'+item.border" @click="ckecknav(item.type)">
        {{item.val}}
        <span v-if="item.hotnum>0">({{item.hotnum}})</span>
      </div>
    </div>
    <div class="introducebox" v-if="navtype==0">
      <div class="introtop">
        <div class="introtbox">
          <div class="introtitle">5-15岁妈妈必备育儿宝典</div>
          <div class="xinicon iconfont icon-aixin"></div>
        </div>
        <div class="classbox">
            <div class="icplay iconfont icon-bofang"></div>
            <div class="classnum">共15课时</div>
            <div class="redystatudy">189人已学习</div>
        </div>
        <div class="needdoubox">
          <div class="neednum">200</div>
          <div class="douimg"><img src="/static/images/douimg.png"></div>
        </div>
      </div>
      <div class="teacherbox">
        <myguanzhu :itemobj="gzobj"></myguanzhu>
      </div>
      <div class="easyvalbox">
        <div class="easytitle">
          <span v-if="pagetype==0">课程</span><span v-if="pagetype==1">图书</span><span v-if="pagetype==2">音频</span>简介:</div>
        <div class="easyval">小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词小学英语单词</div>
      </div>
    </div>
    <div class="mulubox" v-if="navtype==1">
      <div class="mululist" v-for="item in muluarr">
        <muluitem :pagetype="pagetype" :muluobj="item"></muluitem>
      </div>
    </div>
    <div class="replybox" v-if="navtype==2">
      <div class="replylist" v-for="item in [1,1,1]">
        <replyitem></replyitem>
      </div>
    </div>
    <div class="footnav">
      <div class="freebtn">{{footarr[0]}}</div>
      <div class="buybtn" @click="buyclassfn">{{footarr[1]}}</div>
    </div>
  </div>
</template>

<script>
  import myguanzhu from '@/components/my/myguanzhu'
  import topnav from '@/components/public/topnav'
  import muluitem from '@/components/class/muluitem'
  import replyitem from '@/components/class/replyitem'
  export default {
    components: {topnav,myguanzhu,muluitem,replyitem},
    data() {
      return {
        cheight:'',
        muluarr:[
          {
            title:'香奈儿的奢侈帝国',
            open:false,
            listarr:[
              {name:'香奈儿的奢侈帝国',id:0,status:1},
              {name:'香奈儿的奢侈帝国',id:1,status:0},
              {name:'香奈儿的奢侈帝国',id:2,status:1},
            ],
            mid:0,
          },
          {
            title:'香奈儿的奢侈帝国',
            open:false,
            listarr:[
              {name:'香奈儿的奢侈帝国',id:0,status:0},
              {name:'香奈儿的奢侈帝国',id:1,status:0},
              {name:'香奈儿的奢侈帝国',id:2,status:1},
            ],
            mid:1,
          },
          {
            title:'香奈儿的奢侈帝国',
            open:false,
            listarr:[
              {name:'香奈儿的奢侈帝国',id:0,status:1},
              {name:'香奈儿的奢侈帝国',id:1,status:0},
              {name:'香奈儿的奢侈帝国',id:2,status:0},
            ],
            mid:2,
          },
        ],
        gzobj:{img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:1,type:2},
        footarr:['免费试看','立即购买'],
        navarr:[
          {type:0,val:'课程介绍',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)',hotnum:0},
          {type:1,val:'课程目录',color:'rgb(0,0,0)',border:'none',hotnum:0},
          {type:2,val:'评价',color:'rgb(0,0,0)',border:'none',hotnum:450},
        ],
        topobj:{
          type:'',
          typeval:'',
          t_title:'我的课程',
        },
        navtype:0,
        pagetype:0,
      }
    },
    props: {},
    methods:{
      buyclassfn(){
        window.location.href = '#/buyclass'
      },
      backfn(){
        window.history.go(-1);
      },
      ckecknav(type){
        this.navtype = type
        for(let i = 0;i<this.navarr.length;i++){
          if(type==this.navarr[i].type){
            this.navarr[i].color = 'rgb(255,150,0)'
            this.navarr[i].border = '2px solid rgb(255,150,0)'
          }else {
            this.navarr[i].color = 'rgb(0,0,0)'
            this.navarr[i].border = 'none'
          }
        }
      },
    },
    mounted(){
    },
    created() {
      if(this.$route.query.type){
        this.pagetype = this.$route.query.type
      }
      if(this.pagetype ==1){
        this.navarr = [
          {type:0,val:'图书介绍',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)',hotnum:0},
          {type:1,val:'图书目录',color:'rgb(0,0,0)',border:'none',hotnum:0},
          {type:2,val:'评价',color:'rgb(0,0,0)',border:'none',hotnum:450},
        ]
        this.footarr=['免费试读','立即购买']
      }else if(this.pagetype ==2){
        this.navarr = [
          {type:0,val:'音频介绍',color:'rgb(255,150,0)',border:'2px solid rgb(255,150,0)',hotnum:0},
          {type:1,val:'音频目录',color:'rgb(0,0,0)',border:'none',hotnum:0},
          {type:2,val:'评价',color:'rgb(0,0,0)',border:'none',hotnum:450},
        ]
        this.footarr=['免费试听','立即购买']
      }
      this.cheight = this.docheight
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    overflow: hidden;
    background-color: rgb(245,245,245);
    padding-bottom: 50px;
    box-sizing: border-box;
    .videobox,.musicbox{
      width: 100%;
      position: relative;
      .backicon{
        position: absolute;
        width: 25px;
        height: 25px;
        font-size: 23px;
        line-height: 25px;
        color: white;
        top: 10px;
        left: 10px;
        z-index: 1000;
      }
      .musicitem{
        position: relative;
        width: 100%;
        .musicimg{
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
    }
    .dbookbox{
      width: 100%;
      position: relative;
      .backicon{
        position: absolute;
        width: 25px;
        height: 25px;
        font-size: 23px;
        line-height: 25px;
        color: white;
        top: 10px;
        left: 10px;
        z-index: 1000;
      }
      img{
        width: 100%;
      }
    }
    .navbox{
      width: 100%;
      padding: 0 4%;
      box-sizing: border-box;
      height: 53px;
      line-height: 53px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background-color: #fff;
      .navitem{
        width: 30%;
        height: 100%;
        text-align: center;
      }
    }
    .introducebox{
      width: 100%;
      .introtop{
        width: 100%;
        background-color: #fff;
        padding: 15px 4%;
        box-sizing: border-box;
        .introtbox{
          width: 100%;
          height: 30px;
          line-height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .introtitle{
            flex: 1;
          }
          .xinicon{
            width: 30px;
            height: 30px;
            font-size: 25px;
            margin-left: 10px;
          }
        }
        .classbox{
          width: 100%;
          height: 20px;
          line-height: 20px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          color: rgb(150,150,150);
          .icplay{
            font-size: 20px;
            color: rgb(255,150,0);
          }
          .classnum{
            margin-left: 5px;
            margin-right: 30px;
          }
        }
        .needdoubox{
          width: 100%;
          margin-top: 10px;
          height: 25px;
          line-height: 25px;
          display: flex;
          flex-direction: row;
          font-size: 1.1rem;
          justify-content: flex-start;
          .douimg{
            width: 25px;
            margin-left: 7px;
            height: 25px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .teacherbox{
        width: 100%;
        margin-top: 15px;
        background-color: #fff;
      }
      .easyvalbox{
        width: 100%;
        padding: 15px 4%;
        background-color: #fff;
        box-sizing: border-box;
        .easytitle{
          font-size: 1.1rem;
        }
        .easyval{
          margin-top: 5px;
          margin-bottom: 30px;
          width: 100%;
        }
      }
    }
    .mulubox{
      width: 100%;
      margin-top: 10px;
    }
    .replybox{
      width: 100%;
      padding: 15px 4%;
      box-sizing: border-box;
      background-color: #fff;
      .replylist{
        width: 100%;
      }
    }
    .footnav{
      position: fixed;
      height: 40px;
      line-height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
      bottom: 0;
      left: 0;
      width: 100%;
      .freebtn{
        width: 45%;
        background-color: #fff;
        border-top: 1px solid #eee;
        color: black;
      }
      .buybtn{
        width: 55%;
        color: white;
        background-color: rgb(255,150,0);
        border-top: 1px solid rgb(255,150,0);
      }
    }
  }
</style>
