// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象 数字常量 不变的
const state = {
  count: 0
}

// 方法对象 访问触发状态
const mutations = {
  increment: (state, n) => {
    const obj = state
    obj.count += n
  },
  decrement: (state) => {
    const obj = state
    obj.count -= 1
  }
}
const store = new Vuex.Store({
  state,
  mutations
})

export default store
