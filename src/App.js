import { useSelector,useDispatch } from 'react-redux';
import './App.css';


function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = () =>{
    dispatch({type: 'INC'})
  };
  const decrement = () =>{
    dispatch({type: 'DEC'})
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Incement</button>
      <button onClick={decrement}>Decement</button>

    </div>
  );
}

export default App;
