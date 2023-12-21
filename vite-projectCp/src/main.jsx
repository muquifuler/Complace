import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Auth0Provider
      domain='dev-liel585nw8ixqbzz.us.auth0.com'
      clientId='slvJbwPF1155lcNXmCIhA7SlurlJmMu2'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>

)
