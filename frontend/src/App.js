import React from 'react'
import './App.css'
import { useEffect } from 'react'
import LoginButton from './auth/Login'
import LogoutButton from './auth/Logout'
import {gapi} from "gapi-script"

// const clientId = process.env.GOOGLE_CLIENT_ID;
const clientId = '1083364487049-876c0qc973fc5a0pjatqnh59pc9nkf7s.apps.googleusercontent.com'

function App() {
  
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start)
  })

  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
    </div>
  )
}

export default App