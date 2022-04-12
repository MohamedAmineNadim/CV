import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function SkillObj({title, level}) {
  return (
    <div className='Skill'>
        <p className='Skill__title'>{title}</p>
        <div className='Skill__level'>
            <div className={`Star ${level < 1 && "Star-hidden"}`}><StarIcon/></div>
            <div className={`Star ${level < 2 && "Star-hidden"}`}><StarIcon/></div>
            <div className={`Star ${level < 3 && "Star-hidden"}`}><StarIcon/></div>
            <div className={`Star ${level < 4 && "Star-hidden"}`}><StarIcon/></div>
            <div className={`Star ${level < 5 && "Star-hidden"}`}><StarIcon/></div>
        </div>
    </div>
  )
}

export default SkillObj