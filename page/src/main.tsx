import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProvedorContexto } from './Context.tsx'
import { CookiesProvider } from 'react-cookie';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ProvedorContexto>
        <App />
      </ProvedorContexto>
    </CookiesProvider>
  </React.StrictMode>,
)
