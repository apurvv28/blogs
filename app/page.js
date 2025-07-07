'use client';

import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Blogs.io
      </Typography>
      <Button component={Link} href="/blogs" variant="contained" size="large">
        Go to Blogs
      </Button>
    </Container>
  );
}
