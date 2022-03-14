// import logo from './logo.svg';
import './App.css';
import { AddHouse } from './Components/AddHouse/AddHouse';
import {useState} from "react";
import { Rentals } from './Components/Rentals/Rentals';

function App() {

  const [houses, setHouses] = useState([]);


  return (
    <div className="App">
      < AddHouse setHouses = {setHouses} />
      {houses.map((house)=>{
        return <Rentals house = {house} key = {house.id} />
      })}
    </div>
  );
}

export default App;
