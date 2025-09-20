import { Typography, Box, DialogContent, DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BookDetails = (props) => {
  const [books, setBooks] = useState({});

  useEffect(() => {
    if (props.open && props.details) {
      const fetchData = async () => {
        try {
          const fetchDetails = await axios.get(`https://openlibrary.org${props.details}.json`);
          setBooks(fetchDetails.data);
        } catch (error) {
          console.error('Error fetching book details:', error);
        }
      };
      fetchData();
    }
  }, [props.open, props.details]);

  return (
    <Dialog open={props.open} onClose={props.onClose} maxWidth="sm">
      <DialogContent>
        <Box sx={{display: 'flex', gap: 2}}>
          <Box 
            component="img"
            sx={{
              width: '200px',
              height: '300px',
              objectFit: 'cover',
              display: 'block',
              marginBottom: 2
            }}
            alt={props.title}
            src={`https://covers.openlibrary.org/b/id/${props.cover}-M.jpg`}
          />
          <Box sx={{alignSelf: 'flex-end'}}>
            <Typography variant="h6" >{props.title}</Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {props.author}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Published: {props.yearPublish}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Rating: {props.rate}/5.0
            </Typography>
          </Box>
        </Box>
        {books.description && (
            <Typography variant="body1" sx={{ marginTop: 2, textAlign: 'justify'}}>
              {typeof books.description === 'string' 
                ? books.description 
                : books.description.value || 'No description available'
              }
            </Typography>
          )}
      </DialogContent>
    </Dialog>
  );
}

export default BookDetails;