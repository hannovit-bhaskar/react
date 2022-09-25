import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import Navbar from "./components/Navbar";
import Day3 from "./components/day3/Day3";
import Day4 from "./components/day4/Day4";
import Day5 from "./components/day5/Day5";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="day3" element={<Day3/>} />
            <Route path="day4" element={<Day4/>} />
            <Route path="day5" element={<Day5/>} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
