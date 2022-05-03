import React from 'react'
import Formation from './Formation'

function Profile() {
  return (
    <div className="Profile">
        {/* Profil personnel */}
        <div className="Profile__Infos">
            <h1 className="Main__Titles">Profil</h1>
            <p>Etudiant sérieux, motivé et engagé, je suis passionné par le monde de l'IT depuis mon jeune âge. Je cherche à approfondir mes compétences et les appliquer dans le cadre d'une alternance dans le Devops et plus précisémment le développement d'applications web et/ou mobiles.</p>
        </div>
        {/* Formations */}
        <div className="Profile__Infos">
            <h1 className="Main__Titles">Formations</h1>
            <Formation titre="Bachelor en DevOps" date="sept. 2022 - août 2023" etablissement="EPSI, Lille" desc=""/>
            <Formation titre="DEUST Informatique de gestion des Systèmes d'Information" date="sept. 2021 - présent" etablissement="INSA Hauts-de-France, Valenciennes" desc="Acquisition de compétences générales en développement (Web, Mobile, Applications...) et en administration informatique (Systèmes, Réseaux, Scripting...)"/>
            <Formation titre="Classes préparatoires intégrées" date="sept. 2019 - août 2021" etablissement="INSA Hauts-de-France, Valenciennes" desc="Acquisition de bases scientifiques (mathématiques, physique, physique appliquée, informatique) pour le métier d'ingénieur"/>
        </div>
        {/* Réalisations */}
        <div className="Profile__Infos">
          <h1 className="Main__Titles">Réalisations</h1>
          <div className="Realisations">
            <ul>
              <li>Un projet personnel en <b>Programmation orientée objet</b>: développement d'un jeu vidéo de plateformes (du styles Super Mario Bros) sous Python avec une GUI.</li>
              <li>Un projet de groupe en <b>Génie mécanique et énergétique</b>: expliquer l'ovalisation prématurée d'un piston en émettant des hypothèses et en analysant l'aspect mécanique du moteur ainsi que les aspects thermodynamiques et chimiques du processus de combustion.</li>
              <li>Deux projets en <b>Génie industriel</b>:
                <br></br>
                1) Développer une commande en altitude de drone miniature (Parrot Minidrones) pour lire des codes-barres afin de faciliter l'inventaire et la recherche de produits dans les entrepôts.
                <br></br>
                2) Montage d'un robot (EV3 Mindstorms) et programmation de celui-ci afin de trouver la trajectoire la plus rapide vers une destination tout en évitant les obstacles.
              </li>
            </ul>
          </div>
        </div>
        {/* Expérience professionnelle */}
        <div className="Profile__Infos">
          <h1 className="Main__Titles">Expérience professionnelle</h1>
          <Formation titre="Stage Développeur Fullstack" date="mai 2022 - juil 2022" etablissement="Leroy Merlin, Lezennes" desc="Stage de fin d'études DEUST IOSI. Contrôle du balisage et de l'étiquettage en rayon des produits. Traitement de la data et automatisation du processus de correction de la data."/>
          <Formation titre="Employé polyvalent" date="juil 2021 - févr 2022" etablissement="Domino's Pizza, Valenciennes" desc="Job étudiant. Ouverture/Fermeture du magasin. Prise de commandes et livraison."/>
          <Formation titre="Stage ouvrier" date="juin 2019 - sept. 2019" etablissement="ZEALOUS, Rabat, Maroc" desc="Découverte du monde de l'industrie. Manipulation de machines de formage à chaud de moules en plastique, manipulation de machines de découpe manuel et au laser, inventaire des dépôts et rapport des tâches quotidiennes des ouvriers."/>
        </div>
    </div>
  )
}

export default Profile