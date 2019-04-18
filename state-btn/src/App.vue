<template>
  <div id="app">
    <div class="wrapper">
      <state-button :stateId="fid" :stateBit="wflag" @changeState="changeState"></state-button>
      <state-button :stateId="fid" :stateBit="!wflag" @changeState="changeState"></state-button>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      fid:1,
      f2id:2,
      wflag:false
    }
  },
  components:{
    
  },
  methods:{
    changeState(flag, id){
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  width:200px;
  height:200px;
  margin:0 auto;
}
</style>
