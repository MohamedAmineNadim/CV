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
    </div>
  );
}

export default App;
