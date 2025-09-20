import {Box, Card, CardActionArea, CardContent, CardMedia, Typography, Chip, Rating, Skeleton} from '@mui/material';
import MovingIcon from '@mui/icons-material/Moving';
import BookDetails from './BookDetails';
import { useState } from 'react';

const Books = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rand] = useState(() => (Math.random() * 5).toFixed(1));

  const handleCardClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card 
        key={props.index} 
        sx={{width: 220, height: 265, display: 'flex', flexDirection: 'column' }} 
        onClick={props.loading ? undefined : handleCardClick}
      >
        <CardActionArea>
          {props.loading ? (
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular"/>
          ) : (
            <CardMedia  
              component="img" 
              height="150" 
              image={`https://covers.openlibrary.org/b/id/${props.cover}-M.jpg`}
            />
          )}
          <CardContent sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <Box sx={{alignItems: 'center'}}>
              {props.loading ? (
                <>
                  <Skeleton width="80%" height={20} />
                  <Skeleton width="60%" height={15} />
                  <Skeleton width="40%" height={15} />
                </>
              ) : (
                <>
                  <Typography variant="subtitle2" noWrap sx={{fontWeight: 'bold'}}>
                    {props.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" noWrap>
                    {props.author}
                  </Typography>
                  <Typography color="text.secondary" sx={{fontSize: '12px'}}>
                    {props.yearPublish}
                  </Typography>
                </>
              )}
            </Box>
            <Box sx={{display: 'flex', justifyContent: props.index ? 'space-between' : 'flex-end'}}>
              {props.index && (
                <Chip 
                  icon={<MovingIcon />}  
                  label={`#${props.index} Trending`} 
                  sx={{fontSize: "12px", color: 'text.secondary'}} 
                  size='small'
                />
              )}
              <Typography sx={{display: 'flex', alignItems: 'center', fontSize: "12px", visibility: props.loading ? 'hidden' : 'visible'}} color='text.secondary'>    
                <Rating max={1} value={1} size='small'/>
                {rand}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      
      <BookDetails 
        open={dialogOpen}
        onClose={handleDialogClose}
        rate={rand} 
        details={props.workKey} 
        cover={props.cover} 
        title={props.title} 
        author={props.author} 
        yearPublish={props.yearPublish}
      />
    </>
  )
}

export default Books;