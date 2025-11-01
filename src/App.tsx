import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { NavigationBar } from '@/components'
import { Home, OpenSourceProjects } from '@/pages'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
