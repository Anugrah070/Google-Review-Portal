import { useState } from 'react'
import LoginButton from './Components/login'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './Components/logout';
import HomePage from './Components/homepage';

import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/dashboard';


function App() {

  const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
  console.log("user",user);
  return (

    <>
      {isAuthenticated?<Dashboard/>:<HomePage/>}
      
      
    </>
  )
}

export default App
