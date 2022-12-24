import React, { useState } from "react";
import {Box, Typography} from '@mui/material'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars'
import "./App.css";
import { height, width } from '@mui/system';
import Calendar from "../Calendar/Calendar";
const RightBar = () => {
  return (
    <Box className='rightBar'>
        <Box sx={{mt:{lg:'150px'},ml:{lg:'27px'} } } height='150px' width="270px" backgroundColor='#FFFFFF' borderRadius='10px' position='absolute'>
        <Typography sx={{mt:{lg:'10px'},ml:{lg:'110px'}}} fontFamily="Poppins" fontStyle="medium" fontWeight='700' fontSize="20px">Status</Typography>
        <Box className='inner-circle'>
        <Typography sx={{mt:{lg:'32px'},ml:{lg:'37px'} } } fontFamily="Poppins" fontStyle="medium" fontWeight='700' fontSize="20px">NA</Typography>
        </Box>
        <Typography sx={{mt:{lg:'20px'},ml:{lg:'140px'} } }>Applied</Typography>
        <Typography sx={{mt:{lg:'10px'},ml:{lg:'140px'} } }>Unseen</Typography>
        </Box>
      
        <box className='calendar-box'>
        {/* <Calendar /> */}
        </box>
        

    </Box>
   
  )
}

export default RightBar;