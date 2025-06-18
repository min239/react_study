//커스터마이징 한 CSS 적용방법2: 인라인 스타일 적ㅇㅅㅇ
import Button from '@mui/material/Button'

function MUI2_2() {
   return (
      //disabled
      <>
         <Button
            variant="text"
            style={{
               backgroundColor: 'blue',
               color: 'white',
               padding: '16px',
            }}
         >
            Text
         </Button>
         <Button variant="contained">Contained</Button>
         <Button variant="outlined ">Outlined</Button>
      </>
   )
}

export default MUI2_2
