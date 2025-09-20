import { Box, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Books from '../components/Books'
import DisplayBox from '../components/DisplayBox'

const Trending = () => {
  const [trending, setTrending] = useState([])
  const [fiction, setFiction] = useState([])
  const [scienceTech, setScienceTech] = useState([])
  const [history, setHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchTrending = await axios.get("https://openlibrary.org/trending/daily.json")
      setTrending(fetchTrending.data.works.slice(0,12))

      const fetchFiction = await axios.get("https://openlibrary.org/search.json", {params: {subject: 'popular fiction', limit: 6}})
      setFiction(fetchFiction.data.docs)

      const fetchScienceTech = await axios.get("https://openlibrary.org/search.json?subject=science%20%26%20technology&limit=6")
      setScienceTech(fetchScienceTech.data.docs)

      const fetchHistory = await axios.get("https://openlibrary.org/search.json?subject=history%20%26%20biography&limit=6")
      setHistory(fetchHistory.data.docs)

      setIsLoading(false)
    }
    fetchBooks()
  }, [])

  return (
    <Box sx={{margin: 5}}>
      <Box>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Trending Books Today</Typography>
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5, my: 5}}>
          {trending.map((val, index) => 
          <Books key={val.key} cover={val.cover_i} title={val.title} author={val.author_name[0]} yearPublish={val.first_publish_year} index={index + 1} workKey={val.key}/>)}
        </Box>
      </Box>
      <DisplayBox data={fiction} title={"Popular Fiction"}/>
      <DisplayBox data={scienceTech} title={"Science & Technology"}/>
      <DisplayBox data={history} title={"History & Biography"}/>
    </Box>
  )
}

export default Trending