import { Box, Typography } from "@mui/material"
import Books from "./Books"

const DisplayBox = ({data, title}) => {
  return (
    <Box>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>{title}</Typography>
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5, my: 5}}>
            {data.map((val) => 
            <Books key={val.title} cover={val.cover_i} title={val.title} author={val.author_name[0]} yearPublish={val.first_publish_year}/>)}
        </Box>
    </Box>
  )
}

export default DisplayBox