import React from 'react'
import './User.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function User() {
    return(
        <div className="user">
            <div className="user__avatar__container">
                <img src="./images/NADIM Mohamed Amine.png" className="user__avatar"/>
            </div>
            <h1 className="user__name">Mohamed Amine Nadim</h1>
            <p className="user__title">Etudiant en recherche d'une alternance pour la rentrée 2022/23</p>
            <div className="user__infos">
                <p className="user__info">
                    <HomeIcon className='Icon__Infos'/>8 av Emile Loubat, 59300 FAMARS
                </p>
                <p className="user__info">
                    <LocalPhoneIcon className='Icon__Infos'/><a href="tel:+33">0652554983</a>
                </p>
                <p className="user__info">
                    <EmailIcon className='Icon__Infos'/><a href="mailto:nadim.mohamedamine.pro@gmail.com">nadim.mohamedamine.pro@gmail.com</a>
                </p>
                <p className="user__info">
                    <DirectionsCarIcon className='Icon__Infos'/>Permis B
                </p>
            </div>
        </div>
    )
}

export default User