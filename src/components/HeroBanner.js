import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import SearchCard from './SearchCard';

const HeroBanner = ({ setExercises, bodyPart, setBodyPart }) => {
  return (
    <Box sx={{ 
        mt: {lg: '230px', xs: '130px'},
        ml: {sm: '0px'} 
        }} 
        position="relative" p="0px">
        <Stack
            direction={{ xs: 'column', lg: 'row' }}
            alignItems={{ xs: 'center', lg: 'flex-start' }}
            justifyContent="space-between"
            p={{ xs: '20px', lg: '0px' }}
            gap="80px"
        >
        <Stack>
          <Typography
            color="#EFB700"
            fontWeight="800"
            fontFamily="Montserrat"
            fontStyle="italic"
            fontSize={{ xs: '36px', lg: '48px' }}
            textAlign={{ xs: 'center', lg: 'left' }}
            backgroundColor={{xs: 'rgba(0, 53, 102, 0.8)', lg: '#00000000'}}
          >
            MuscleMentor
          </Typography>
          <Typography
            color="#EFB700"
            fontFamily="Montserrat"
            fontStyle="italic"
            backgroundColor={{xs: 'rgba(0, 53, 102, 0.8)', lg: '#00000000'}}
            sx={{
              fontSize: { xs: '18px', lg: '24px' },
              textAlign: { xs: 'center', lg: 'left' },
            }}
            mb="20px"
          >
            Where Muscle meets <br /> Mentorship
          </Typography>
          <Typography
            color="#EFB700"
            fontFamily="Montserrat"
            fontSize="22px"
            lineHeight="35px"
            backgroundColor={{xs: 'rgba(0, 53, 102, 0.8)', lg: '#00000000'}}
            mt={4}
            mb={2}
            textAlign={{ xs: 'center', lg: 'left' }}
          >
            Check out the most effective exercises
          </Typography>
          <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{
              width: '180px',
              backgroundColor: '#003566',
              padding: '10px',
              fontFamily: 'Montserrat',
              margin: {lg: '0px', xs: 'auto'}
            }}
          >
            Explore Exercises
          </Button>
        </Stack>
        <SearchCard
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Stack>
    </Box>
  );
};

export default HeroBanner;
