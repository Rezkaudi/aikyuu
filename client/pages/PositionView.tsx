import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent,
  Stack,
  Grid,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Edit as EditIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
  Add as AddIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';
import { usePositionsStore } from '@/store/positionsStore';
import { Position } from '@/types';

interface EditPositionModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: Position | null;
  onSave: (name: string, description: string) => void;
}

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
}

const EditPositionModal: React.FC<EditPositionModalProps> = ({ isOpen, onClose, position, onSave }) => {
  const [name, setName] = useState(position?.name || '');
  const [description, setDescription] = useState(position?.description || '');

  useEffect(() => {
    if (position) {
      setName(position.name);
      setDescription(position.description);
    }
  }, [position]);

  const handleSave = () => {
    onSave(name, description);
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "30px",
          p: 4
        }
      }}
    >
      <DialogTitle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <EditIcon sx={{ fontSize: "2.5rem", color: "secondary.main" }} />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                color: "text.primary"
              }}
            >
              Edit Position
            </Typography>
          </Stack>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      
      <DialogContent>
        <Stack spacing={4} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Position Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: "64px",
                borderRadius: "16px"
              }
            }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Position Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: "16px"
              }
            }}
          />
        </Stack>
      </DialogContent>
      
      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            borderRadius: "20px",
            px: 4,
            py: 1.5,
            fontSize: "1.125rem",
            fontWeight: 700
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            borderRadius: "20px",
            px: 4,
            py: 1.5,
            fontSize: "1.125rem",
            fontWeight: 700
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, title, message, confirmText }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    PaperProps={{
      sx: {
        borderRadius: "20px",
        p: 3
      }
    }}
  >
    <DialogTitle>
      <Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary" }}>
        {title}
      </Typography>
    </DialogTitle>
    
    <DialogContent>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {message}
      </Typography>
    </DialogContent>
    
    <DialogActions sx={{ gap: 2 }}>
      <Button
        variant="outlined"
        onClick={onClose}
        sx={{
          borderRadius: "20px",
          px: 3,
          py: 1.5
        }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        onClick={onConfirm}
        sx={{
          borderRadius: "20px",
          px: 3,
          py: 1.5,
          bgcolor: "error.main",
          "&:hover": { bgcolor: "error.dark" }
        }}
      >
        {confirmText}
      </Button>
    </DialogActions>
  </Dialog>
);

