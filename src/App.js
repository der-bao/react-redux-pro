import { useSelector,useDispatch } from "react-redux";
// 导入actionCreater
import {increment, decrement,addToNum} from './store/modules/counterStore'
import { fetchChannels } from "./store/modules/channelStore";
import { use, useEffect } from "react";

function App() {
  // 获取 Redux 中的状态（counter 是 store 中注册的 key）
  const {count} = useSelector((state) => state.counter)
  const {channelList} = useSelector((state) => state.channel)
  
   // 获取 dispatch 函数
  const dispatch = useDispatch()
  // 使用useEffect触发异步请求执行
  useEffect(() =>{
    dispatch(fetchChannels())
  }, [dispatch])
  
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <button onClick={() => dispatch(addToNum(10))}>加到10</button>
        <button onClick={() => dispatch(addToNum(20))}>加到20</button>
      </div>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
