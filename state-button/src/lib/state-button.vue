<template>
  <div class="state">
    <div class="oval" :class="flag == true ? 'oval-checked' : ''">
      <div class="circle" :class="flag == true ? 'circle-checked' : ''" :data-id="sid" @click="changeState"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'state-button',
  props:['stateId','stateBit'],
  data() {
    return {
    	sid:this.stateId,
    	flag:this.stateBit
    }
  },
  created(){
  	
  },
  methods:{
  	changeState(e){
  		var id = e.currentTarget.getAttribute('data-id');
  		this.flag = this.flag == false? true:false;
  		this.$emit('changeState', this.flag, id);
  	}
  }
}

</script>
<style scoped>
	.oval {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 1.6em;
  height: 1.6em;
  line-height: 0;
  background: #ccc;
  z-index: 666;
  transition: all 1.2s;
}
.oval::before,
.oval::after,.circle {
  position: absolute;
  display: block;
  top: 0;
  height: 1.6em;
  width: 1.6em;
  border-radius: 50%;
  transition: all .6s;
  z-index: 1;
}
.oval::before,
.oval::after {
  content: '';
  background: #ccc;
  z-index: 0;
  transition: all 1.2s;
}
.circle{
	background: #f40;
	left:-.8em;
}
.oval::before {
  left: -.8em;
}

.oval::after {
  right: -.8em;
}

.oval-checked,.oval-checked::before,
.oval-checked::after {
  background: #f40;
}
.circle-checked {
  left: .8em;
  background:#fff;
}
</style>
