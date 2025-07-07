import { Container, Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        This is Blogs.io
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, textAlign: 'center' }}>
        Blogs.io is a forward-thinking company dedicated to delivering innovative solutions and exceptional experiences. We believe in quality, creativity, and customer satisfaction. Our team works tirelessly to bring you the best products and services that exceed expectations.
      </Typography>
    </Container>
  );
} 