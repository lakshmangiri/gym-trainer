import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import HeroBannerImage from '../assets/images/bannerImage.jpg';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroBannerImage})`,
        backgroundSize: 'contain',
        minHeight: '100vh', // Set to full viewport height
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        p: '0px',
        display: 'flex', // Added to center content vertically
        flexDirection: 'column', // Added to center content vertically
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
      }}
    >
      <HeroBanner
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
