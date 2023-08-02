import './App.css';
import { useState } from 'react';

//단일 값 반환을 위해, div로 묶음
//변수로서 사용하기 위해 {} 중괄호 사용
//컴포넌트를 함수로 표현, 과거에는 클래스로 표현
//컴포넌트는 외부에서 내부로 주입되는 상태, 스테이트는 내부적으로 사용하는 상태
//컴포넌트 구현부 내부에서 자의적으로 props 값 변경 불가

//상태는 배열이다.
//배열의 첫번째 원소는 상태의 값이다 (읽을 때 사용)
//두번째 원소는 상태의 값을 변경할 때 호출하는 함수다 (바꿀 때 사용)
//리액트는 setCount() 값이 이전 값과 다르다면 컴포넌트를 재실행 한다.

//state 미사용시 프로퍼티스의 값을 변경할수는 있지만, 컴포넌트를 다시 랜더링 할 수 없다
function Counter(props){
	let countState = useState(props.initValue);
	let count = countState[0];
	let setCount = countState[1];
	console.log(countState);
	function up(){
		console.log(1);
		setCount(count + 1);
	}
	console.log(props.title);
	return <div>
		<h1>{props.title}</h1>
		<button onClick={up}>+</button> {count}
	</div>
}
//함수와 태그를 등가관계에 놓고 태그를 함수로 표현
//props는 입력값이다.
//html에서는 태그 안의 값을 속성이라고 하고,
//이를 리액트에서는 프로퍼티스라고 하고 줄여서 props로 표현한다
function App() {
  return (
	<div>
		<Counter title="불면증 카운터" initValue = {0}></Counter>
	</div>
  );
}

export default App;
