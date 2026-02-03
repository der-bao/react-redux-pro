import { useSelector,useDispatch } from "react-redux";
// 导入actionCreater
import {increment, decrement,addToNum} from './store/modules/counterStore'

function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <button onClick={() => dispatch(addToNum(10))}>加到10</button>
        <button onClick={() => dispatch(addToNum(20))}>加到20</button>
      </div>
    </div>
  );
}

export default App;
