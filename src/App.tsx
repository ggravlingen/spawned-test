import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material'
import { useMemo } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './hooks/useTheme'

import { NavigationBar } from '@/components'
import { Home, OpenSourceProjects } from '@/pages'

const AppContent = () => {
  const { isDarkMode } = useTheme()

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            main: isDarkMode ? '#4a90a4' : '#2c5f6b', // Nordic teal/blue-gray
            light: isDarkMode ? '#7bb8c9' : '#4a90a4',
            dark: isDarkMode ? '#2c5f6b' : '#1a3f48',
            contrastText: '#ffffff',
          },
          secondary: {
            main: isDarkMode ? '#8b9dc3' : '#5d7298', // Muted slate blue
            light: isDarkMode ? '#b8c5db' : '#8b9dc3',
            dark: isDarkMode ? '#5d7298' : '#3d4f6b',
            contrastText: '#ffffff',
          },
          background: {
            default: isDarkMode ? '#0f1419' : '#f8f9fa', // Deep charcoal vs light gray
            paper: isDarkMode ? '#1a2027' : '#ffffff',
          },
          text: {
            primary: isDarkMode ? '#e8eaed' : '#1a1a1a',
            secondary: isDarkMode ? '#9aa0a6' : '#5f6368',
          },
          error: {
            main: isDarkMode ? '#cf6679' : '#d32f2f',
          },
          warning: {
            main: isDarkMode ? '#ffb74d' : '#ed6c02',
          },
          info: {
            main: isDarkMode ? '#4a90a4' : '#0288d1',
          },
          success: {
            main: isDarkMode ? '#4caf50' : '#1b5e20',
          },
          divider: isDarkMode ? '#3c4043' : '#e0e0e0',
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 600,
            color: isDarkMode ? '#e8eaed' : '#1a1a1a',
          },
          h2: {
            fontWeight: 600,
            color: isDarkMode ? '#e8eaed' : '#1a1a1a',
          },
          h3: {
            fontWeight: 600,
            color: isDarkMode ? '#e8eaed' : '#1a1a1a',
          },
          h4: {
            fontWeight: 500,
            color: isDarkMode ? '#e8eaed' : '#1a1a1a',
          },
          h5: {
            fontWeight: 500,
            color: isDarkMode ? '#e8eaed' : '#1a1a1a',
          },
          h6: {
            fontWeight: 500,
            color: isDarkMode ? '#e8eaed' : '#1a1a1a',
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: isDarkMode ? '#1a2027' : '#2c5f6b',
                boxShadow: isDarkMode
                  ? '0 2px 8px rgba(0,0,0,0.3)'
                  : '0 2px 8px rgba(44,95,107,0.15)',
                '& .MuiTypography-h6': {
                  color: '#ffffff',
                  fontWeight: 600,
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: isDarkMode ? '#1a2027' : '#ffffff',
                border: isDarkMode ? '1px solid #3c4043' : '1px solid #e8eaed',
                boxShadow: isDarkMode
                  ? '0 2px 8px rgba(0,0,0,0.2)'
                  : '0 2px 8px rgba(0,0,0,0.08)',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              outlined: {
                borderColor: isDarkMode ? '#7bb8c9' : '#ffffff',
                color: isDarkMode ? '#e8eaed' : '#ffffff',
                borderWidth: '2px',
                backgroundColor: isDarkMode
                  ? 'transparent'
                  : 'rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: isDarkMode
                    ? 'rgba(123,184,201,0.12)'
                    : 'rgba(255,255,255,0.2)',
                  borderColor: isDarkMode ? '#b8c5db' : '#ffffff',
                  borderWidth: '2px',
                },
              },
              text: {
                color: isDarkMode ? '#e8eaed' : '#ffffff',
                '&:hover': {
                  backgroundColor: isDarkMode
                    ? 'rgba(232,234,237,0.08)'
                    : 'rgba(255,255,255,0.08)',
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: isDarkMode ? '#e8eaed' : '#ffffff',
                '&:hover': {
                  backgroundColor: isDarkMode
                    ? 'rgba(232,234,237,0.08)'
                    : 'rgba(255,255,255,0.08)',
                },
              },
            },
          },
        },
      }),
    [isDarkMode]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/open-source-projects"
            element={<OpenSourceProjects />}
          />
        </Routes>
      </Router>
    </MuiThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
