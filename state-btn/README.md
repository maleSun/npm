# state-btn

> A Vue.js plugin

## [状态按钮demo](https://malesun.github.io/npm/state-btn/dist/#/)

## 插件安装
```javascript
npm install state-button --save
```

## 插件引入
* main.js

```javascript
import StateButton from 'state-button';

Vue.use(StateButton);
```

## 使用方法
* App.vue

```javascript
<state-button :stateId="fid" :stateBit="!wflag" @changeState="changeState"></state-button>
```

```javascript
export default {
  name: 'App',
  data(){
    return{
      fid:1,
      f2id:2,
      wflag:false
    }
  }
}
```
## API

| 参数             | 说明               | 类型  |
| :-------------  |:-------------     | :-----|
| stateId         | 按钮ID            |  Number, String |
| stateBit        | 状态位，默认false  |    Boolean |

## 参数返回

| 参数     | 说明  | 类型  |
| :----------- |:-------------  |:--------------|
| flag  | 按钮当前状态        | Boolean |
| id    | 状态位，默认false   | Number, String |

### 参数用法
```javascript
export default {
  name: 'App',
  methods:{
    changeState(flag, id){
      console.log(flag, id)
    }
  }
}
```



