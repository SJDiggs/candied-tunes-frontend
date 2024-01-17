// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
// import googleButton from './assets/google_signin_buttons/web/btn_google_signin_dark_pressed_web.png'
// Components
import Header from './components/Header/Header.jsx'
import Main from './components/Main/index.jsx'

//Pages


// import './App.css'
// function navigate(url){
//   window.location.href = url
// }
// async function auth(){
//   console.log('React AUTH FUNCTION')
//     const response = await fetch('http://localhost:4000/request',{method:'post'});
//     // const response = await fetch('http://127.0.0.1:4000/request',{method:'post'});
//     const data = await response.json();
//     console.log(data);
//     navigate(data.url);
//   }
//<h1>Google Login Button Tester</h1>
  //       <button type = "button" onClick={()=> auth()}>
  //          <img src={googleButton} alt = "Google sign in"></img>
  //       </button> */}

function App() {

  return (
    <>
      <div className = 'App'>
        <Header />
        <Main />
        
      </div>
    </>
  )
}

export default App;
