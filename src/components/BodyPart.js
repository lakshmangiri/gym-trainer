import React from 'react'
import { Stack, Typography } from '@mui/material'

import BodyImage from '../assets/icons/body.png'
import CardioImage from '../assets/icons/cardio.png'
import BackImage from '../assets/icons/back.png'
import ChestImage from '../assets/icons/chest.png'
import LowerArmsImage from '../assets/icons/lowerArm.png'
import LowerLegsImage from '../assets/icons/calf.png'
import NeckImage from '../assets/icons/neck.png'
import ShouldersImage from '../assets/icons/shoulder.png'
import UpperArmsImage from '../assets/icons/upperArm.png'
import UpperLegsImage  from '../assets/icons/upperLeg.png'
import WaistImage from '../assets/icons/abs.png'
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    
    console.log("Item:", item);
    console.log("Item:", typeof(item));

    // Define the icon mapping
    const bodyPartsIcon = [
        {
            icon: BodyImage,
            name: 'all'
        },
        {
            icon: BackImage,
            name: 'back'
        },
        {
            icon: CardioImage,
            name: 'cardio'
        },
        {
            icon: ChestImage,
            name: 'chest'
        },
        {
            icon: LowerArmsImage,
            name: 'lower arms'
        },
        {
            icon: LowerLegsImage,
            name: 'lower legs'
        },
        {
            icon: NeckImage,
            name: 'neck'
        },
        {
            icon: ShouldersImage,
            name: 'shoulders'
        },
        {
            icon: UpperArmsImage,
            name: 'upper arms'
        },
        {
            icon: UpperLegsImage,
            name: 'upper legs'
        },
        {
            icon: WaistImage,
            name: 'waist'
        }
    ];  

    // Get the icon path for the current item
   const getIconpath = (itemName) => {
    const matchingItem = bodyPartsIcon.find(
        (bodyPart) => bodyPart.name === itemName
    );

    if(matchingItem) {
        return matchingItem.icon;
    } 
   }

  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx= {{  
            borderTop: bodyPart === item ? '4px solid #FF2625': '',
            backgroundColor: '#003566',
            borderRadius: '15px',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            gap: '15px' 
        }} 
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
        }}
    >
        <img 
            src={getIconpath(item)} 
            alt="dumbbell" 
            style={{ width: '40px', height: '40px' }} 
        />
        <Typography fontSize="14px" fontFamily='Montserrat' color="#EFB700" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart