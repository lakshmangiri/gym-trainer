import React from 'react'
import HorizontalScrollBar from '././HorizontalScrollBar';
import Loader from './Loader';
import { Box, Stack, Typography } from '@mui/material';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: {lg: '0px', xs: '0px'} }}>
      <Typography 
        variant="h5" 
        fontFamily="Montserrat" 
        color="#EFB700" 
        pl="40px"
        sx={{ fontSize: {xs: '16px', lg: '24px' } }}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: {lg:'50px 20px', xs: '25px 10px'}, position: 'relative' }}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollBar data={targetMuscleExercises} />
        : 
          <Loader />
        }
      </Stack>
      <Typography variant="h5" 
        fontFamily="Montserrat" 
        color="#EFB700" 
        pl="40px"
        sx={{ fontSize: {xs: '16px', lg: '24px' } }}>
        Exercises that uses the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: {lg:'50px 20px', xs: '25px 10px'}, position: 'relative' }}>
        {equipmentExercises.length ? 
          <HorizontalScrollBar data={equipmentExercises} />
        : 
          <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises