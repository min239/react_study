import Button from '@mui/material/Button'

function MUI1() {
   return (
      //disabled
      <>
         <Button
            variant="text"
            onClick={() => {
               alert('버튼 클릭')
            }}
         >
            Text
         </Button>
         <Button variant="contained">Contained</Button>
         <Button variant="outlined" size="small">
            Outlined
         </Button>
      </>
   )
}

export default MUI1
