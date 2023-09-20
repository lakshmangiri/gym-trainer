import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Box } from "@mui/material"

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' p="15px" />
        <Box style={{ backgroundColor: "#EFB700", borderRadius: '20px' }}>
        <Stack 
        direction="row" >
            <Button sx={{
                mt: '15px',
                ml: '21px', 
                color: '#FFF' , 
                background:'#001D3D', 
                fontSize:'14px', 
                borderRadius: '20px', 
                textTransform: 'capitalize'
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button sx={{
                mt: '15px',
                ml: '21px', 
                color: '#FFF' , 
                background:'#409DF4', 
                fontSize:'14px', 
                borderRadius: '20px', 
                textTransform: 'capitalize'
                }}
            >
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" 
            color="#000" 
            fontWeight="bold" 
            pt="11px" 
            pb="10px" 
            textTransform="capitalize"
            sx={{fontSize: { xs: '14px', lg: '18px' } }}>
            {exercise.name}
        </Typography>
        </Box>
    </Link>
  )
}

export default ExerciseCard;