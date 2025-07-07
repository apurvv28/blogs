export const typographyTheme = {
  typography: {
    fontFamily: '"Poppins", sans-serif',
    
    // Hero/Page titles
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.75rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '4rem',
      },
    },
    
    // Section titles
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '3.5rem',
      },
    },
    
    // Subsection titles
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.25rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '2.5rem',
      },
    },
    
    // Card titles
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2rem',
      },
    },
    
    // Blog post titles
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.75rem',
      },
    },
    
    // Blog card titles
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.375rem',
      },
    },
    
    // Body text
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
    },
    
    // Secondary body text
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.125rem',
      },
    },
    
    // Caption text
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    
    // Button text
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: 'none',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    
    // Subtitle
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
    },
    
    // Secondary subtitle
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.125rem',
      },
    },
  },
};

// Custom typography variants for specific use cases
export const customTypographyStyles = {
  // Hero title with gradient
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    '@media (min-width:600px)': {
      fontSize: '3rem',
    },
    '@media (min-width:900px)': {
      fontSize: '3.75rem',
    },
    '@media (min-width:1200px)': {
      fontSize: '4rem',
    },
  },
  
  // Section subtitle
  sectionSubtitle: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.6,
    color: 'text.secondary',
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center',
    '@media (min-width:600px)': {
      fontSize: '1.25rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.375rem',
    },
  },
  
  // Blog excerpt
  blogExcerpt: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: 'text.secondary',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    minHeight: { xs: 'auto', md: '80px', lg: '80px' },
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.125rem',
    },
  },
  
  // Blog title
  blogTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.4,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    minHeight: { xs: 'auto', md: '48px', lg: '48px' },
    '@media (min-width:600px)': {
      fontSize: '1.25rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.375rem',
    },
  },
  
  // Author name
  authorName: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.4,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },
  
  // Date text
  dateText: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.4,
    color: 'text.secondary',
    '@media (min-width:600px)': {
      fontSize: '0.875rem',
    },
  },
  
  // Read time
  readTime: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.4,
    color: 'text.secondary',
    '@media (min-width:600px)': {
      fontSize: '0.875rem',
    },
  },
  
  // Feature title
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.3,
    marginBottom: 1,
    '@media (min-width:600px)': {
      fontSize: '1.75rem',
    },
    '@media (min-width:900px)': {
      fontSize: '2rem',
    },
  },
  
  // Feature description
  featureDescription: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
    color: 'text.secondary',
    '@media (min-width:600px)': {
      fontSize: '1.125rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.25rem',
    },
  },
  
  // CTA title
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: 'white',
    textAlign: 'center',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    '@media (min-width:900px)': {
      fontSize: '3rem',
    },
  },
  
  // CTA subtitle
  ctaSubtitle: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '#bbdefb',
    textAlign: 'center',
    '@media (min-width:600px)': {
      fontSize: '1.25rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.375rem',
    },
  },
  
  // Footer text
  footerText: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: 'text.secondary',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },
  
  // Navigation text
  navText: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    '@media (min-width:600px)': {
      fontSize: '1.125rem',
    },
  },
  
  // Blog content
  blogContent: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.7,
    '& h2': {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginTop: 32,
      marginBottom: 16,
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.25rem',
      },
    },
    '& p': {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      marginBottom: 16,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.375rem',
      },
    },
    '& ul': {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      marginBottom: 16,
      paddingLeft: 24,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.375rem',
      },
    },
    '& li': {
      marginBottom: 8,
    },
    '& pre': {
      backgroundColor: '#f5f5f5',
      padding: 16,
      borderRadius: 4,
      overflow: 'auto',
      fontSize: '0.9rem',
      marginBottom: 16,
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    '& code': {
      backgroundColor: '#f5f5f5',
      padding: '4px 8px',
      borderRadius: 2,
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
};