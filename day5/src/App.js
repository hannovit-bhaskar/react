import './App.css';
import StarWars from './Components/StarWars';
import Timer from './Components/Timer.js';
import {name,message} from './Components/Timer.js';
function App() {
  return (
    <>
      <h3 className='text-center'>{name}</h3>
      <h4 className='text-center'>{message}</h4>
      <Timer projectName="Stop Watch" />
      <StarWars projectName="Featch StarWar API"/>
    </>
  );
}

export default App;
