'use client';

import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to build modern web applications with this powerful React framework.',
    author: 'John Doe',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center'
  },
  {
    id: 2,
    slug: 'best-practices-for-responsive-design',
    title: 'Best Practices for Responsive Design',
    excerpt: 'Discover the essential techniques and strategies for creating websites that look great on all devices.',
    author: 'Jane Smith',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop&crop=center'
  },
  {
    id: 3,
    slug: 'optimizing-performance-in-react-apps',
    title: 'Optimizing Performance in React Apps',
    excerpt: 'Explore advanced techniques to improve the performance of your React applications and enhance user experience.',
    author: 'Mike Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&crop=center'
  },
  {
    id: 4,
    slug: 'the-future-of-web-development',
    title: 'The Future of Web Development',
    excerpt: 'Take a look at emerging trends and technologies that will shape the future of web development.',
    author: 'Sarah Wilson',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center'
  },
  {
    id: 5,
    slug: 'building-accessible-web-applications',
    title: 'Building Accessible Web Applications',
    excerpt: 'Learn how to create web applications that are accessible to users with disabilities and follow WCAG guidelines.',
    author: 'Alex Brown',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Accessibility',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center'
  },
  {
    id: 6,
    slug: 'mastering-css-grid-and-flexbox',
    title: 'Mastering CSS Grid and Flexbox',
    excerpt: 'A comprehensive guide to modern CSS layout techniques that will revolutionize your web design workflow.',
    author: 'Emily Davis',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center'
  }
];

export default function BlogsPage() {
  return (
    <Container maxWidth="lg" sx={{ mb: 4, pt: 3 }}>
      <Grid container direction="column" alignItems="center" justifyContent="center" textAlign="center">
        <Typography variant="h2" component="h1">
          Our Blogs
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
          Insights, tutorials, and updates from our team of experts
        </Typography>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        {blogs.map((blog) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <Card
              sx={{
                maxWidth: 300,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent sx={{ textAlign: 'left', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Chip label={blog.category} size="small" color="primary" sx={{ alignSelf: 'flex-start', mb: 1 }} />
                <Typography variant="h6" component={Link} href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit' }} sx={{ mb: 1 }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, flexGrow: 1 }}>
                  {blog.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {blog.readTime}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 