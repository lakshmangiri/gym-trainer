import React from 'react'
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" align="center" width="100%">
        <InfinitySpin color="#EFB700" />
    </Stack>
  )
}

export default Loader