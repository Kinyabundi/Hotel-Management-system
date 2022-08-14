import "./Room.css";
import {useState} from 'react';
import Hotelrooms from './Hotelrooms';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
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
// const analytics = getAnalytics(app);
const database = getDatabase();
const Home = () => {
        const [valid, setvalid] = useState(true)
        const [hide, sethide] = useState(true)
        const handleSubmit = (e) =>{
            e.preventDefault();
            const book_date = document.getElementById('book-date');
            const book_time = document.getElementById('book-time');

            const leave_date = document.getElementById('leave-date');
            const leave_time = document.getElementById('leave-time');

            if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value){
                alert('Please fill all the fields');
            }else {
                writeUserData();
                function writeUserData(){
                    const db = getDatabase();
                    set(ref(db, 'data/'),{
                        bookingdate: book_date.value,
                        bookingtime: book_time.value,
                        leave_date: leave_date.value,
                        leave_time: leave_time.value,
                    });
              }     
                alert('Booked Successfully') ;
                const BookPageDiv = document.querySelector('.box');
                const container = document.querySelector('.container');
                setvalid(!valid + BookPageDiv.classList.add("show"));
                sethide(!hide + container.classList.add("hide"));
             }
        }
    return(
        <>
         <Hotelrooms />
        <div className="container">
            <div className="content">
                <div className="text">Book Now</div>
                <div className="form2">
                    <div className="txt">Date & Time of arrival</div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="inputData">
                            <input type="date" id="book-date" name=""/>
                        </div>
                        <div className="inputData">
                            <input type="time" id="book-time" name=""/>
                        </div>
                        <div className="txt">Date & Time of Departure</div>
                        <div className="inputData">
                            <input type="date" id="leave-date" name=""/>
                        </div>
                        <div className="inputData">
                            <input type="time" id="leave-time" name=""/>
                        </div>
                        <div className="book">
                            <button type="Submit">Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};
export default Home;