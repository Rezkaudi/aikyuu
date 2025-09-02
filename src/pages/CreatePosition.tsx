import { useState } from 'react';
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
import { Footer } from '@/components/ui/Footer';
import { usePositionsStore } from '@/store/positionsStore';
import Stepper from '@/components/ui/Stepper';

export default function CreatePosition() {
  const navigate = useNavigate();

  const { createPosition, isLoading } = usePositionsStore();


  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      description: formData.description
    }

    const { id: positionId } = await createPosition(data)

    navigate(`/create-criteria/${positionId}`);
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
      <Navbar />

      {/* Main Content */}
      <Box sx={{ px: { xs: 1.5, md: 6 } }}>
        {/* Process Flow Section */}
        <Stepper step={1} />

        {/* Create Position Form */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Paper sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 1 }}>
            {/* Header */}
            <Box sx={{ backgroundColor: 'primary.main', px: { xs: 4, md: 8 }, py: 3 }}>
              <Typography variant="h1" sx={{
                color: 'white',
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
                    Title
                  </Typography>
                  <TextField
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    fullWidth
                    required
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
                    loading={isLoading}
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: '26px',
                      backgroundColor: 'primary.main',
                      color: 'white',
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
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}