import styled from 'styled-components'

//styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
//벡틱안에 css작성(css코드와 똑같이 작성)
const StyledButton = styled.button`
   color: white;
   background-color: green;
`
//감싸기 기능을 이용해서 기존의 styledButton의 성징을 그대로 가져온다.
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

//리에트 전통방식으로 만근 컴포넌트
const ReactButton = (props) => {
   console.log(props)
   //리엑트 전통방식으로 만든 컴포넌트를 감싸기로 사용하고 싶다면 아래와 같이 className을 지정해준다
   return <button className={props.className}>{props.children}</button>
}

//ReactButton의 성질을 그대로 가져오면서 폰트사이즈 50px의 버튼을 만들고 싶은데 적용x className={props.className}적용하면 해결
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
   background-color: salmon;
`

/*
&는 현재 컴포넌트를 의미
가상클래스(:hover, :focus, :active)나 가상요소(::before, ::after)와 결합해서 사용
*/
const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')}; //props.primary에 primary가 있으면 white 없으면 blue
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
   font-size: ${(props) => props.size || '10px'}; //앞이 트루면 앞 size가 20px가 있으니 20 적용

   &:hover {
      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
`

//props에 따라서 간단하게 바꿔 줄 수 있다.
function ReactButton6() {
   return (
      <>
         {/* <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton> */}
         <PrimaryButton>Normal</PrimaryButton> 
         <PrimaryButton primary>Normal</PrimaryButton>
         <PrimaryButton size="20px" primary>
            Normal
         </PrimaryButton>
      </>
   )
}

export default ReactButton6
