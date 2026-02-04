import { configureStore } from "@reduxjs/toolkit"
// 导入子模块reducer
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore' 


// 创建全局仓库
const store = configureStore({
    // 注册 reducer（减速器），key 是状态名，value 是对应的 reducer
    reducer:{
        counter: counterReducer,
        channel: channelReducer
    }
})

export default store