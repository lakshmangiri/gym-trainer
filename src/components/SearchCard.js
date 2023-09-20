import React, { useState, useEffect } from 'react'
import { Button, Stack, Box, TextField, Typography} from "@mui/material"
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchCard = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
  
    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  
        setBodyParts(['all', ...bodyPartsData]);
      }
  
      fetchExercisesData();
    }, [])

      // Async means that the function is going to take some time and gonna pull some data.
  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search) 
        || exercise.equipment.toLowerCase().includes(search) 
        || exercise.bodyPart.toLowerCase().includes(search) 
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Box
    sx={{
      borderRadius: '30px',
      width: '800px',
      height: '400px',
      backgroundColor: '#001D3D',
    }}
  >
    <Stack sx={{ p: { xs: '20px', sm: '40px' } }}>
        <Typography
            color="#EFB700"
            fontWeight="500"
            fontFamily="Montserrat"
             // Responsive font size
            sx={{
                fontSize: { xs: '18px', sm: '22px' },
                textAlign:{ xs: 'center', lg: 'left' }
            }}
        >
        Search for exercises to build muscle!
      </Typography>
      <Box position="relative" mt="20px" mb="70px" gap='50px'>
        <TextField
          height={{ xs: '56px', sm: '76px' }} // Responsive height
          sx={{
            input: {
              fontSize: { xs: '14px', sm: '18px' }, // Responsive font size
              border: 'none',
              borderRadius: '4px',
              color: '#FFFFFF',
            },
            width: {lg: '550px', xs:'500px'},
            backgroundColor: '#003566',
            color: '#FFFFFF',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises..."
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FFC300',
            borderRadius: '20px',
            color: '#001D3D',
            textTransform: 'none',
            width: {lg: '145px', xs:'130px'},
            fontWeight: '700',
            fontSize: { xs: '14px', sm: '22px' }, // Responsive font size
            height: '56px',
            position: 'absolute',
            marginLeft: { xs: '0', sm: '20px' }, // Responsive margin
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      {/* Horizontal scroll bar */}
      <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
    </Stack>
  </Box>
  )
}

export default SearchCard