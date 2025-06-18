import IconButton from '@mui/material/IconButton'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import AdbIcon from '@mui/icons-material/Adb'
function MUI6() {
   return (
      <>
         <AcUnitIcon />
         <br />
         <IconButton color="secondary" aria-label="설명해주는 글자 작성">
            <AdbIcon />
         </IconButton>
      </>
   )
}

export default MUI6
