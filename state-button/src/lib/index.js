import StateBtn from './state-button.vue'

//注册组件
const vueStateBtn = {
  install(Vue, options) {
    Vue.component(StateBtn.name, StateBtn)
  }
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueStateBtn);
}

export default vueStateBtn