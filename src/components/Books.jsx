import {Box, Card, CardActionArea, CardContent, CardMedia, Typography, Chip, Rating, Skeleton} from '@mui/material';
import MovingIcon from '@mui/icons-material/Moving';

const Books = (props) => {
    let rand;
  return (
    <Card key={props.index} sx={{width: 220, height: 265, display: 'flex', flexDirection: 'column' }} onClick={() => console.log(rand)}>
        <CardActionArea>
            {props.loading ? (<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular"/>) : (<CardMedia  component="img" height="150" image={`https://covers.openlibrary.org/b/id/${props.cover}-M.jpg`}/>)}
            
            <CardContent sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
                <Box>
                    <Typography variant="subtitle2" noWrap sx={{fontWeight: 'bold'}}>{props.title}</Typography>
                    <Typography variant="caption" color="text.secondary" noWrap>{props.author}</Typography>
                    <Typography color="text.secondary" sx={{fontSize: '12px'}}> Published: {props.yearPublish}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: props.index ? 'space-between' : 'flex-end'}}>
                    {props.index && <Chip icon={<MovingIcon />}  label={`#${props.index} Trending`} sx={{fontSize: "12px", color: 'text.secondary'}} size='small'/>}
                    <Typography sx={{display: 'flex', alignItems: 'center', fontSize: "12px"}} color='text.secondary'>    
                        <Rating max={1} value={1} size='small'/>
                        {rand = (Math.random() * 5).toFixed(1)}
                    </Typography>
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Books