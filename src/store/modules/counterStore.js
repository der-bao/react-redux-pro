import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice({
    // 切片名/状态名
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
        },
        addToNum(state, action){
            state.count = action.payload
        }
    }
})

// 解构出来actionCreater函数
const {increment, decrement,addToNum} = counterStore.actions
// 导出reducer函数
const reducer = counterStore.reducer

// 以按需导出的方式导出actionCreater函数
export {increment, decrement, addToNum}
// 以默认导出的方式导出reducer函数
export default reducer

