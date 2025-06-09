function InterationSample() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name) => <li>{name}</li>) //react에서는 반복해서 생성할 떄 key를 줘야한다. 
   console.groupCollapsed(nameList)
   /*nameList
<li>눈사람</li>
<li>얼음</li>
<li>눈</li>
<li>바람</li>
*/
   return <ul>{nameList}</ul>
}

export default InterationSample
