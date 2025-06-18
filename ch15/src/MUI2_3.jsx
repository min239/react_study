//커스터마이징 한 css적용방법 3: sx props 사용 (json 객체 형태로 사용)

import Box from '@mui/material/Box'

function MUI2_3() {
   //sx props도 인라인 스타일 적용방법과 유사하게 사용
   // => json 객체, 속성명은 카멜표기법 사용
   return (
      <Box
         sx={{
            //json객체 이기 때문에 카멜표기법 사용
            width: '100px',
            height: '100px',
            backgroundColor: 'warning.light', //컬러코드 사용가능 ex)#234234

            //&:현재 컴포넌트
            '&:hover': {
               backgroundColor: 'red',
            },
         }}
      >
         However to chance color
      </Box>
   )
}

export default MUI2_3
