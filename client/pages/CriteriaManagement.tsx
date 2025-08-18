import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Paper, 
  Typography, 
  Button, 
  Modal, 
  Divider, 
  TextField, 
  Stack, 
  Grid,
  IconButton
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';

interface Criterion {
  id: string;
  label: string;
  content: string;
  createdDate: string;
}

export default function CriteriaManagement() {
  const navigate = useNavigate();
  const [position] = useState('ui/ux designer');
  const [criteria, setCriteria] = useState<Criterion[]>([
    {
      id: '1',
      label: 'Criteria-1:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    },
    {
      id: '2',
      label: 'Criteria-2:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    },
    {
      id: '3',
      label: 'Criteria-3:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    },
    {
      id: '4',
      label: 'Criteria-4:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCriteriaText, setNewCriteriaText] = useState('');

  const handleDeleteCriterion = (id: string) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const handleAddCriteria = () => {
    if (!newCriteriaText.trim()) return;
    
    const newCriterion: Criterion = {
      id: Date.now().toString(),
      label: `Criteria-${criteria.length + 1}:`,
      content: newCriteriaText.substring(0, 15) + '...',
      createdDate: `Created: ${new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      })}`
    };
    
    setCriteria([...criteria, newCriterion]);
    setNewCriteriaText('');
    setShowAddModal(false);
  };

  const handleCreateNewPosition = () => {
    navigate('/create-position');
  };

  const handleSave = () => {
    console.log('Criteria saved:', criteria);
    navigate('/upload-cv');
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

        {/* Position and Criteria Section */}
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Stack spacing={5.5}>
            {/* Position Display */}
            <Paper sx={{ borderRadius: '16px', px: { xs: 4, md: 22 }, py: 4, boxShadow: 1 }}>
              <Stack direction="row" alignItems="center" spacing={8}>
                <Typography sx={{ 
                  color: 'text.secondary', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.5rem', md: '1.875rem' }, 
                  fontWeight: 500 
                }}>
                  Position:
                </Typography>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.5rem', md: '1.875rem' }, 
                  fontWeight: 700 
                }}>
                  {position}
                </Typography>
              </Stack>
            </Paper>

            {/* Criteria Management Section */}
            <Paper sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 1 }}>
              {/* Header */}
              <Box sx={{ backgroundColor: 'primary.main', px: { xs: 4, md: 8 }, py: 3 }}>
                <Typography variant="h1" sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.5rem', md: '1.875rem' }, 
                  fontWeight: 700 
                }}>
                  + Create Criteria
                </Typography>
              </Box>

              {/* Criteria List */}
              <Box sx={{ p: { xs: 4, md: 7 } }}>
                <Stack spacing={3} sx={{ mb: 7 }}>
                  {/* Add New Criteria Row */}
                  <Paper
                    onClick={() => setShowAddModal(true)}
                    sx={{
                      backgroundColor: 'grey.100',
                      borderRadius: '16px',
                      p: 4,
                      boxShadow: 1,
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: 'grey.200',
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <Grid container columns={2} spacing={0.5} sx={{ width: '24px' }}>
                        {[...Array(6)].map((_, i) => (
                          <Grid key={i} size={1}>
                            <Box sx={{ width: '4px', height: '4px', backgroundColor: 'grey.400', borderRadius: '50%' }} />
                          </Grid>
                        ))}
                      </Grid>
                      <Typography sx={{ 
                        color: 'text.secondary', 
                        fontFamily: 'Montserrat', 
                        fontSize: '1.125rem', 
                        fontWeight: 500, 
                        mr: 'auto' 
                      }}>
                        Add Criteria:
                      </Typography>
                      <Box sx={{ 
                        backgroundColor: 'background.paper', 
                        borderRadius: '8px', 
                        px: 3, 
                        py: 1.5, 
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)', 
                        border: '1px solid', 
                        borderColor: 'grey.300',
                        minWidth: 0, 
                        flex: 1, 
                        maxWidth: '512px', 
                        ml: 2 
                      }}>
                        <Typography sx={{ color: 'grey.400', fontFamily: 'Montserrat', fontSize: '1rem' }}>
                          Place holder
                        </Typography>
                      </Box>
                      <IconButton sx={{ 
                        p: 1, 
                        borderRadius: '50%', 
                        '&:hover': { backgroundColor: 'grey.300' },
                        transition: 'background-color 0.3s' 
                      }}>
                        <AddIcon sx={{ color: 'grey.600' }} />
                      </IconButton>
                    </Stack>
                  </Paper>

                  {/* Existing Criteria */}
                  {criteria.map((criterion) => (
                    <Paper key={criterion.id} sx={{ backgroundColor: 'grey.50', borderRadius: '16px', p: 4, boxShadow: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={3}>
                        <Typography sx={{ 
                          color: 'text.secondary', 
                          fontFamily: 'Montserrat', 
                          fontSize: '1.125rem', 
                          fontWeight: 500, 
                          width: '80px' 
                        }}>
                          {criterion.label}
                        </Typography>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ flex: 1 }}>
                          <Typography sx={{ 
                            color: 'primary.dark', 
                            fontFamily: 'Montserrat', 
                            fontSize: '1rem', 
                            fontWeight: 700 
                          }}>
                            {criterion.content}
                          </Typography>
                          <Typography sx={{ 
                            color: 'primary.dark', 
                            fontFamily: 'Montserrat', 
                            fontSize: '1rem', 
                            mx: 4 
                          }}>
                            {criterion.createdDate}
                          </Typography>
                          <IconButton
                            onClick={() => handleDeleteCriterion(criterion.id)}
                            sx={{
                              p: 1,
                              borderRadius: '16px',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                              },
                              transition: 'background-color 0.3s',
                            }}
                            aria-label="Delete criterion"
                          >
                            <DeleteIcon sx={{ 
                              width: '36px', 
                              height: '36px', 
                              color: 'primary.dark',
                              '&:hover': { color: 'error.main' },
                              transition: 'color 0.3s'
                            }} />
                          </IconButton>
                        </Stack>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>

                {/* Action Buttons */}
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
                  <Button
                    onClick={handleCreateNewPosition}
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
                    Create New Position
                  </Button>
                  <Button
                    onClick={handleSave}
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
                    Save
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Stack>
        </Container>
      </Container>

      {/* Add Criteria Modal */}
      <Modal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        aria-labelledby="add-criteria-modal"
        aria-describedby="add-criteria-modal-description"
      >
        <Box sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: '30px',
          p: 6,
          maxWidth: '1280px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: 24,
        }}>
          {/* Modal Header */}
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 4.5 }}>
            <Box
              component="svg"
              width="24"
              height="24"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{ width: '24px', height: '24px', fill: 'primary.dark' }}
            >
              <path d="M0.550781 34.2859C0.750926 33.402 0.928469 32.51 1.34584 31.7055C2.66913 29.1548 4.66915 27.8081 7.36124 27.7014C7.79098 27.6844 8.19424 27.5645 8.56272 27.3425C10.3323 26.2769 11.6748 24.7628 12.5315 22.7595C12.6583 22.4629 12.7448 22.1342 12.7897 21.8104C12.8691 21.2383 12.7725 20.7211 12.3377 20.3042C11.5608 19.5596 10.9283 18.6932 10.6695 17.5733C10.2374 15.7035 10.6292 14.046 11.8744 12.6819C15.5966 8.60381 19.3375 4.54583 23.0748 0.484161C23.6752 -0.168326 24.3106 -0.158075 24.9104 0.495304C29.6909 5.70216 34.4703 10.9099 39.249 16.1187C39.9246 16.8551 39.9262 17.5062 39.2529 18.2403C35.5745 22.2507 31.8977 26.2629 28.2135 30.2671C26.2358 32.4168 23.4585 32.4093 21.4745 30.2665C21.4654 30.2567 21.4566 30.2466 21.4475 30.2368C20.5064 29.219 19.9645 29.0915 18.764 29.7071C16.9142 30.6559 15.5313 32.1445 14.6026 34.1282C14.4222 34.5134 14.3299 34.9266 14.3272 35.368C14.3066 38.7728 11.9634 41.8619 8.90574 42.5449C8.67287 42.597 8.42118 42.5666 8.2062 42.7097H6.6751C6.61793 42.6838 6.5627 42.6447 6.50318 42.634C3.65216 42.1233 1.78714 40.348 0.856573 37.3897C0.718915 36.9522 0.650905 36.4888 0.550781 36.0375V34.2859Z"/>
            </Box>
            <Typography variant="h2" sx={{ 
              color: 'primary.dark', 
              fontFamily: 'Montserrat', 
              fontSize: '1.5rem', 
              fontWeight: 700 
            }}>
              Add New Criteria
            </Typography>
          </Stack>

          {/* Divider */}
          <Divider sx={{ mb: 4.5 }} />

          {/* Description Section */}
          <Box sx={{ mb: 4.5 }}>
            <Typography sx={{ 
              color: 'primary.dark', 
              fontFamily: 'Montserrat', 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              mb: 3.5 
            }}>
              Description
            </Typography>
            <Paper sx={{ backgroundColor: 'grey.50', borderRadius: '19px', p: 5 }}>
              <TextField
                value={newCriteriaText}
                onChange={(e) => setNewCriteriaText(e.target.value)}
                placeholder="Type Your text"
                multiline
                rows={3}
                fullWidth
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    backgroundColor: 'transparent',
                    color: 'text.secondary',
                    fontFamily: 'Montserrat',
                    fontSize: '1.25rem',
                  },
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    '&::before': { display: 'none' },
                    '&::after': { display: 'none' },
                  },
                }}
              />
            </Paper>
          </Box>

          {/* Modal Action Buttons */}
          <Stack direction="row" spacing={2.5} sx={{ justifyContent: 'center' }}>
            <Button
              onClick={() => setShowAddModal(false)}
              variant="outlined"
              sx={{
                px: 10,
                py: 3,
                borderRadius: '125px',
                borderColor: 'primary.dark',
                color: 'primary.dark',
                fontFamily: 'Montserrat',
                fontSize: '1.5rem',
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'grey.50',
                  borderColor: 'primary.dark',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddCriteria}
              variant="contained"
              sx={{
                px: 10,
                py: 3,
                borderRadius: '125px',
                backgroundColor: 'primary.main',
                color: 'primary.dark',
                fontFamily: 'Montserrat',
                fontSize: '1.5rem',
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 235, 189, 0.9)',
                },
              }}
            >
              Add Criteria
            </Button>
          </Stack>
        </Box>
      </Modal>

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