import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import Books from '../components/Books';
import CircularProgress from '@mui/material/CircularProgress';

const Browse = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([])
  const [isSearched, setIsSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const searchBooks = async () => {
    setIsLoading(true)
    try {
      const fetchBooks = await axios.get(`https://openlibrary.org/search.json?q=${search}&limit=24`)
      setBooks(fetchBooks.data.docs)
      setSearch('')
    } catch (error) {
      console.error('Error fetching books:', error)
      setBooks([]) 
    } finally {
      setIsLoading(false) 
    }
  }

  return (
    <Box sx={{display: 'flex', justifyContent: isSearched ? '' : 'center', alignItems: 'center', height: !isSearched && '100%', flexDirection: 'column', gap: 2, p: 5}}>
      <>
        <Typography variant='h4' sx={{fontWeight: 'bold'}}>Browse Books</Typography>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', gap: 2}}>
          <TextField value={search} placeholder='Search for books, authors, or subjects...' sx={{width: '25%'}} size='small' onChange={(e) => setSearch(e.target.value)} 
          slotProps={{input:{startAdornment: (<InputAdornment><SearchIcon sx={{ mr: 1 }} /></InputAdornment>)}}}/>
          <Button variant="outlined" sx={{borderColor: 'gray', color: 'gray'}} onClick={() => {searchBooks(); setIsSearched(true)}}>Search</Button>
        </Box>  
      </>
    
      {isLoading && isSearched && <CircularProgress />}
      
      {!isLoading && isSearched && (
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5, my: 5, pb: 5, justifyContent: 'center'}}>
          {books.length === 0 ? (
            <Typography variant='h6' sx={{color: 'gray', mt: 4}}>
              No books found. Try searching with different keywords.
            </Typography>
          ) : (
            books.map((val, index) => (
              <Books 
                key={index} 
                cover={val.cover_i} 
                title={val.title} 
                author={val.author_name?.[0]}
                yearPublish={val.first_publish_year}
                workKey={val.key}
              />
            ))
          )}
        </Box>
      )}
    </Box>
  )
}

export default Browse