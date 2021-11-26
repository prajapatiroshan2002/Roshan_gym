const firebaseConfig = {
    apiKey: "AIzaSyAPV9iML0J6jJw0eKGzHL2Pyvi1qW2XIZU",
    authDomain: "gym-website-project-1.firebaseapp.com",
    databaseURL: "https://gym-website-project-1-default-rtdb.firebaseio.com",
    projectId: "gym-website-project-1",
    storageBucket: "gym-website-project-1.appspot.com",
    messagingSenderId: "54043648457",
    appId: "1:54043648457:web:197cdc002069ae283a8818",
    measurementId: "G-0RLV5WSC68"
  };
firebase.initializeApp(firebaseConfig);

var contactformdb = firebase.database().ref('contactform');

document.getElementById('registrationform').addEventListener('submit', submitregForm);

function submitregForm(e){
    e.preventDefault();
    var name = getinputelementVal('name');
    var age = getinputelementVal('age');
    var gender = getinputelementVal('gender');
    var locality = getinputelementVal('locality');
    var phone = getinputelementVal('phone');
    var email = getinputelementVal('email');
    
    saveMessagefbd(name, age, gender, locality, phone, email);

    document.querySelector('.alertmsgcls').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.alertmsgcls').style.display = 'none';
    }, 2000);
}

const getinputelementVal = (id) =>{
    return document.getElementById(id).value;
};

const saveMessagefbd = (name, age, gender, locality, phone, email) => {
    var newmessageRef = contactformdb.push();
    newmessageRef.set({
        name: name,
        age: age,
        gender: gender,
        locality: locality,
        phone: phone,
        email: email
    });
};