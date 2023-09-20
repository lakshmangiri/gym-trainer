import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#001D3D', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }}>
      <Stack direction="row" justifyContent='space-around' sx={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', gap: { sm: '60px', xs: '40px'}, mt: {sm: '10px', xs: '20px'}, justifyContent: 'none'}} px="20px">
         <Link to="/">
            <img src={Logo} alt="Logo" style={{ width:'88px', height:"88px", margin: '0px 0px 0px 30px' }} />
        </Link>
        <Stack direction='row' sx={{ margin:'30px 0px' }} gap='60px' fontSize='24px' alignItems='flex-end'>
             <Link to="/" style={{ textDecoration: 'none', color:'#EFB700', fontStyle:'italic', borderBottom: '3px solid #FFFFFF' }}>
               Home
            </Link>
            <a href="#exercises" style={{ textDecoration: 'none', fontStyle:'italic', color:"#EFB700" }}> Exercises </a>
        </Stack>
     </Stack>
    </AppBar>
  )
}

export default Navbar