import { GitHub, LinkedIn } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = path => {
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
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Website Core
        </Typography>
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
