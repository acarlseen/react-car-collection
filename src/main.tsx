import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'

import { Auth0Provider } from '@auth0/auth0-react'
import { auth0Config } from './config/auth0.config.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
  domain={auth0Config.domain}
  clientId={auth0Config.clientID}
  authorizationParams={{
    redirect_uri: window.location.origin
      }}>
    <React.StrictMode>
      <App />
  </React.StrictMode>,
    </Auth0Provider>
)
