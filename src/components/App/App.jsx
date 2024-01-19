// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
// import googleButton from './assets/google_signin_buttons/web/btn_google_signin_dark_pressed_web.png'
// Components
import Header from '../Header/Header.jsx'
import Main from '../Main/index.jsx'
import Nav from '../Nav/Nav.jsx';

//Pages


function App() {

  return (
    <>
      <div className = 'App'>
        <Nav />
        <Header />
        <Main />
        
      </div>
    </>
  )
}

export default App;
