import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [{
      id: 1,
      content: '吃饭',
      done: false
    }, {
      id: 2,
      content: '睡觉',
      done: false
    },
    {
      id: 3,
      content: '拉屎',
      done: false
    }]
  },
  mutations: {
    add(state, payload) {
      console.log(payload);
      state.list.unshift({
        id: +new Date(),
        content: payload,
        done: false
      })
    },
    del(state, payload) {
      state.list = state.list.filter(item => {
        return item.id != payload
      })
    },
    updataValue(state, payload) {
      const r = state.list.find(item => {
        return item.id == payload.id
      })
      r.content = payload.res
    },
    updataDone(state, payload) {
      const r = state.list.find(item => {
        return item.id == payload.id
      })
      r.done = payload.flag
    },
    clearValue(state) {
      state.list = state.list.filter(item => !item.done)
    },
    changeAllFlag(state, payload) {
      state.list.forEach(item => {
        item.done = payload
      })
    }
  },
  actions: {

  },
  getters: {
    getDone(state) {
      return state.list.some(item => {
        return item.done
      })
    },
    getLength(state) {
      return state.list.length
    },
    allFlag(state) {
      if (state.list.length == 0) {
        return false
      } else {
        return state.list.every(item => {
          return item.done
        })
      }
    }
  },
  modules: {
  }
})
