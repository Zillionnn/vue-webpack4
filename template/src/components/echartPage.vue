<template>
  <div class="page">
    <div id="main" style="width: 600px;height:400px;"></div>
    <el-button>123</el-button>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'echartDemo',
  components: {},
  computed: {
    option () {
      let yData = this.yData
      let o = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: yData
          }
        ]
      }
      return o
    }
  },
  data () {
    return {
      yData: []
    }
  },
  mounted () {
    setInterval(() => {
      this.yData = [5, 20, 36, 10, 10, 20]
      myChart.setOption(_self.option)
    }, 2000)
    var myChart = echarts.init(document.getElementById('main'))
    const _self = this
    myChart.setOption(_self.option)
  }
}
</script>

<style scoped>
</style>
