import { createTheme } from '@mui/material/styles'
import { Button } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

//새로운 테마 생성 createTheme를 통해 색깔을 바꿈
const theme = createTheme({
   palette: {
      primary: {
         main: '#000',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
   return (
    //내가 생성한 테마를 적용한다
      <ThemeProvider theme={theme}>
         <Button color="primary" variant="contained">
            버튼
         </Button>
         <Button color="secondary" variant="contained">
            버튼
         </Button>
      </ThemeProvider>
   )
}

export default MUI5
