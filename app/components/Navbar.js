'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary.light',
              },
            }}
          >
            Blogs.io
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  color="inherit"
                  sx={{
                    backgroundColor: pathname === item.href ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={closeMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
          },
        }}
      >
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              component={Link}
              href={item.href}
              onClick={closeMenu}
              sx={{
                backgroundColor: pathname === item.href ? 'primary.light' : 'transparent',
                color: pathname === item.href ? 'primary.contrastText' : 'inherit',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
} 