export default function PositionView() {
  const { id } = useParams<{ id: string }>();
  const [position, setPosition] = useState<Position | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Mock data
  useEffect(() => {
    // In real app, fetch position by id
    setPosition({
      id: id || '1',
      name: 'Senior Frontend Developer',
      description: 'We are looking for a skilled Senior Frontend Developer to join our team...',
      requirements: [
        '5+ years of experience with React',
        'Strong TypeScript skills', 
        'Experience with modern build tools',
        'Good understanding of responsive design'
      ],
      skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML'],
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      candidates: 12,
      status: 'active' as const,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-20')
    });
  }, [id]);

  const mockCandidates = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      score: 85,
      status: 'reviewed',
      appliedAt: '2024-01-20'
    },
    {
      id: '2', 
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      score: 92,
      status: 'shortlisted', 
      appliedAt: '2024-01-18'
    },
    {
      id: '3',
      name: 'Mike Davis', 
      email: 'mike@example.com',
      score: 78,
      status: 'pending',
      appliedAt: '2024-01-22'
    }
  ];

  const handleEdit = (name: string, description: string) => {
    if (position) {
      setPosition({
        ...position,
        name,
        description,
        updatedAt: new Date()
      });
    }
  };

  const handleDelete = () => {
    // Handle position deletion
    console.log('Position deleted');
    setIsDeleteModalOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shortlisted': return 'success';
      case 'reviewed': return 'info';
      case 'pending': return 'warning';
      default: return 'default';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'success.main';
    if (score >= 60) return 'warning.main'; 
    return 'error.main';
  };

  if (!position) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 }, pb: { xs: 8, md: 16 } }}>
        {/* Header */}
        <Box textAlign="center" sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4rem", lg: "4.5rem" },
              fontWeight: 700,
              mb: 3,
              color: "text.primary",
            }}
          >
            {position.name}
          </Typography>
          <Container maxWidth="md">
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              Position details and candidate management
            </Typography>
          </Container>
        </Box>

        <Stack spacing={6}>
          {/* Position Details Card */}
          <Card
            sx={{
              borderRadius: "25px",
              p: { xs: 4, md: 6 },
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <WorkIcon sx={{ fontSize: "2.5rem", color: "primary.main" }} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.875rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "text.primary"
                    }}
                  >
                    Position Details
                  </Typography>
                </Stack>
                
                <Stack direction="row" spacing={2}>
                  <IconButton 
                    onClick={() => setIsEditModalOpen(true)}
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": { bgcolor: "primary.dark" }
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => setIsDeleteModalOpen(true)}
                    sx={{
                      bgcolor: "error.main",
                      color: "white",
                      "&:hover": { bgcolor: "error.dark" }
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>

              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>
                        Description
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                        {position.description}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>
                        Requirements
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {position.requirements?.map((req, index) => (
                          <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleIcon sx={{ color: "primary.main", fontSize: "1.25rem" }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body1" sx={{ color: "text.primary" }}>
                                  {req}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>
                        Required Skills
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {position.skills?.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            sx={{
                              bgcolor: "primary.main",
                              color: "white",
                              fontWeight: 600,
                              "&:hover": { bgcolor: "primary.dark" }
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      bgcolor: "grey.100",
                      borderRadius: "20px",
                      p: 3
                    }}
                  >
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                          Location
                        </Typography>
                        <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600 }}>
                          {position.location}
                        </Typography>
                      </Box>
                      
                      <Box>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                          Type
                        </Typography>
                        <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600 }}>
                          {position.type}
                        </Typography>
                      </Box>
                      
                      <Box>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                          Salary Range
                        </Typography>
                        <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600 }}>
                          {position.salary}
                        </Typography>
                      </Box>
                      
                      <Box>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                          Applications
                        </Typography>
                        <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600 }}>
                          {position.candidates} candidates
                        </Typography>
                      </Box>
                      
                      <Box>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                          Status
                        </Typography>
                        <Chip
                          label={position.status}
                          sx={{
                            bgcolor: position.status === 'active' ? 'success.main' : 'grey.400',
                            color: 'white',
                            textTransform: 'capitalize',
                            fontWeight: 600
                          }}
                        />
                      </Box>
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Candidates Section */}
          <Card
            sx={{
              borderRadius: "25px",
              p: { xs: 4, md: 6 },
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <PersonIcon sx={{ fontSize: "2.5rem", color: "primary.main" }} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.875rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "text.primary"
                    }}
                  >
                    Candidates ({mockCandidates.length})
                  </Typography>
                </Stack>
                
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  component={Link}
                  to={`/upload-cv?positionId=${position.id}`}
                  sx={{
                    borderRadius: "20px",
                    px: 3,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 700
                  }}
                >
                  Add Candidate
                </Button>
              </Stack>

              {mockCandidates.length === 0 ? (
                <Box textAlign="center" sx={{ py: 8 }}>
                  <Typography variant="h6" sx={{ color: "text.secondary", mb: 2 }}>
                    No candidates yet
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    Upload CVs to start analyzing candidates for this position
                  </Typography>
                </Box>
              ) : (
                <Stack spacing={3}>
                  {mockCandidates.map((candidate, index) => (
                    <Card
                      key={candidate.id}
                      sx={{
                        borderRadius: "15px",
                        p: 3,
                        border: "1px solid",
                        borderColor: "grey.200",
                        "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }
                      }}
                    >
                      <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12} sm="auto">
                          <Avatar
                            sx={{
                              width: 64,
                              height: 64,
                              bgcolor: "primary.main",
                              fontSize: "1.5rem"
                            }}
                          >
                            {candidate.name.charAt(0)}
                          </Avatar>
                        </Grid>
                        
                        <Grid item xs={12} sm sx={{ flex: 1 }}>
                          <Stack spacing={1}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                              {candidate.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                              {candidate.email}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                              Applied: {candidate.appliedAt}
                            </Typography>
                          </Stack>
                        </Grid>
                        
                        <Grid item xs={12} sm="auto">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Box textAlign="center">
                              <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                                Score
                              </Typography>
                              <Chip
                                label={`${candidate.score}%`}
                                sx={{
                                  bgcolor: getScoreColor(candidate.score),
                                  color: 'white',
                                  fontWeight: 700
                                }}
                              />
                            </Box>
                            
                            <Box textAlign="center">
                              <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>
                                Status
                              </Typography>
                              <Chip
                                label={candidate.status}
                                color={getStatusColor(candidate.status) as any}
                                sx={{
                                  textTransform: 'capitalize',
                                  fontWeight: 600
                                }}
                              />
                            </Box>
                          </Stack>
                        </Grid>
                        
                        <Grid item xs={12} sm="auto">
                          <Button
                            variant="outlined"
                            component={Link}
                            to={`/view-result?candidateId=${candidate.id}`}
                            sx={{
                              borderRadius: "15px",
                              px: 3,
                              py: 1
                            }}
                          >
                            View Details
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  ))}
                </Stack>
              )}
            </CardContent>
          </Card>
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "secondary.main",
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            {/* Logo */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                component="svg"
                sx={{
                  width: { xs: 40, md: 53 },
                  height: { xs: 68, md: 86 },
                  fill: "primary.main",
                }}
                viewBox="0 0 53 86"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.7183 86C34.2121 85.8976 34.0062 85.5288 33.7227 85.2419C26.4361 77.8638 21.2602 68.6269 18.7447 58.512C18.4475 57.0946 17.8379 55.7633 16.9614 54.6175C16.0848 53.4716 14.9639 52.5408 13.6822 51.8944C10.4153 50.071 6.96267 48.5958 3.77671 46.588C-0.610738 43.8563 -0.587117 41.9372 3.81721 39.1918C7.19217 37.0816 10.9046 35.6269 14.2796 33.5372C15.7291 32.826 16.9471 31.7098 17.7895 30.3206C18.1528 29.4007 18.4252 28.4468 18.6029 27.4727C21.2408 17.3517 26.4229 8.09367 33.6451 0.599371C34.4382 -0.220147 34.8432 -0.179171 35.6127 0.599371C41.0126 6.04917 46.4317 11.4705 51.8699 16.8634C52.582 17.5463 52.7238 17.9697 51.9509 18.7688C51.9509 18.7688 47.8301 25.0381 45.7005 28.1284C44.3974 30.4007 42.5555 32.3089 40.341 33.6806C36.7906 35.6269 33.014 37.1226 29.5412 39.2533C28.1 40.1343 26.2742 41.0358 26.2539 42.8592C26.2337 44.7646 28.1203 45.666 29.6019 46.5675C32.8689 48.5753 36.4025 50.0505 39.8112 51.8124C42.3643 53.3013 44.4653 55.4696 45.8861 58.0817C47.9111 61.1345 52.0555 67.175 52.0555 67.175C52.7035 67.8579 52.6023 68.1994 52.015 68.7935C46.4733 74.2843 40.9721 79.8126 35.4541 85.3239C35.228 85.5698 34.9445 85.7917 34.7183 86Z"
                />
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  color: "primary.main",
                  fontSize: { xs: "1.875rem", md: "3rem", lg: "4rem" },
                }}
              >
                Aikyuu
              </Typography>
            </Stack>

            {/* Copyright */}
            <Typography
              variant="body1"
              sx={{
                color: "background.default",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              Copyright © Resumate. All rights reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Modals */}
      <EditPositionModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        position={position}
        onSave={handleEdit}
      />
      
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Position"
        message="Are you sure you want to delete this position? This action cannot be undone."
        confirmText="Delete"
      />
    </Box>
  );
}