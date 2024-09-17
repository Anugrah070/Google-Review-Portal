import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Dashboard from './Components/dashboard.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-e47u0jl2xx478plh.us.auth0.com"
    clientId="izAGenFSTr7HGlnqZAlwpGenipLEoE7H"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

      
    </Routes>
    </BrowserRouter>

    
  </Auth0Provider>,
)
