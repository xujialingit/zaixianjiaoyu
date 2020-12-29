<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav2 @focusfn="focusfn" :topobj="topobj"></topnav2>
    <banner :bannerlist="bannerlist"></banner>
    <div class="mokuai">
      <div class="mitem" v-for="item in mokuailist" @click="edufn(item)">
        <mokuai :mokuaiobj="item"></mokuai>
      </div>
    </div>
    <div class="h_swiper">
      <div class="labaicon iconfont icon-laba"></div>
      <div class="swiperbox">
        <swiper loop auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item v-for="(item, index) in [1,2,3,4]" :key="index"><div>义务爱了 完成传奇世界H5-王者归来任务 获得20金币归来任务 获得20金币</div></swiper-item>
        </swiper>
      </div>
    </div>
    <div class="hot_box">
      <div class="tjtitle">- 热门推荐 -</div>
      <div class="hotmk">
        <div class="hotitem" v-for="item in hotarr" @click="clickhot(item.type)">
          <hotmk :mokuaiobj="item"></hotmk>
        </div>
      </div>
    </div>
    <div class="active_box">
      <div class="tjtitle">- 活动专区 -</div>
      <div class="active_mk">
        <div class="active_left" @click=acleftfn><img src="/static/images/huodong1.png"></div>
        <div class="active_right">
          <div class="rightimg"><img src="/static/images/huodong2.png"></div>
          <div class="rightimg2"><img src="/static/images/huodong3.png"></div>
        </div>
      </div>
    </div>
    <footnav :footobj="footobj"></footnav>
  </div>
</template>

<script>
  import topnav2 from '@/components/public/topnav2'
  import mokuai from '@/components/public/mokuai'
  import footnav from '@/components/public/footnav'
  import banner from '@/components/public/banner'
  import hotmk from '@/components/home/hotmk'
  import { Swiper,SwiperItem } from 'vux'
  export default {
    components: {topnav2,banner,mokuai,Swiper,SwiperItem,hotmk,footnav},
    data() {
      return {
        cheight:'',
        topobj:{type:1},
        bannerlist:[
          {url: 'javascript:', img: 'http://img2.imgtn.bdimg.com/it/u=1125178553,2514758115&fm=26&gp=0.jpg',link:'',title: '送你一朵fua'},
          {url: 'javascript:', img: 'http://img2.imgtn.bdimg.com/it/u=3404219196,4210426680&fm=26&gp=0.jpg',link:'',title: '送你一朵fua'},
          {url: 'javascript:', img: 'http://img0.imgtn.bdimg.com/it/u=2608790599,4133719683&fm=26&gp=0.jpg',link:'',title: '送你一朵fua'},
          {url: 'javascript:', img: 'http://img5.imgtn.bdimg.com/it/u=1491623742,1542797477&fm=26&gp=0.jpg',link:'',title: '送你一朵fua'},
        ],
        footobj:[
          {val:'首页',icon:'icon-shouyeshouye',color:'rgb(255,131,21)'},
          {val:'活动',icon:'icon-huomiao',color:'rgb(50,50,50)'},
          {val:'消息',icon:'icon-message',color:'rgb(50,50,50)'},
          {val:'我的',icon:'icon-gerenzhongxin',color:'rgb(50,50,50)'},
        ],
        mokuailist:[
          {img:'/static/images/tx.jpg',val:'财商教育',id:'1'},
          {img:'/static/images/tx.jpg',val:'文化教育',id:'2'},
          {img:'/static/images/tx.jpg',val:'区块链教育',id:'3'},
          {img:'/static/images/tx.jpg',val:'全部',id:'0'},
        ],
        hotarr:[
          {img:'/static/images/hotimg1.png',val:'热门电子书',type:1},
          {img:'/static/images/hotimg2.png',val:'热门视频教程',type:2},
          {img:'/static/images/hotimg3.png',val:'热门音频教程',type:3},
        ]
      }
    },
    props: {},
    methods:{
      focusfn(){
        window.location.href = '#/serchpage'
      },
      acleftfn(){
        window.location.href = '#/paysenddou'
      },
      edufn(item){
        window.location.href = '#/edupage?id='+item.id+'&&val='+item.val
      },
      clickhot(type){
        window.location.href = '#/hotpage?type='+type

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
    padding-bottom: 60px;
    box-sizing: border-box;
    .mokuai{
      width: 100%;
      background-color: #fff;
      padding: 25px 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      .mitem{
        width: 25%;
      }
    }
    .h_swiper{
      padding: 10px 4%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .labaicon{
        width: 30px;
        line-height: 30px;
        height: 30px;
        font-size: 23px;
        color: rgb(255,143,43);
      }
      .swiperbox{
        flex: 1;
        div{
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 30px;
          line-height: 30px;
        }
      }
    }
    .hot_box,.active_box{
      width: 100%;
      padding: 15px 4%;
      box-sizing: border-box;
      background-color: #fff;
      overflow: hidden;
      .tjtitle{
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
      }
      .hotmk{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
        .hotitem{
          width: 34%;
          border-radius: 10px;
        }
      }
    }
    .active_box{
      margin-top: 10px;
      .active_mk{
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .active_left{
          width: 49%;
          font-size: 0;
          border-radius: 5px;
          overflow: hidden;
          img{
            width: 100%;
          }
        }
        .active_right{
          width: 49%;
          font-size: 0px;
          position: relative;
          .rightimg,.rightimg2{
            border-radius: 5px;
            overflow: hidden;
            width: 100%;
            img{
              width: 100%;
            }
          }
          .rightimg2{
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
    }
  }
</style>
