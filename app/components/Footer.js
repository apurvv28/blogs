import { Container, Typography, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#f5f5f5', 
      padding: '2rem 0', 
      marginTop: 'auto',
      borderTop: '1px solid #e0e0e0'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'left'
          }}>
            <Typography variant="h6" gutterBottom>
              Blogs.io
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © 2025 Blogs.io. All rights reserved.
            </Typography>
          </Grid>
          <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'right',
            justifyContent: 'right'
          }}>
            <Typography variant="body2" color="text.secondary" >
              <Link href="/about" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                About
              </Link>
              <Link href="/products" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                Products
              </Link>
              <Link href="/blogs" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                Blogs
              </Link>
              <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contact
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
} 