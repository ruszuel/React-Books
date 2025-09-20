import { Box, Typography } from "@mui/material"
import Books from "./Books"

const DisplayBox = ({data, title, loading}) => {
  return (
    <Box>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>{title}</Typography>
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5, my: 5}}>
            {loading ? Array.from(new Array(6)).map((_, index) => (
              <Books key={index} loading={true} />
            )) :data.map((val) => 
            <Books key={val.key} cover={val.cover_i} title={val.title} author={val.author_name[0]} yearPublish={val.first_publish_year} workKey={val.key}/>)}
        </Box>
    </Box>
  )
}

export default DisplayBox