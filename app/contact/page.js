"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 4, py: { xs: 2, sm: 3, md: 4 } }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: { xs: "center", sm: "center" } }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        gutterBottom
        sx={{ textAlign: { xs: "center", sm: "center" } }}
      >
        Get in touch with us
      </Typography>
      <Box display="flex" justifyContent="center" width="100%">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "100%", maxWidth: 400, px: { xs: 2, sm: 0 } }}
        >
          <Grid container spacing={{ xs: 2, sm: 3 }} width="100%">
            <Grid xs={12} width="100%">
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                size="medium"
              />
            </Grid>
            <Grid xs={12} width="100%">
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                size="medium"
              />
            </Grid>
            <Grid xs={12} width="100%">
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                size="medium"
              />
            </Grid>
            <Grid xs={12} width="100%">
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ px: { xs: 3, sm: 4 }, py: { xs: 1.5, sm: 2 }, mt: 2 }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
