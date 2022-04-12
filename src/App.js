import './App.css';
import './components/User';
import User from './components/User';
import Skills from './components/Skills';
import Profile from './components/Profile';


function App() {

  return (
    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
            <a href="./files/CV NADIM Mohamed Amine.pdf" download="CV NADIM Mohamed Amine.pdf">Print</a>
          </div>
          <User/>
          <Skills/>
        </div>
        <div className="main">
          <Profile/>
        </div>
      </div>

      {/*react, material ui, react-html2pdf*/}
      {/*variables css*/}
      {/*colonne de gauche :*/}
        {/*détails perso - user*/}
        {/*compétences - skills*/}
        {/*langues - skills*/}
        {/*centres d'intêréts - interests*/}

     {/*colonne de droite :*/}
        {/*profil - profile*/}
        {/*formations - academic bg*/}
        {/*expériences pro - experiences*/}

      {/*light/dark mode*/}
      {/*génération de pdf*/}
    </div>
  );
}

export default App;
