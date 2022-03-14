// import logo from './logo.svg';
import './App.css';
import { AddHouse } from './Components/AddHouse/AddHouse';
import {useEffect, useState} from "react";
import { Rentals } from './Components/Rentals/Rentals';

function App() {

  const [houses, setHouses] = useState([]);

  async function getHouses(){
    const res = await fetch("http://localhost:8080/houses", {
      method : "GET"
    });
    const res_data = await res.json();
    setHouses(res_data);
  }

  useEffect(()=>{
    getHouses();
  },[]);

  return (
    <div className="App">
      < AddHouse setHouses = {setHouses} />
      
      <Rentals houses = {houses} />
    </div>
  );
}

export default App;
