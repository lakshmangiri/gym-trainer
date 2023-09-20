import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'

const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);

  const { id } = useParams(); 

  useEffect(() => {
    const fetchExerciseData = async() => {
      const exerciseDbURL = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com';

      // 1st API call
      const exerciseDetailData = await fetchData(`${exerciseDbURL}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // 2nd API call
      const exerciseVideosData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      // 3rd API call
      const targetMuscleExercisesData = await fetchData(`${exerciseDbURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      // 4th API call
      const equipmentExercisesData = await fetchData(`${exerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentMuscleExercises(equipmentExercisesData);
    }

    fetchExerciseData();
  }, [id]);

  return (
    <Box mb={5}>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentMuscleExercises} />
      
    </Box>
  )
}

export default ExerciseDetails