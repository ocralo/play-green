import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeStyleProvider from '@context/ThemeContext'
import App from './App'
import GlobalStyle from './config/styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <ThemeStyleProvider>
      <App />
    </ThemeStyleProvider>
  </>
)
