import { Box } from '@mui/material'
import { Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Random from './pages/Random'
import Browse from './pages/Browse'
import Trending from './pages/Trending'
import Heading from './components/Heading'

const App = () => {
  const routes = [
    {path: "/", element: <Trending />},
    {path: "/browse", element: <Browse />},
    {path: "/random", element: <Random />},
    {path: "/about", element: <About />},
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh'}}>
      <Heading />
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <Routes>
          {routes.map((val) => <Route path={val.path} element={val.element}/>)}
        </Routes>
      </Box>
    </Box>
  )
}

export default App