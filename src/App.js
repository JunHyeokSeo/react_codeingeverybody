import './App.css';

//단일 값 반환을 위해, div로 묶음
function Counter(){
  return <div>
    <h1>Counter</h1>
    <button>+</button> 0
  </div>
}

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export default App;
