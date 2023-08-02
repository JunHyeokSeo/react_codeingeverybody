import './App.css';

//단일 값 반환을 위해, div로 묶음
//변수로서 사용하기 위해 {} 중괄호 사용
//컴포넌트를 함수로 표현, 과거에는 클래스로 표현
function Counter(props){
	console.log(props.title);
	return <div>
		<h1>{props.title}</h1>
		<button>+</button> {props.initValue}
	</div>
}
//함수와 태그를 등가관계에 놓고 태그를 함수로 표현
//props는 입력값이다.
//html에서는 태그 안의 값을 속성이라고 하고,
//이를 리액트에서는 프로퍼티스라고 하고 줄여서 props로 표현한다
function App() {
  return (
	<div>
		<Counter title="불면증 카운터" initValue = {10}></Counter>
		<Counter title="손님 카운터" initValue = {10}></Counter>
	</div>
  );
}

export default App;
