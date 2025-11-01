import { DarkMode, GitHub, LightMode, LinkedIn } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { useTheme } from '../hooks/useTheme'

const NavigationBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isDarkMode, toggleTheme } = useTheme()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const handleLinkedInClick = () => {
    window.open(
      'https://www.linkedin.com/in/patriklindgren/',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handleGitHubClick = () => {
    window.open(
      'https://github.com/ggravlingen/',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => handleNavigation('/')}
            variant={location.pathname === '/' ? 'outlined' : 'text'}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => handleNavigation('/open-source-projects')}
            variant={
              location.pathname === '/open-source-projects'
                ? 'outlined'
                : 'text'
            }
          >
            Open Source Projects
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleGitHubClick}
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleLinkedInClick}
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar
