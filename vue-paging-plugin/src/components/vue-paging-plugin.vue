<template>
  <div class="paging">
    <div class="page-both" data-id="1" @click="skipHomePage">首页</div>
    <ul>
      <li :class="showBeforeExtend ? 'box-none' : ''">...</li>
      <li v-for="(p,i) in pageViewLen" :key="i" :data-id="pageViewNow + i" @click="selectPage" :class="showPageNum(i)">{{pageNum(i)}}</li>
      <li :class="showAfterExtend ? 'box-none' : '' ">...</li>
      <li :data-id="sonLastPage" :class="pageSelect == sonLastPage ? 'select-page' : ''" @click="selectPage">{{sonLastPage}}</li>
    </ul>
    <div class="page-both" :data-id="sonLastPage" @click="skipEndPage"> 尾页</div>
    <div>共{{sonLastPage}}页</div>
    <div class="skip">
      <span >至</span>
      <input type="text" name="pageSkip" @keyup.enter="entryPage" v-model="entryNum">
      <span>页</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'paging-plug',
  props: {
    lastPage: Number,
    pageView: Number
  },
  data() {
    return {
      pageViewNow: 1, //当前页码基数
      sonLastPage: this.lastPage, //最大页数
      pageViewLen: this.pageView, //显示可选择页数间隔
      pageSelect: 1, //当前页数
      pageNumshow: false,
      entryNum: 1
    }
  },
  watch: {
    pageSelect: function() {
      //当前项为间隔中最后一个 1 2 3 4 5 【6】
      var nextItem = (this.pageSelect > (this.pageViewNow + this.pageViewLen - 2)),
        // 当前选择项 < 最大页数 - this.pageViewLen
        nextMax = (this.pageSelect <= (this.sonLastPage - this.pageViewLen / 2));
      //点击后显示的页数增加 this.pageViewNow - 1
      nextItem && (nextMax == false ? (this.pageViewNow = this.sonLastPage - this.pageViewLen) : (this.pageViewNow = this.pageViewNow + this.pageViewLen - 2));
      //当前项为间隔中第一个 【1】 2 3 4 5 6
      var lastItem = this.pageSelect == this.pageViewNow,
        // 当前选择项最小页数 > this.pageViewLen之后项
        lastMin = this.pageSelect >= this.pageViewLen;
      lastItem && (lastMin == false ? (this.pageViewNow = 1) : (this.pageViewNow = this.pageSelect - this.pageViewLen + 2));
    }
  },
  computed: {
    //控制左侧扩展 ...
    showBeforeExtend: function() {
      //当前页码基数小于显示的间隔数-2时，显示...
      return this.pageViewNow < (this.pageViewLen - 2);
    },
    //控制右侧扩展 ...
    showAfterExtend: function() {
      //计算最大页数-当前页面基数 < 显示页面间隔
      var afterExtend = this.sonLastPage - this.pageViewNow;
      return afterExtend <= this.pageViewLen;
    }
  },
  methods: {
    selectPage(e) {
      var pid = e.currentTarget.getAttribute('data-id');
      this.pageSelect = pid;
      this.$emit('selectPage', pid);
    },
    skipHomePage(e) {
      //跳转首页-第1页
      this.pageViewNow = 1;
      this.pageSelect = 1;
      var pid = e.currentTarget.getAttribute('data-id');

      this.$emit('selectPage', pid);
    },
    skipEndPage(e) {
      //跳转尾页-第sonLastPage页
      this.pageSelect = this.sonLastPage;
      this.pageViewNow = this.sonLastPage - this.pageViewLen;
      var pid = e.currentTarget.getAttribute('data-id');

      this.$emit('selectPage', pid);
    },
    pageNum(i) {
      //超出页码时数据
      var top = (this.pageViewNow + i) < this.sonLastPage,
        bottom = (this.pageViewNow + i) >= 1;
      return top && bottom ? (this.pageViewNow + i) : ''
    },
    showPageNum(i) {
      //选择时样式
      var classSelect = this.pageSelect == this.pageViewNow + i ? 'select-page' : '',
        top = (this.pageViewNow + i) < this.sonLastPage,
        bottom = (this.pageViewNow + i) >= 1,
        //超出页码时样式
        classShow = top && bottom ? '' : 'box-none';
      return classShow + ' ' + classSelect;
    },
    entryPage(e) {
      this.entryNum = this.entryNum.replace(/[^\d]{1, 3}/g, '')
      //输入框跳转
      if (this.entryNum && this.entryNum <= this.sonLastPage) {
        this.pageSelect = this.entryNum;
        this.pageViewNow = this.entryNum - this.pageViewLen + 1;
        this.$emit('selectPage', this.entryNum);
      } else {
        alert('页码格式错误，请输入正确页面')
      }
    }
  }
}

</script>
<style scoped>
.paging {
  min-height: 2.4em;
  line-height: 2.4em;
}

span,
ul,
.paging>div,
input {
  display: inline-block;
  float: left;
  height: 100%;
  margin: 0 3px;
}

span {
  padding: 0 .5em;
}

.page-both {
  position: relative;
  padding: 0 .5em;
  border: none;
}

.page-both::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #4fc08d;
  border-radius: .2em;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: left top;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
}

ul li {
  float: left;
  width: 2.4em;
  margin: 0 3px;
  background: #eee;
  border-radius: .2em;
  list-style: none;
}

.paging::after {
  display: block;
  content: '';
  clear: both;
  width: 0;
  height: 0;
  visibility: hidden;
}

ul::after {
  display: block;
  content: '';
  clear: both;
  width: 0;
  height: 0;
  visibility: hidden;
}

input {
  width: 3em;
  height: 2.3em;
  outline: none;
  border: none;
  border: 1px solid #4fc08d;
  text-align: center;
}

.box-none {
  display: none;
}

.select-page {
  background: #4fc08d;
  font-weight: 700;
  color: #fff;
}

</style>
