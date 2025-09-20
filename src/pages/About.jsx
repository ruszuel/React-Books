import { Box, Typography, Avatar, Stack, Chip } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';

const About = () => {
  const expertise = [
    "HTML 5", "Tailwind", "Angular", "React","React Native", "Node JS", 
    "Express JS", "PostgreSQL", "MySQL", "Spring", "GIT", "Docker"
  ];

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 5,
        gap: 2
      }}
    >
      <Typography variant='h4'>About the Developer</Typography>

      <Box 
        sx={{
          bgcolor: 'gray',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'rgba(255, 255, 255, 0.08)',
          p: 3,
          mt: 5,
          gap: 2,
          width: '50%',
          borderRadius: 4,
          overflow: 'hidden' 
        }}
      >
        <Avatar sx={{ width: 100, height: 100 }} />
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant='h5'>Russuel Tengco</Typography>
          <Typography variant='body2' textAlign="center">
            Full Stack Developer/ DevOps
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap" // <-- Wrap chips instead of overflowing
          justifyContent="center"
        >
          {expertise.map((val) => (
            <Chip key={val} icon={<CodeIcon />} label={val} />
          ))}
        </Stack>
        {/* <Typography variant='body2' sx={{textAlign: 'center'}}> This book discovery app was built using React, Material-UI, and the Open Library API. It features responsive design, dark theme, and modern UI components.</Typography> */}
      </Box>
    </Box>
  )
}

export default About;
