import React from 'react'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StraightenIcon from '@mui/icons-material/Straighten';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

function Interests() {
  return (
    <div className='Skills'>
        <h2>Centres d'intérêts</h2>
        <ul>
            <li>Football <SportsSoccerIcon className='Icon'/></li>
            <li>Piano <StraightenIcon className='Icon'/></li>
            <li>Voyages <AirplaneTicketIcon className='Icon'/></li>
        </ul>
    </div>
  )
}

export default Interests