import { Container, Paper, Typography } from '@mui/material'

const OpenSourceProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Open Source Projects
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Welcome to Open Source Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This page will showcase various open source projects. More content
          coming soon!
        </Typography>
      </Paper>
    </Container>
  )
}

export default OpenSourceProjects
