<template>
  <div class="container" :style="'min-height:'+ cheight+'px;'">
    <topnav :topobj="topobj"></topnav>
    <div class="gzbox">
      <myguanzhu v-for="(item,index) in gzarr" :key="index" :itemobj="item"></myguanzhu>
    </div>
  </div>
</template>

<script>
  import topnav from '@/components/public/topnav'
  import myguanzhu from '@/components/my/myguanzhu'
  export default {
    components: { topnav,myguanzhu},
    data() {
      return {
        cheight:'',
        gzarr:[
          {img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:1,type:1},
          {img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:1,type:1},
          {img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:1,type:1},
          {img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:1,type:1},
          {img:'/static/images/tx.jpg',name:'璐璐',zc:'清华大学企业科任主任',status:1,type:1},
        ],
        topobj:{
          type:'',
          typeval:'',
          t_title:'我的关注',
        },
      }
    },
    props: {},
    methods:{
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
    padding-bottom: 20px;
    box-sizing: border-box;
    .gzbox{
      width: 100%;
    }
  }
</style>
