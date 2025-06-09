function InterationSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => <li key={index}>{name}</li>) //react에서는 반복해서 생성할 떄 key를 줘야한다.
   console.groupCollapsed(nameList)
   //리엗트에서는 요서(태그,컴포넌트)를 반복할떄 반드시 요소를 구분하기 위한 key를 지정해줘야 하고 key는 중복x
   /*nameList
<li key=0>눈사람</li>
<li key=1>얼음</li>
<li key=2>눈</li>
<li key=3>바람</li>
*/
   return <ul>{nameList}</ul>
}

export default InterationSample2
