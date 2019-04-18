import StateBtn from './state.vue'


const components = [
  StateBtn
  // 继续添加
]
//注册组件
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  StateBtn
  // 继续添加
}