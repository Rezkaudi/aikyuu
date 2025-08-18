import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Stack 
} from '@mui/material';
import { Navbar } from '@/components/ui/navbar';

export default function CreatePosition() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    position: 'ui/ux designer',
    description: 'lomer ipsm'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic here
    console.log('Position saved:', formData);
    // Navigate to simple criteria page first
    navigate('/criteria-simple');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Navigation */}
      <Navbar 
        userCredits={50}
        userName="Alice ahmad"
        userAvatar="https://images.unsplash.com/photo-1494790108755-2616b60b7751?w=100&h=100&fit=crop&crop=face"
      />

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 1.5, md: 6 } }}>
        {/* Process Flow Section */}
        <Paper sx={{ borderRadius: '40px', p: { xs: 4, md: 7 }, mb: 7 }}>
          {/* Process Steps Indicator */}
          <Box sx={{ position: 'relative', mb: 8 }}>
            {/* Progress Line */}
            <Box sx={{ 
              position: 'absolute', 
              top: '24px', 
              left: '48px', 
              right: '48px', 
              height: '4px', 
              backgroundColor: 'grey.300',
              borderRadius: '2px'
            }}>
              <Box sx={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to right, #00EBBD, #D1D5DB)',
                borderRadius: '2px'
              }} />
            </Box>

            {/* Step Circles */}
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {/* Step 1 - Active */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: 'primary.main', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mb: 2, 
                  position: 'relative', 
                  zIndex: 10 
                }}>
                  <Box sx={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'primary.dark', 
                    borderRadius: '50%' 
                  }} />
                </Box>
                <Box sx={{ textAlign: 'center', maxWidth: '240px' }}>
                  <Typography variant="h3" sx={{ 
                    color: 'primary.dark', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.5rem', md: '1.875rem' }, 
                    fontWeight: 700, 
                    mb: 1 
                  }}>
                    New Position
                  </Typography>
                  <Typography sx={{ 
                    color: 'text.secondary', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.125rem', md: '1.25rem' }, 
                    fontWeight: 500 
                  }}>
                    Create New Position
                  </Typography>
                </Box>
              </Box>

              {/* Step 2 - Inactive */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: 'grey.300', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mb: 2, 
                  position: 'relative', 
                  zIndex: 10 
                }} />
                <Box sx={{ textAlign: 'center', maxWidth: '240px' }}>
                  <Typography variant="h3" sx={{ 
                    color: 'primary.dark', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.5rem', md: '1.875rem' }, 
                    fontWeight: 700, 
                    mb: 1 
                  }}>
                    Upload CV
                  </Typography>
                  <Typography sx={{ 
                    color: 'text.secondary', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.125rem', md: '1.25rem' }, 
                    fontWeight: 500 
                  }}>
                    Download one or more CVs
                  </Typography>
                </Box>
              </Box>

              {/* Step 3 - Inactive */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: 'grey.300', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mb: 2, 
                  position: 'relative', 
                  zIndex: 10 
                }} />
                <Box sx={{ textAlign: 'center', maxWidth: '240px' }}>
                  <Typography variant="h3" sx={{ 
                    color: 'primary.dark', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.5rem', md: '1.875rem' }, 
                    fontWeight: 700, 
                    mb: 1 
                  }}>
                    View Result
                  </Typography>
                  <Typography sx={{ 
                    color: 'text.secondary', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.125rem', md: '1.25rem' }, 
                    fontWeight: 500 
                  }}>
                    View Result
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Create Position Form */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Paper sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 1 }}>
            {/* Header */}
            <Box sx={{ backgroundColor: 'primary.main', px: { xs: 4, md: 8 }, py: 3 }}>
              <Typography variant="h1" sx={{ 
                color: 'primary.dark', 
                fontFamily: 'Montserrat', 
                fontSize: { xs: '1.5rem', md: '1.875rem' }, 
                fontWeight: 700 
              }}>
                + Create New Position
              </Typography>
            </Box>

            {/* Form */}
            <Box sx={{ p: { xs: 4, md: 7 } }}>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 5.5 }}>
                {/* Position Field */}
                <Stack spacing={3}>
                  <Typography sx={{ 
                    color: 'text.primary', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                    fontWeight: 700 
                  }}>
                    Position
                  </Typography>
                  <TextField
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    fullWidth
                    placeholder="ui/ux designer"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: { xs: '64px', md: '80px' },
                        borderRadius: '19px',
                        backgroundColor: 'grey.100',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontFamily: 'Montserrat',
                        '& fieldset': {
                          border: 'none',
                        },
                        '&:hover fieldset': {
                          border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                          border: '2px solid',
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Stack>

                {/* Description Field */}
                <Stack spacing={3}>
                  <Typography sx={{ 
                    color: 'text.primary', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                    fontWeight: 700 
                  }}>
                    Description
                  </Typography>
                  <TextField
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                    rows={8}
                    placeholder="lomer ipsm"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '19px',
                        backgroundColor: 'grey.100',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontFamily: 'Montserrat',
                        '& fieldset': {
                          border: 'none',
                        },
                        '&:hover fieldset': {
                          border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                          border: '2px solid',
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Stack>

                {/* Action Buttons */}
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end', mt: 4 }}>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    variant="outlined"
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: '26px',
                      borderColor: 'grey.400',
                      color: 'primary.dark',
                      fontFamily: 'Montserrat',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      boxShadow: 1,
                      '&:hover': {
                        backgroundColor: 'grey.50',
                        borderColor: 'grey.400',
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: '26px',
                      backgroundColor: 'primary.main',
                      color: 'primary.dark',
                      fontFamily: 'Montserrat',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      boxShadow: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 235, 189, 0.9)',
                      },
                    }}
                  >
                    Next
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: 'grey.800', py: 10 }}>
        <Container maxWidth="xl" sx={{ px: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <svg
                width="52"
                height="86"
                viewBox="0 0 53 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '48px', height: '80px', fill: '#00EBBD' }}
              >
                <path
                  d="M34.7183 86.5C34.2121 86.3976 34.0062 86.0288 33.7227 85.7419C26.4361 78.3638 21.2602 69.1269 18.7447 59.012C18.4475 57.5946 17.8379 56.2633 16.9614 55.1175C16.0848 53.9716 14.9639 53.0408 13.6822 52.3944C10.4153 50.571 6.96267 49.0958 3.77671 47.088C-0.610738 44.3563 -0.587117 42.4372 3.81721 39.6918C7.19217 37.5816 10.9046 36.1269 14.2796 34.0372C15.7291 33.326 16.9471 32.2098 17.7895 30.8206C18.1528 29.9007 18.4252 28.9468 18.6029 27.9727C21.2408 17.8517 26.4229 8.59367 33.6451 1.09937C34.4382 0.279853 34.8432 0.320829 35.6127 1.09937C41.0126 6.54917 46.4317 11.9705 51.8699 17.3634C52.582 18.0463 52.7238 18.4697 51.9509 19.2688C51.9509 19.2688 47.8301 25.5381 45.7005 28.6284C44.3974 30.9007 42.5555 32.8089 40.341 34.1806C36.7906 36.1269 33.014 37.6226 29.5412 39.7533C28.1 40.6343 26.2742 41.5358 26.2539 43.3592C26.2337 45.2646 28.1203 46.166 29.6019 47.0675C32.8689 49.0753 36.4025 50.5505 39.8112 52.3124C42.3643 53.8013 44.4653 55.9696 45.8861 58.5817C47.9111 61.6345 52.0555 67.675 52.0555 67.675C52.7035 68.3579 52.6023 68.6994 52.015 69.2935C46.4733 74.7843 40.9721 80.3126 35.4541 85.8239C35.228 86.0698 34.9445 86.2917 34.7183 86.5Z"
                  fill="#00EBBD"
                />
              </svg>
              <Typography sx={{ 
                color: 'primary.main', 
                fontFamily: 'Poppins', 
                fontSize: { xs: '2.5rem', md: '3.75rem' }, 
                fontWeight: 700 
              }}>
                Aikyuu
              </Typography>
            </Box>

            {/* Copyright */}
            <Typography sx={{ 
              color: 'grey.300', 
              fontFamily: 'Poppins', 
              fontSize: { xs: '1.125rem', md: '1.25rem' }, 
              textAlign: 'center' 
            }}>
              Copyright © Resumate. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}