import './App.css';
import Timer from './Components/Timer.js';
import {name,message} from './Components/Timer.js';
function App() {
  return (
    <>
      <h1 className='text-center'>{name}</h1>
      <h2 className='text-center'>{message}</h2>
      <Timer projectName="Stop Watch" />
    </>
  );
}

export default App;
