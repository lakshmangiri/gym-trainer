import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box bgcolor="#EDEDED">
      <Stack gap="40px" direction='row' justifyContent='center' alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="50px" />
        <Typography variant="h6" pb="20px" mt="20px">
          Lakshmanan B | 2023
        </Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer