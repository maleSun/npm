<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      Vue分页插件
    </div>
    
    <paging-plug :pageView="fPageView" :lastPage="fLastPage" @selectPage="pageSelect"></paging-plug>
  </div>
</template>

<script>
  import PaginPlugin from './components/vue-paging-plugin.vue'
export default {
  name: 'app',
  data () {
    return {
      fLastPage:100,
      fPageView:8
    }
  },
  methods:{
    pageSelect(pid){
      console.log("pid = " + pid)
    }
  },
  components:{
    'paging-plug':PaginPlugin
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  width:100%;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
#app .paging{
  display: inline-block;
  margin:30px auto;
}
</style>
