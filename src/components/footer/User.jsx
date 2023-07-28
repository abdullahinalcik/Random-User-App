import {useEffect, useState} from 'react'
import mailSvg from "../../assets/mail.svg";
import manSvg from "../../assets/man.svg";
import womanSvg from "../../assets/woman.svg";
import manAgeSvg from "../../assets/growing-up-man.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";
import padlockSvg from "../../assets/padlock.svg";


const User = () => {
    const [userData,setUserData]=useState("")
    const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

   const newUser=()=>{
    fetch("https://randomuser.me/api/").then((resp)=>resp.json()).then((data)=>setUserData(userData.results[0])).catch((err)=>console.log(err)) 
   }

   useEffect(() => {
    newUser()
   
     return () => {
      
      
     }
   }, [])
   

  
}

export default User