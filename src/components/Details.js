import React from 'react'
import { Typography, Stack, Button, Box } from '@mui/material';
import BodyPartImage from '../assets/icons/bodyPart.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Details = ( {exerciseDetail} ) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

  return (
    <Stack
    gap={{ xs: '20px', sm: '50px', lg: '150px' }} // Responsive gap
    sx={{
      backgroundColor: '#003566',
      flexDirection: { xs: 'column', lg: 'row' }, // Column layout on mobile, row layout on larger screens
      p: { xs: '20px', lg: '150px 100px' }, // Responsive padding
      alignItems: { xs: 'center', lg: 'center' }, // Center content vertically
      justifyContent: 'center', // Center content horizontally
      textAlign: { xs: 'center', lg: 'left' }, // Center text on mobile, left-align on larger screens
    }}
  >
    <Box
        justifyContent="center"
        sx={{
        width: {xs: '300px', lg: '680px', xl: '550px'},
        height: {xs: '300px', lg: '500px'},
        backgroundColor: '#001D3D',
        borderRadius: '20px',
        margin: {xs:'100px 0px 0px 0px', lg: '0px'}
        }}
    >
      <img src={gifUrl} alt="Name" loading="lazy" className="detail-image" />
    </Box>
    <Stack
       sx={{ 
        width: {lg:'800px', xs: '600px'}, 
        gap: { lg: '35px', xs: '30px' }
        }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        color="#FFF"
        fontFamily="Montserrat"
        fontSize={{ xs: '22px', lg: '32px' }} // Responsive font size
      >
        {name}
      </Typography>
      <Typography
        color="#FFF"
        fontFamily="Montserrat"
        fontSize={{ xs: '14px', lg: '18px' }} // Responsive font size
      >
        Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
      </Typography>
      {extraDetail.map((item) => (
        <Stack key={item.name} direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: '#EFB700',
              borderRadius: '50%',
              width: '64px',
              height: '64px'
            }}
          >
            <img src={item.icon} alt={bodyPart} style={{ width: '32px', height: '32px'}} />
          </Button>
          <Typography
            color="#FFF"
            fontFamily="Montserrat"
            textTransform="capitalize"
            fontSize={{ xs: '12px', lg: '14px' }} // Responsive font size
          >
            {item.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Stack>
  )
}

export default Details