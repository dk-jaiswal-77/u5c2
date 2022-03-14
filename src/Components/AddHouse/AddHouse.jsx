import {useState} from "react";

export const AddHouse = ({setHouses}) => {

  const [formData, setFormData] = useState({
    name : "",
    ownerName : "",
    address : "",
    areaCode : "",
    rent : "",
    preferredTenant : "",
    bachelor : false,
    married : false,
    image : ""
  });


  function handleChange(e){
    if(e.target.className === "married" || e.target.className ==="bachelor")
    {
      setFormData({...formData, [e.target.className] : e.target.checked, preferredTenant : (e.target.checked) ? e.target.className : ""});
    }
    else
    {
      const {className, value} = e.target;
      setFormData({...formData, [className] : value});
    }
  }

  async function getHouses()
  {
    const res = await fetch("http://localhost:8080/houses");
    const res_data = await res.json();
    setHouses(res_data);
  }

  async function saveHouse(){
    await fetch("http://localhost:8080/houses", {
      method : "POST",
      body : JSON.stringify(formData),
      headers : {
        "Content-Type" : "application/json"
      }
    });
    getHouses();
  }

  function handleSubmit(e){
    e.preventDefault();
    saveHouse();
  }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={formData.name} required onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName} type="text" className="ownerName" required onChange={handleChange} />
        <br />
        <label>address</label>
        <input value={formData.address} type="text" className="address" required onChange={handleChange} />
        <br />
        <label>areaCode</label>
        <input value={formData.areaCode} type="text" className="areaCode" required onChange={handleChange} />
        <br />
        <label>rent</label>
        <input value={formData.rent} type="text" className="rent" required onChange={handleChange} />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={formData.bachelor} type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label>married</label>
        <input checked={formData.married} type="checkbox" className="married" onChange={handleChange} />
        <br />
        <label>image</label>
        <input value={formData.image} type="text" className="image" required onChange={handleChange} />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
