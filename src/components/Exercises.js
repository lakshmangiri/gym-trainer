import React, { useState, useEffect } from 'react'    
import { Box, Typography, Stack } from '@mui/material'
import { Pagination } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import { exerciseOptions,fetchData } from '../utils/fetchData' 

const Exercises = ({ exercises, setExercises, bodyPart }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if(bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercisesData);
        }

        fetchExercisesData(); 
    }, [bodyPart]);
    
    console.log("Current Page: ", currentPage);
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    console.log(indexOfFirstExercise);
    console.log(indexOfLastExercise);
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth'})
    }



  return (
    <Box 
        id="exercises" 
        sx= {{ mt: { lg: '280px' }}}
        p="20px"
    >
        <Typography 
            variant='h4' 
            fontWeight={600} 
            color="#EFB700" 
            fontFamily="Montserrat" 
            mb="40px"
            sx={{ marginLeft: {xs: '40px', lg: '20px'}, fontSize: { xs: '14px', lg: '26px' } }}>
            Showing results
        </Typography>
        <Stack 
            direction="row"
            sx= {{ gap: {lg: '110px', xs:'50px'}}}
            flexWrap="wrap"
            justifyContent="center"
        >
            {currentExercises.map((exercise, index) =>  (
                <ExerciseCard key={index} exercise={exercise} />
            ))}
        </Stack>
        <Stack  mt="100px" alignItems="center">
            {exercises.length > 9 && (
                <Pagination
                    color="primary"
                    sx={{
                        '& .MuiPaginationItem-page': {
                          color: 'white', // Change the color of page numbers to white
                        },
                        '& .MuiPaginationItem-ellipsis': {
                            color: 'white', // Change the color of ellipsis (...) to white
                          },
                          '& .MuiPaginationItem-root': {
                            color: 'white', // Change the color of all elements to white
                          },
                    }}
                    defaultPage={1}
                    count={Math.ceil(exercises.length / exercisesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"

                    />
            )}

        </Stack>
    </Box>
  )
}

export default Exercises
