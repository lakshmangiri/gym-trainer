import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgColor="#EDEDED">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="20px" mt="20px">
          Lakshmanan B
        </Typography>
        <Typography>
          Full credits to JavaScript Mastery. 
        </Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer