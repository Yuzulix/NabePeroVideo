import { Grid, Typography, Box } from '@mui/material';
import Paper from '@mui/material/Paper';

const VideoCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src="https://picsum.photos/200/600" alt="lorem picsum" className='img' />
                <Box padding={1}>
                    <Typography variant='subtitle1' component="h2">
                        Immerse into the Ipsum
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: "center"
                    }}>
                        <Typography variant='body2' component='p'> 5 hours</Typography>
                    </Box>
                </Box>
                
            </Paper>
        </Grid>
    )
}

export default VideoCard