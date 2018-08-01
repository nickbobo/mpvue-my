<template>
  <div>
    <scroll-view :scroll-y="scroll" style="height:200px" scroll-with-animation="true">
      <div class="layer">
        <h1>我是首页</h1>
        <div>haha </div>
        <div id="home_center">
          <ul v-for="(items,index) in data.arr" :key="index">
            <li>{{items}}</li>
          </ul>
        </div>
        <a href="/pages/logs/main">查看启动日志</a>
        <button @click="onButton($event)">这是一个Button</button>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import { get } from '../../util.js'
import { formatTime } from '../../utils'
export default {
  data () {
    return {
      el: '#home_center',
      data: {
        arr: ['1', '2', '3'],
        json: ['a', 'b', 'd']
      }
    }
  },
  async created () {
    const res = await get('/weapp/demo')
    console.log('demo=>', res.msg)
    // console.log("data=>",Date())
    console.log('data=>', formatTime(new Date(Date.now())))
    setTimeout(() => {
      console.info(this)
    }, 4000)
  },
  methods: {
    onButton (event) {
      console.info('这是一个button', event)
    }
  },
  mounted () {
    console.info('mounted', this)
  },
  onReady () {
    console.log('page index onReady', this)
  },
  onLoad () {
    console.log('page index onLoad', this)
  },
  onShow () {
    console.log('onShow', this)
  },
  onUnload () {
    console.log('onUnload', this)
  },
  onHide () {
    console.log('onHide', this)
  }
}
</script>
<style>
</style>
