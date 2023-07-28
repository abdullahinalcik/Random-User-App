import React from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import User from "./components/footer/User";
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti"

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  
  const [userData, setUserData] = useState("");
  const [dom1, setDom1] = useState("");
  const [dom2, setDom2] = useState("");
  const [tr, setTr] = useState([]);

const handleDelete=(id)=>{
  setTr(tr.filter((item)=>item.id!==id))
}


 const handleClick=()=>{

    const newTr = {
      id: userData?.id?.value,
      name: userData?.name.first,
      email: userData?.email,
      cell: userData?.cell,
      age: userData?.dob?.age,
    };
    tr.some((user) => user.id === newTr.id)
    ? alert("This user is already added.")
    : setTr([...tr, newTr]);

  }


  const newUser = () => {
    fetch("https://randomuser.me/api/")
      .then((resp) => resp.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    newUser();
  }, []);

  return (
    <main>
      <div className="block bcg-orange"></div>
      <div className="block">
        <div className="container">
          <img
            src={userData?.picture?.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">{dom1}</p>
          <p className="user-value">{dom2}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseEnter={() => {
                setDom1(` Hello! I'm `);
                setDom2(` ${userData?.name?.first} ${userData?.name?.last}`);
              }}
            >
              <img 
              src={userData?.name?.gender=="male"?manSvg : womanSvg} 
              alt="user" id="iconImg" />
            </button>
            <button className="icon" data-label="email" 
            onMouseEnter={() => {
              setDom1(` My email adress is `);
              setDom2(` ${userData?.email}`);
            }}>
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age" 
              onMouseEnter={() => {
                setDom1(` My age is`);
                setDom2(` ${userData?.dob?.age}`);
              }}>
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street"
             onMouseEnter={() => {
              setDom1(` My country is`);
              setDom2(` ${userData?.location?.country}`);
            }}>
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone"  onMouseEnter={() => {
              setDom1(` My phone number is`);
              setDom2(` ${userData?.phone}`);
            }}>
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password" onMouseEnter={() => {
              setDom1(` My password is`);
              setDom2(` ${userData?.login?.password}`);
            }}>
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={newUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={handleClick}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
                <th className="th"></th>
              </tr>
            </thead>
            <tbody>
            {/* <tr className="body-tr">
                <td>{userData?.name?.first} {userData?.name?.last}</td>
                <td> {userData?.email}</td>
                <td> {userData?.phone}</td>
                <td> {userData?.dob?.age}</td>
              </tr> */}
              {/* {tr} */}
              {tr.map((item) => (
                <tr className="body-tr" key={item.id}>
                  <td className="th">{item.name}</td>
                  <td className="th">{item.email}</td>
                  <td className="th">{item.cell}</td>
                  <td className="th">{item.age}</td>
                  <td> <TiDelete
                className="text-danger fs-1 delete"
                width={"5px"}
                type="button"
                onClick={() => handleDelete(item.id)}
              /></td>
                </tr>
              ))}
            
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      {/* <User/> */}
    </main>
  );
}

export default App;
