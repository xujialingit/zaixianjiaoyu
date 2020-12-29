<template>
  <div class="container">
    <div class="my-charts" style="height: 400px;width: 400px" ref="myChart"></div>
    <div class="box1">盒子1</div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return{}
    },
    props: {},
    methods:{
      initecharts(){
        let myChart = this.$echarts.init(this.$refs.myChart);
        var option = {
          angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          radiusAxis: {
          },
          polar: {
          },
          tooltip: {
            trigger: 'axis'
          },
          series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
          }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
          }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
          }],
          legend: {
            show: true,
            data: ['A', 'B', 'C']
          }
        };

        myChart.setOption(option)
      }
    },
    mounted(){
      this.initecharts()
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .box1{
    color:red;
  }
  @media (min-width: 300px) and (max-width: 400px){
    .box1{
      color:blue;
    }
  }
  @media (min-width: 400px) and (max-width: 500px){
    .box1{
      color:blue;
      font-size: 60px;
    }
  }
  @media (min-width: 600px) and (max-width: 800px){
    .box1{
      color:orange;
      display: none;
    }
  }
</style>
