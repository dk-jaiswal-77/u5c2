import "./Rentals.css";
import { useState } from "react";

export const Rentals = ({houses, updateHouses}) => {
  
  let new_houses = [...houses]; // important point 

  function sortById()
  {
    new_houses.sort((a,b) => {
      return(Number(a.id) - Number(b.id));
    });
    updateHouses(new_houses);
  }

  function sortByRentAsc()
  {
    new_houses.sort((a, b)=>{
      return (Number(a.rent)- Number(b.rent))
    });
    updateHouses(new_houses);
  }

  function sortByRentDesc()
  {
    new_houses.sort((a, b)=>{
      return(Number(b.rent)-Number(a.rent));
    });
    updateHouses(new_houses);
  }

  function sortByAreaAsc()
  {
    new_houses.sort((a, b)=>{
      return(Number(a.areaCode) - Number(b.areaCode));
    });
    updateHouses(new_houses);
  }

  function sortByAreaDesc()
  {
    new_houses.sort((a, b)=>{
      return(Number(b.areaCode) - Number(a.areaCode));
    });
    updateHouses(new_houses);
  }

  let timeout_id = null;

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={sortById} >Sort by ID</button>
        <button className="sortByRentAsc" onClick={sortByRentAsc}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={sortByRentDesc} >Rent High to low</button>
        <button className="sortByAreaAsc" onClick={sortByAreaAsc} >Area Low to high</button>
        <button className="sortByAreaDesc" onClick={sortByAreaDesc} >Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address" 
        onChange={({target})=>{
          let value = target.value;
          if(timeout_id === null)
          {
              timeout_id = setTimeout((value)=>{
              new_houses = new_houses.filter((house)=>{
                let address = house.address;
                return(address.includes(value));
              });
              updateHouses(new_houses);
            }, 800);
          }
          else
          {
            clearTimeout(timeout_id);
            timeout_id = setTimeout((value)=>{
              new_houses = new_houses.filter((house)=>{
                let address = house.address;
                return(address.includes(value));
              });
              updateHouses(new_houses);
            }, 800);
          }
        }}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {house.preferredTenant}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
