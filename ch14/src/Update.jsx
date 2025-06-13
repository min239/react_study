import React, { Component } from 'react'

class Update extends Component {
   constructor(props) {
      super(props)
      this.state = { count: 0 } //초기 state
   }

   handleClick = () => {
      //count state 1증가
      this.setState({ count: this.state.count + 1 })
   }

   //2.업데이트시 기존 가상돔(virtual dom)과 새로운 가상돔(new virtual dom)을 비교후 변환 된 부분을 새로운 가상돔에 반영
   render() {
      console.log('😀😀렌더링 중') //최초로 실행시
      return (
         <div>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>+1</button> {/*버튼 클릭시 count state를 1씩 증가 */}
         </div>
      )
   }

   componentDidMount() {
      console.log('😀😀컴포넌트 마운트 완료')
   }

   //1.props 또는 state변경시 호출됨 -> 렌더링 여부 결정
   shouldComponentUpdate(nextProps, nextState) {
      console.log('😂😂shouldComponentUpdate')
      console.log('현재state:', this.state.count, '다음 state', nextState.count)
      return true //false면 재렌더링 되지 않는다,true를 주면 다시 렌더링
   }

   //3. dom이 업데이트 되기 직전의 props와 state를 가져온다.
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('😋😋getSnapshotBeforeUpdate호출')
      console.log('이전 state:', prevState.count) //0
      return '스냅샷 데이터' //아래 componentDidUpdate()로 전달됨
   }
   // 4.새로운 가상돔 (new virtual dom)을 실제 브라우저 돔(real browser dom)에 반영

   //5마지막 업데이트 완료 후 실행-> 4번 다 끝나고
   //useEffect(() => {..}, [state])와 동일
   //useEffect(() => {..}, [state])최초로 실행하고 state가 바뀔 때 마다 리렌더링된다
   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('😋😋getSnapshotBeforeUpdate호출')
      console.log('이전 state:', prevState.count)
      console.log('스냅샷:', snapshot)
   }

   //6. 언마운트(컴포넌트 제거)직전 정리
   //ctrl + s 버튼 누르면 볼 수 있음
   //뒷정리함수는 useEffect 실행직전에 실행된다
   componentWillUnmount() {
    console.log('🙄🙄componentWillUnmount호출')
   }
}

export default Update
