import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='547643356265-io0isauf98o3k0g6jlrc4rvkssnlgcpg.apps.googleusercontent.com'>
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>
  </GoogleOAuthProvider>
)
