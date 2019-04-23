# state-btn

> A Vue.js plugin

## [分页插件 demo](https://malesun.github.io/npm/vue-paging-plugin/dist/#/)

## 插件安装
```javascript
npm install vue-paging-plugin --save
```

## 插件引入
* main.js

```javascript
import PagingPlugin from 'vue-paging-plugin';

Vue.use(PagingPlugin);
```

## 使用方法
* App.vue

```javascript
<paging-plug :pageView="fPageView" :lastPage="fLastPage" @selectPage="pageSelect"></paging-plug>
```

```javascript
export default {
  name: 'App',
  data(){
    return{
      fLastPage:100,
      fPageView:8
    }
  }
}
```
## API

| 参数             | 说明               | 类型  |
| :-------------  |:-------------     | :-----|
| pageView        | 可视分页间隔       |  Number |
| lastPage        | 最大(最后)页码     |  Number |

## 参数返回

| 参数     | 说明  | 类型  |
| :----------- |:-------------  |:--------------|
| pid    | 当前选择页码  | Number |

### 参数用法
```javascript
export default {
  name: 'App',
  methods:{
    pageSelect(pid){
      console.log("pid = " + pid)
    }
  }
}
```



