import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

    if(!exerciseVideos.length) return 'Loading...';

    console.log(exerciseVideos);

  return (
    <Box sx={{ marginTop: {lg: '30px', xs: '20px'}, padding: {xs: '10px', lg: '40px'}}}>
        <Typography 
            variant="h4" 
            mb="30px" 
            fontFamily="Montserrat" 
            color="#EFB700"
            sx={{fontSize: {lg: '24px', xs: '16px'}}}>
            Watch {name} exercise
            <Stack 
                justifyContent="flex-start" 
                flexWrap="wrap" 
                alignItems="center" 
                sx={{
                    mt: '40px',
                    flexDirection: {lg: 'row'},
                    gap: { lg: '110px', xs: '0'}
                }}>
                    {exerciseVideos?.slice(0, 3).map((item, index) => (
                        <a 
                            key={index}
                            className="exercise-video"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer">
                                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                                <Box>
                                    <Typography fontFamily="Montserrat" sx={{ textDecorationLine: 'underline'}} color="#FFF">
                                        {item.video.title}
                                    </Typography>
                                    <Typography variant="h6" color="#FFF" fontWeight={700}>
                                        {item.video.channelName}
                                    </Typography>
                                </Box>
                        </a>
                    ))}
            </Stack>
        </Typography>

    </Box>
  )
}

export default ExerciseVideos