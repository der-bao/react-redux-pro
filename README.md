`npm install`安装环境
`npm start`启动运行


# Redux

![Redux工作原理](src/image/redux工作原理.png)

## 核心步骤：
以创建计数器为例
### （1）创建Redux Store（全局仓库）
在 src/store/index.js 文件中创建 Store（RTK 提供 configureStore 简化创建）
```
// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
// 后续会创建 counterReducer，先引入占位
import counterReducer from './counterSlice';

// 配置并创建 Store（RTK 内置了中间件、devTools 等）
export const store = configureStore({
  reducer: {
    // 注册 reducer，key 是状态名，value 是对应的 reducer
    counter: counterReducer,
  },
});

// 导出类型（可选，TypeScript 用）
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```
### （2）创建切片
采用RTK的createSlice方法，把相关的状态，修改逻辑封装在一起。
```
import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice({
    // 切片名
    name: 'counter',
    // 初始化状态
    initialState:{
        count: 0
    },
    // 修改状态的方法 同步方法 状态支持直接修改
    reducers:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    }
})

// 解构出来actionCreater函数
const {increment, decrement} = counterStore.actions
// 定义reducer函数
const reducer = counterStore.reducer

// 以按需导出的方式导出actionCreater函数
export {increment, decrement}
// 以默认导出的方式导出reducer函数
export default reducer
```
### （3）全局注入
在 React 根组件（src/index.js）中用 Provider 把 Store 注入整个应用，让所有组件都能访问

### （4）组件中使用 Redux 状态和 Action
创建 src/components/Counter.js 组件，通过 useSelector 获取状态、useDispatch 触发 Action
