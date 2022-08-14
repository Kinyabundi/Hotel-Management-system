import './App.css';
import Rooms from'./Components/Rooms';
//import Hotelrooms from './Components/Hotelrooms';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { initializeApp } from "firebase/app";
import { getDatabase,ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVrQHPp5Fi1v4G0xnh_SNKnyFfP256GxY",
  authDomain: "hotel-room-booking-syste-dfbb7.firebaseapp.com",
  databaseURL: "https://hotel-room-booking-syste-dfbb7-default-rtdb.firebaseio.com/",
  projectId: "hotel-room-booking-syste-dfbb7",
  storageBucket: "hotel-room-booking-syste-dfbb7.appspot.com",
  messagingSenderId: "897763065291",
  appId: "1:897763065291:web:e41613ffe32647e6504a4e",
  measurementId: "G-MVSQ0P08FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase();

function App() {  
const [hide, sethide] = useState(true);
const [show, setshow] = useState(true);
const validateForm = (event) => {
  event.preventDefault();
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const status = document.querySelector(".status");

  let validation = "Please fill-in the above fields";
  let emailVal = "Email must inclued @ .com";
  let passVal = "Passowrd char must not be less than 8";
  if(!input1.value) {
    console.warn("validation error");
    status.classList.add("active");
    status.innerHTML = `${validation}`;
  }else{
    emailValidate();
  }
  function emailValidate() { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input1.value.match(pattern)){
      console.warn("pattern failed")
      status.classList.add("active");
      status.innerHTML = `${emailVal}`;
    }else{
      console.log("input1 validated");
      status.classList.remove("active");
      input1.classList.add("valid");
    }
   }
   if(!input2.value){
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
   }else{
     passwordValidate();
   }
   function passwordValidate() {
     if(input2.value.length < 8){
       console.warn("Passowrd char must not be less than 8");
       status.classList.add("active");
      status.innerHTML = `${passVal}`;
     }else{
      console.log("input2 validated");
      status.classList.remove("active");
      input2.classList.add("valid");
     }
   }
   if(input1.classList.contains("valid") && input2.classList.contains("valid")){
     console.log('submitted');
    //  writeUserData();
    //  function writeUserData(){
    //      const db = getDatabase();
    //      set(ref(db, 'data/'),{
    //          Email: input1.value,
    //      });
    //     }
     setTimeout(() => {
      let container = document.querySelector(".container");
      let wrapper = document.querySelector(".wrapper");
      sethide(!hide + wrapper.classList.add("hide"));
      setshow(!show + container.classList.add("show"));

       
     }, 1000);
   }
  }
  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");
    let validation = "Please fill-in the above fields";
    let emailVal = "Email must inclued @ .com";
  if(!input1.value) {
    console.warn("validation error");
    status.classList.add("active");
    status.innerHTML = `${validation}`;
  }else{
    emailValidate();
  }
  function emailValidate() { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input1.value.match(pattern)){
      console.warn("pattern failed")
      status.classList.add("active");
      status.innerHTML = `${emailVal}`;
    }else{
      console.log("input1 validated");
      status.classList.remove("active");
    }
   }
  }
  const handlePassword  = () => {
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");
  
    let validation = "Please fill-in the above fields";
    let passVal = "Passowrd characters must atleast 8";
     if(!input2.value){
        console.warn("validation error");
        status.classList.add("active");
        status.innerHTML = `${validation}`;
     }else{
       passwordValidate();
     }
     function passwordValidate() {
       if(input2.value.length < 8){
         console.warn("Passowrd char must not be less than 8");
         status.classList.add("active");
        status.innerHTML = `${passVal}`;
       }else{
        console.log("input2 validated");
        status.classList.remove("active");
       }
     }
  }
  return (
    <div className="App">
      <Rooms />
      <div className="wrapper">
        <div className="content">
          <div className="c1">
            <span>Open an Account</span>
          </div>
          <div className="form">
            <div className="status"></div>
            <form action="#" onSubmit={validateForm}>
              <div className="eInput">
              <FontAwesomeIcon className='icon' icon={faUser} />
                <input id='input1' type="text" placeholder='Enter Email Address' onKeyUp={handleMail}/>
              </div>
              <div className="eInput">
              <FontAwesomeIcon className='icon' icon={faLock} />
                <input id='input2' type="password" placeholder='Enter Password' onKeyUp={handlePassword}/>
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;