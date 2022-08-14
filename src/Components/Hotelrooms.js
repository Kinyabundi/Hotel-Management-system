import './HotelRooms.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVrQHPp5Fi1v4G0xnh_SNKnyFfP256GxY",
  authDomain: "hotel-room-booking-syste-dfbb7.firebaseapp.com",
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
const Hotelrooms = () => {
    let Hotels = [
        {
            name: "Room 1",
            price: "100",
            image: "https://media.istockphoto.com/photos/3d-render-of-luxury-hotel-room-picture-id1024284056?k=20&m=1024284056&s=170667a&w=0&h=s_Akk0H1MIqKKdHW5EVH-svHZT55R2-ZKlFPBZN5ewo=",
        },

        {
            name: "Room 2",
            price: "200",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            name: "Room 3",
            price: "300",
            image: "https://thumbs.dreamstime.com/b/hotel-room-26001164.jpg",
        },
        {
            name: "Room 4",
            price: "400",
            image: "https://p4.wallpaperbetter.com/wallpaper/844/53/319/miami-florida-hotel-room-wallpaper-preview.jpg",
        },
    ]
    //console.log(Hotels[1].price)
const bookHotel1 = (event) =>{
    console.log(event);
    const ImageTarget = document.querySelector('#targetImage');
    const nameTarget = document.querySelector('#targetName');
    const priceTarget = document.querySelector('#targetPrice');
    const cards = document.querySelector(".cards_box");
    const request = document.querySelector(".request");

    ImageTarget.src = Hotels[0].image;
    nameTarget.innerHTML = Hotels[0].name;
    priceTarget.innerHTML = '$' + Hotels[0].price;
    cards.style.display = "none";
    request.style.display = "block";

    writeUserData();
    function writeUserData() {
        const db = getDatabase();
        set(ref(db, 'booking/'), {
        HotelImage: Hotels[0].image,
        HotelName: Hotels[0].name,
        HotelPrice: '$' + Hotels[0].price,
        });
    }
}
const bookHotel2 = (event) =>{
    console.log(event);
    const ImageTarget = document.querySelector('#targetImage');
    const nameTarget = document.querySelector('#targetName');
    const priceTarget = document.querySelector('#targetPrice');
    const cards = document.querySelector(".cards_box");
    const request = document.querySelector(".request");

    ImageTarget.src = Hotels[1].image;
    nameTarget.innerHTML = Hotels[1].name;
    priceTarget.innerHTML = '$' + Hotels[1].price;
    cards.style.display = "none";
    request.style.display = "block";

    writeUserData();
    function writeUserData() {
        const db = getDatabase();
        set(ref(db, 'booking/'), {
        HotelImage: Hotels[1].image,
        HotelName: Hotels[1].name,
        HotelPrice: '$' + Hotels[1].price,
        });
    }
}
const bookHotel3 = (event) =>{
    console.log(event);
    const ImageTarget = document.querySelector('#targetImage');
    const nameTarget = document.querySelector('#targetName');
    const priceTarget = document.querySelector('#targetPrice');
    const cards = document.querySelector(".cards_box");
    const request = document.querySelector(".request");

    ImageTarget.src = Hotels[2].image;
    nameTarget.innerHTML = Hotels[2].name;
    priceTarget.innerHTML = '$' + Hotels[2].price;
    cards.style.display = "none";
    request.style.display = "block";

    writeUserData();
    function writeUserData() {
        const db = getDatabase();
        set(ref(db, 'booking/'), {
        HotelImage: Hotels[2].image,
        HotelName: Hotels[2].name,
        HotelPrice: '$' + Hotels[2].price,
        });
    }
}
const bookHotel4 = (event) =>{
    console.log(event);
    const ImageTarget = document.querySelector('#targetImage');
    const nameTarget = document.querySelector('#targetName');
    const priceTarget = document.querySelector('#targetPrice');
    const cards = document.querySelector(".cards_box");
    const request = document.querySelector(".request");

    ImageTarget.src = Hotels[3].image;
    nameTarget.innerHTML = Hotels[3].name;
    priceTarget.innerHTML = '$' + Hotels[3].price;
    cards.style.display = "none";
    request.style.display = "block";

    writeUserData();
    function writeUserData() {
        const db = getDatabase();
        set(ref(db, 'booking/'), {
        HotelImage: Hotels[3].image,
        HotelName: Hotels[3].name,
        HotelPrice: '$' + Hotels[3].price,
        });
    }
}

const request = (event) =>{
    console.log(event);
    const ImageTarget = document.querySelector('#targetImage');
    const nameTarget = document.querySelector('#targetName');
    const priceTarget = document.querySelector('#targetPrice');
    const cards = document.querySelector(".cards_box");
    const request = document.querySelector(".request");
    request.style.display = "none";
    cards.style.display = "block";
    alert("Your request has been sent");

    ImageTarget.src = '';
    nameTarget.innerHTML = '';
    priceTarget.innerHTML = '';

}

    return(
       <div className="box">
        <div className="content">
            <div className="text">Find the Room of your choice</div>
            <div className="target">
                <div className="trgt">
                    <div className="card">
                        <img src="" alt="" id="targetImage" />
                        <div className="hotel_name" id="targetName"></div>
                        <div className="price" id="targetPrice"></div>
                    </div>
                    <div className="cards">
                        <div className="cards_box">
                            <div className="card" onClick = {bookHotel1}>
                                <img src={Hotels[0].image} alt="hotel1"/>
                                <div className="hotel_name">{Hotels[0].name}</div>
                                <div className="price">{'$' + Hotels[0].price}</div>
                            </div>
                            <div className="card" onClick = {bookHotel2}>
                                <img src={Hotels[1].image} alt="hotel2"/>
                                <div className="hotel_name">{Hotels[1].name}</div>
                                <div className="price">{'$' + Hotels[1].price}</div>
                            </div>
                            <div className="card" onClick = {bookHotel3}>
                                <img src={Hotels[2].image} alt="hotel3"/>
                                <div className="hotel_name">{Hotels[2].name}</div>
                                <div className="price">{'$' + Hotels[2].price}</div>
                            </div>
                            <div className="card" onClick = {bookHotel4}>
                                <img src={Hotels[3].image} alt="hotel4"/>
                                <div className="hotel_name">{Hotels[3].name}</div>
                                <div className="price">{'$' + Hotels[3].price}</div>
                            </div>
                        </div>
                        <div className="request">
                            <button className="btn" onClick={request}>Request</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
       </div>
    );
}
export default Hotelrooms;