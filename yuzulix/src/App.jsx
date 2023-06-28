import { Container, Grid } from '@mui/material'
import './App.css'
import VideoCard from './components/VideoCard'

function App() {

  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={5}>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            
        </Grid>
      </Container>
    </>
  )
}

export default App
