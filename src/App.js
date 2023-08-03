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

// 컴포넌트가 무수히 많다면, props 객체에 어떤 값이 담겨서 오는지, 어떤 값을 입력해야 하는지 확인하기 어려움
// 아래와 같이 props의 값을 상수 형태로 저장해두면 props 객체 내부의 값을 파악하기 쉬움
// function Counter(props) {
//   const title = props.title;
//   const initValue = props.initValue;

// 위와 같은 코드를 컴포넌트 선언부 한줄로 줄일 수 있다
// 이러한 개념을 '구조 분해 할당'이라고 한다
function Counter({ title, initValue }){
	//상수로 선언하여, 직접 수정 시 에러 발생
	// const countState = useState(initValue);
	// const count = countState[0];
	// const setCount = countState[1];

	//위 코드를 아래 한줄로 변경 - '구조 분해 할당'
	//const지만 setCount를 통해 값을 변경할 수 있는 이유?
	//react는 상수가 필요했다기 보다 값이 변경되었다는 것을 확인하는 방법이 필요했음
	//const, let 상관 없이 정상 동작, 차이 알아볼 필요 있음
	const [count, setCount] = useState(initValue);
	const [step, setStep] = useState(1);
	function up(){
		setCount(count + step);
	}
	const stepHandler = (evt) => {
		setStep(Number(evt.target.value));
	};
	return (<div>
		<h1>{title}</h1>
		<button onClick={up}>+</button> {count}
		<input type="number" value={step} onChange={stepHandler}/>
	</div>);
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
