import { Box, Typography, Button } from '@mui/material'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Books from '../components/Books';

const Random = () => {
  const [surprises, setSurprises] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const subjects = ['fiction', 'science', 'history', 'mystery',
    'romance', 'fantasy', 'biography', 'adventure', 'thriller', 'comedy', 'drama', 'poetry']

  const showSurprise = async () => {
    setIsLoading(true)
    setIsClicked(true)
    const currentSubject = subjects[currentIndex]
    try {
      const list = await axios.get(`https://openlibrary.org/search.json?subject=${currentSubject}&limit=12`)
      setSurprises(list.data.docs)
      setCurrentIndex((prev) => prev === subjects.length - 1 ? 0 : prev + 1)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: isClicked ? 'flex-start' : 'center', alignItems: 'center', height: '100%', p: 5, gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box>
          <Typography variant='h4' sx={{ textAlign: 'center' }}>Random Book Discovery</Typography>
          <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>Discover new books with our surprise selection</Typography>
        </Box>
        <Button variant='contained' startIcon={<ShuffleIcon />} onClick={() => showSurprise()}>Surprise Me!</Button>
      </Box>

      {isLoading && isClicked && <CircularProgress />}
      {!isLoading && isClicked && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5, my: 5, pb: 5, justifyContent: 'center' }}>
          {surprises.length === 0 ? (
            <Typography variant='h6' sx={{color: 'gray', mt: 4}}>
               Network timeout. Please click the button again.
            </Typography>
          ) :surprises.map((val, index) =>
            <Books key={index} cover={val.cover_i} title={val.title} author={val.author_name?.[0]} yearPublish={val.first_publish_year} workKey={val.key} />)}
        </Box>
      )}
    </Box>
  )
}

export default Random