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
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
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
