import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 2, name: 'Product 2', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 3, name: 'Product 3', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 4, name: 'Product 4', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 5, name: 'Product 5', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 6, name: 'Product 6', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 7, name: 'Product 7', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 8, name: 'Product 8', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' }
];

export default function ProductsPage() {
  return (
    <Container maxWidth="lg" sx={{ mb: 4, pt: 3 }}>
      <Grid container direction="column" alignItems="center" justifyContent="center" textAlign="center">
      <Typography variant="h2" component="h1" gutterBottom>
        Products
      </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center" >
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} key={product.id} sx={{ width: { xs: '45%', sm: '45%', md: '32%', lg: '23%' } }}>
            <Card>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 