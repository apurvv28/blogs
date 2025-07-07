'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Divider,
  Chip
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
const blogs = [
  {
    id: 1,
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to build modern web applications with this powerful React framework.',
    content: `
      <p>Next.js is a powerful React framework that makes it easy to build full-stack web applications. In this comprehensive guide, we'll explore the fundamentals of Next.js and how to get started with your first project.</p>
      
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework that provides a set of tools and conventions for building modern web applications. It offers features like server-side rendering, static site generation, API routes, and more out of the box.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Pre-render pages on the server for better SEO and performance</li>
        <li><strong>Static Site Generation (SSG):</strong> Generate static pages at build time for optimal performance</li>
        <li><strong>API Routes:</strong> Create API endpoints as Node.js serverless functions</li>
        <li><strong>File-based Routing:</strong> Automatic routing based on your file structure</li>
        <li><strong>Built-in CSS Support:</strong> Support for CSS modules, Sass, and styled-jsx</li>
        <li><strong>TypeScript Support:</strong> First-class TypeScript support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js project, you can use the following command:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This will create a new Next.js project with all the necessary dependencies and configuration files.</p>
      
      <h2>Project Structure</h2>
      <p>A typical Next.js project structure looks like this:</p>
      <pre><code>my-next-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── public/
├── package.json
└── next.config.js</code></pre>
      
      <h2>Creating Your First Page</h2>
      <p>In Next.js 13+ with the app directory, you can create pages by adding files to the app directory. For example, to create a page at /about, you would create app/about/page.js.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js is an excellent choice for building modern web applications. Its powerful features and developer-friendly approach make it a popular choice among React developers. Start building with Next.js today and experience the benefits of a full-featured React framework.</p>
    `,
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
    content: `
      <p>Responsive design is crucial in today's multi-device world. Learn the best practices for creating websites that provide an optimal viewing experience across a wide range of devices.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile devices first, then progressively enhance for larger screens. This approach ensures that your website works well on the most constrained devices.</p>
      
      <h2>Flexible Grid Systems</h2>
      <p>Use CSS Grid and Flexbox to create flexible layouts that adapt to different screen sizes. These modern CSS features make it easier to create responsive designs.</p>
      
      <h2>Responsive Images</h2>
      <p>Implement responsive images using the srcset attribute and picture element to serve appropriate image sizes based on the device's capabilities.</p>
      
      <h2>Typography</h2>
      <p>Use relative units like rem and em for typography to ensure text scales appropriately across different screen sizes.</p>
      
      <h2>Touch-Friendly Interfaces</h2>
      <p>Design touch-friendly interfaces with appropriate button sizes and spacing for mobile devices.</p>
    `,
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
    content: `
      <p>Performance optimization is crucial for providing a smooth user experience in React applications. Learn the techniques to make your apps faster and more efficient.</p>
      
      <h2>Code Splitting</h2>
      <p>Implement code splitting to load only the necessary code for each route or component, reducing the initial bundle size.</p>
      
      <h2>Memoization</h2>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and expensive calculations.</p>
      
      <h2>Lazy Loading</h2>
      <p>Implement lazy loading for components and images to improve initial load times.</p>
      
      <h2>Virtual Scrolling</h2>
      <p>Use virtual scrolling for large lists to render only the visible items, improving performance significantly.</p>
      
      <h2>Bundle Optimization</h2>
      <p>Optimize your bundle size by removing unused dependencies and implementing tree shaking.</p>
    `,
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
    content: `
      <p>The web development landscape is constantly evolving. Let's explore the emerging trends and technologies that will shape the future of web development.</p>
      
      <h2>Web Components</h2>
      <p>Web Components are becoming more popular as a way to create reusable, encapsulated components that work across different frameworks.</p>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to gain traction as they provide app-like experiences on the web with offline capabilities and push notifications.</p>
      
      <h2>WebAssembly</h2>
      <p>WebAssembly enables running high-performance code in the browser, opening up new possibilities for web applications.</p>
      
      <h2>AI and Machine Learning</h2>
      <p>AI and ML are being integrated into web applications to provide more intelligent and personalized experiences.</p>
      
      <h2>Edge Computing</h2>
      <p>Edge computing brings computation closer to users, reducing latency and improving performance.</p>
    `,
    author: 'Sarah Wilson',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center'
  },
  {
    id: 5,
    slug: 'building-accessible-web-applications',
    title: 'Building Accessible Web Applications',
    excerpt: 'Learn how to create web applications that are accessible to users with disabilities and follow WCAG guidelines.',
    content: `
      <p>Web accessibility is not just a legal requirement but also a moral obligation. Learn how to create web applications that are accessible to all users.</p>
      
      <h2>Semantic HTML</h2>
      <p>Use semantic HTML elements to provide meaning and structure to your content, making it easier for screen readers to understand.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensure that all interactive elements can be accessed and used with a keyboard alone.</p>
      
      <h2>Color Contrast</h2>
      <p>Maintain sufficient color contrast ratios to ensure text is readable for users with visual impairments.</p>
      
      <h2>Alt Text</h2>
      <p>Provide descriptive alt text for images to help users with visual impairments understand the content.</p>
      
      <h2>ARIA Labels</h2>
      <p>Use ARIA labels and roles to provide additional context for screen readers and assistive technologies.</p>
    `,
    author: 'Alex Brown',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Accessibility'
  },
  {
    id: 6,
    slug: 'mastering-css-grid-and-flexbox',
    title: 'Mastering CSS Grid and Flexbox',
    excerpt: 'A comprehensive guide to modern CSS layout techniques that will revolutionize your web design workflow.',
    content: `
      <p>CSS Grid and Flexbox are powerful layout tools that have revolutionized web design. Learn how to master these techniques for better layouts.</p>
      
      <h2>CSS Grid</h2>
      <p>CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns.</p>
      
      <h2>Flexbox</h2>
      <p>Flexbox is a one-dimensional layout method for arranging items in rows or columns.</p>
      
      <h2>When to Use Each</h2>
      <p>Use Grid for two-dimensional layouts and Flexbox for one-dimensional layouts or when you need more control over item alignment.</p>
      
      <h2>Combining Both</h2>
      <p>You can combine Grid and Flexbox to create even more complex and flexible layouts.</p>
      
      <h2>Browser Support</h2>
      <p>Both Grid and Flexbox have excellent browser support, making them safe to use in production.</p>
    `,
    author: 'Emily Davis',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'CSS'
  }
];

export default function BlogPost({ params }) {
  const blog = blogs.find(blog => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 4, pt: 3 }}>
      <Grid container direction="column" spacing={4}>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} href="/blogs" variant='outlined' color='primary'>
            ← Back to Blogs
          </Button>
        </Grid>
        <Grid>
          <Typography variant="h2" component="h1">
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {blog.excerpt}
          </Typography>
        </Grid>
        <Grid>
          <Card>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid>
          <Typography variant="body2" color="text.secondary">
            Written by {blog.author} • {formatDate(blog.date)} • {blog.readTime}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
} 