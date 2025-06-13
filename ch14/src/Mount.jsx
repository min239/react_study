import React, { Component } from 'react'

//마운트는 컴포넌트가 최초로 렌더링(생성) 될때
class Mount extends Component {
   //1.컴포넌트 생성시 가장먼저 실행되는 함수, 이 과정에서 초기 state가 지정
   constructor(props) {
      //props에서 가져옴
      super(props)
      this.state = { count: 0 } //초기 state를 지정
   }

   //2.render가 진행,가상돔을 구성함(virtual dom)
   //d이모지 단축키 윈도우+.
   render() {
      console.log('😴렌더링 중')
      return <div>{this.state.count}</div>
   }

   //3.실제 브라우저 돔(real dom)이 구성됨
   //ref(useRef)가 지정이 되어 있다면 이시점에 해당 dom에 연결
   //-> 실제 브라우저에 real dom이 보임

   //4. 컴포넌트가 화면에 모두 렌더링이 되고 난 뒤 실행됨 -> 실제 dom 접근 가능, api 호출가능 ->useEffect(() => {..코드가 있음}, []) 이거랑 동일

   //useEffect(() => {..코드가 있음}, []) 실행되는 시점은 최초로 렌더링될때 한번만 실행
   // useEffect(() => {..코드가 있음}) 맨처음 사이트 접속시 실행하고 state 바뀔때마다 렌더링
   componentDidMount() { //dom들이 화면에 다 그려지고 나서 실행한다고 생각!!!!!
      console.log('😴컴포넌트 마운트 완료')
   }
}

export default Mount
