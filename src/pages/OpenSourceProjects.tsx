import {
  GitHub as GitHubIcon,
  OpenInNew as OpenInNewIcon,
  Star as StarIcon,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Link,
  Typography,
} from '@mui/material'

const projects = [
  {
    name: 'pytradfri',
    repo: 'pytradfri',
    role: 'Co-founder',
    stars: 956,
    description: (
      <>
        {
          'Python library for controlling the legacy IKEA TRÅDFRI gateway. Now part of the '
        }
        <Link
          href="https://www.home-assistant.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home Assistant
        </Link>
        {' project.'}
      </>
    ),
  },
  {
    name: 'pygleif',
    repo: 'pygleif',
    role: 'Founder',
    stars: 20,
    description:
      'Helpers for working with the Global Legal Entity Identifier Foundation (GLEIF) data.',
  },
  {
    name: 'pypmanager',
    repo: 'pypmanager',
    role: 'Founder',
    stars: 6,
    description: 'A privacy-first simple financial portfolio manager.',
  },
]

const OpenSourceProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        My open source projects
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
          mt: 1,
        }}
      >
        {projects.map(p => (
          <Card
            key={p.repo}
            variant="outlined"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                  mb: 1,
                }}
              >
                <Typography variant="h6" component="h2">
                  {p.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {p.role && (
                    <Chip
                      label={p.role}
                      size="small"
                      color={p.role === 'Co-founder' ? 'secondary' : 'primary'}
                    />
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <StarIcon fontSize="small" />
                    <Typography variant="caption">{p.stars}</Typography>
                  </Box>
                </Box>
              </Box>

              <Typography variant="body2" color="text.secondary">
                {p.description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  mt: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <StarIcon fontSize="small" />
                  <Typography variant="caption">{p.stars}</Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 'auto',
              }}
            >
              <Button
                size="small"
                component="a"
                href={`https://github.com/ggravlingen/${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon fontSize="small" />}
                aria-label={`Open ${p.name} on GitHub`}
              >
                View on GitHub
              </Button>
              <Link
                href={`https://github.com/ggravlingen/${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                variant="body2"
                sx={{ display: 'inline-flex', alignItems: 'center' }}
              >
                github.com/ggravlingen/{p.repo}
                <OpenInNewIcon fontSize="small" sx={{ ml: 0.5 }} />
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  )
}

export default OpenSourceProjects
