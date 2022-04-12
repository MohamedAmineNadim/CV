import React from 'react'
import './Skills.css'
import SkillObj from './SkillObj'
import Interests from './Interests'

function Skills() {
  return <>
    <div className='Skills'>
        <h2>Web Apps</h2>
        <SkillObj title='HTML/CSS' level='5'/>
        <SkillObj title='PHP' level='5'/>
        <SkillObj title='JAVASCRIPT' level='4'/>
        <SkillObj title='REACT.JS/REACT NATIVE/NODE' level='4'/>
        <h2>Programmation POO/Procédurale</h2>
        <SkillObj title='PYTHON' level='5'/>
        <SkillObj title='VB.NET' level='5'/>
        <SkillObj title='JAVA' level='4'/>
        <SkillObj title='C/C++' level='3'/>
        <h2>Systèmes et Réseaux</h2>
        <SkillObj title='LINUX DEBIAN' level='4'/>
        <SkillObj title='WINDOWS SERVER' level='3'/>
        <SkillObj title='APACHE' level='4'/>
        <SkillObj title='NMAP' level='3'/>
    </div>
    <div className='Skills'>
        <h2>Langues</h2>
        <SkillObj title='Français' level='5'/>
        <SkillObj title='Anglais' level='5'/>
        <SkillObj title='Arabe' level='5'/>
        <SkillObj title='Allemand' level='2'/>
    </div>
    <div className='Skills'>
        <Interests/>
    </div>
  </>
}

export default Skills