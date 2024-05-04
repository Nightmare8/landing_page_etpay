import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
//Define theme colors using styled components

const theme = {
  colors: {
    primary:{
      600: '#0876DD',
      100: '#E0F2FE',
    },
    primaryDark: {
      600: '#0056B3',
      100: '#DBEAFE',
    },
    secondary: {
      600: '#29D2D3',
      100: '#CFFAFE',
    },
    secondaryDark: {
      600: '#14B8A6',
      100: '#D1FAE5',
    },
    neutral: {
      900: '#111827',
      800: '#1F2937',
      700: '#374151',
      600: '#4B5563',
      500: '#6B7280',
      400: '#9CA3AF',
      300: '#D1D5DB',
      200: '#E5E7EB',
      100: '#F3F4F6',
    }
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
