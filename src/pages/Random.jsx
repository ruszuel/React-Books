import { Box, Typography,Button } from '@mui/material'
import ShuffleIcon from '@mui/icons-material/Shuffle';

const Random = () => {

  const subjects = ['fiction', 'science', 'history', 'mystery', 'romance', 'fantasy', 'biography', 'adventure', 'thriller', 'comedy', 'drama', 'poetry']
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Box  sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center', gap: 2}}>
        <>
          <Typography variant='h5'>Random Book Discovery</Typography>
          <Typography variant='subtitle1'>Discover new books with our surprise selection</Typography>
        </>
        <Button variant='contained' startIcon={<ShuffleIcon/>}>Surprise Me!</Button>
      </Box>
    </Box>
  )
}

export default Random