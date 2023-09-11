import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProvedorContexto } from './Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProvedorContexto>
      <App />
    </ProvedorContexto>
  </React.StrictMode>,
)
