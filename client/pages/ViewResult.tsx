import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent,
  TextField,
  Stack,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Divider,
  Avatar
} from '@mui/material';
import { 
  Download as DownloadIcon,
  Share as ShareIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Star as StarIcon
} from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleShare = () => {
    console.log('Sharing to:', email);
    // Handle sharing logic
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "30px",
          p: 2
        }
      }}
    >
      <DialogTitle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Share Analysis
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          <Typography variant="body1">
            Enter email address to share the analysis results:
          </Typography>
          <TextField
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: "56px",
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
            py: 1.5
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleShare}
          sx={{
            borderRadius: "20px",
            px: 4,
            py: 1.5
          }}
        >
          Share
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default function ViewResult() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [, forceUpdate] = useState(0);
  const analysisRef = useRef<HTMLDivElement>(null);

  // Mock data for the analysis results
  const candidateData = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    overallScore: 85,
    strengths: [
      "Strong technical background in React and TypeScript",
      "5+ years of experience in frontend development", 
      "Leadership experience managing teams of 3-5 developers",
      "Excellent problem-solving skills"
    ],
    weaknesses: [
      "Limited experience with backend technologies",
      "No formal certification in cloud platforms",
      "Could benefit from more mobile development experience"
    ],
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Corp",
        duration: "2021 - Present",
        description: "Led frontend development team and architected scalable React applications"
      },
      {
        title: "Frontend Developer",
        company: "StartupXYZ", 
        duration: "2019 - 2021",
        description: "Developed responsive web applications using modern JavaScript frameworks"
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "University of Technology",
        year: "2019"
      },
      {
        degree: "Bachelor of Science in Software Engineering", 
        institution: "State University",
        year: "2017"
      }
    ],
    skills: [
      { name: "React", level: 9 },
      { name: "TypeScript", level: 8 },
      { name: "JavaScript", level: 9 },
      { name: "HTML/CSS", level: 8 },
      { name: "Node.js", level: 6 },
      { name: "Python", level: 7 }
    ]
  };

  const handleDownload = async () => {
    try {
      // Create a simple PDF-like content for download
      const content = `
        CV Analysis Report
        
        Candidate: ${candidateData.name}
        Email: ${candidateData.email}
        Overall Score: ${candidateData.overallScore}/100
        
        Strengths:
        ${candidateData.strengths.map(s => `• ${s}`).join('\n')}
        
        Areas for Improvement:
        ${candidateData.weaknesses.map(w => `• ${w}`).join('\n')}
        
        Experience:
        ${candidateData.experience.map(exp => `${exp.title} at ${exp.company} (${exp.duration})`).join('\n')}
      `;
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${candidateData.name.replace(' ', '_')}_Analysis.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

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
            Analysis Results
          </Typography>
          <Container maxWidth="md">
            <Typography
              variant="h5"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              Detailed analysis and insights for the candidate
            </Typography>
          </Container>
        </Box>

        {/* Analysis Content */}
        <Box ref={analysisRef}>
          <Stack spacing={6}>
            {/* Candidate Overview Card */}
            <Card
              sx={{
                borderRadius: "25px",
                p: { xs: 4, md: 6 },
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md="auto">
                    <Avatar
                      sx={{
                        width: { xs: 80, md: 120 },
                        height: { xs: 80, md: 120 },
                        fontSize: { xs: "2rem", md: "3rem" },
                        bgcolor: "primary.main",
                        color: "white"
                      }}
                    >
                      <PersonIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={12} md sx={{ flex: 1 }}>
                    <Stack spacing={2}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.875rem", md: "2.5rem" },
                          fontWeight: 700,
                          color: "text.primary"
                        }}
                      >
                        {candidateData.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {candidateData.email} • {candidateData.phone}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {candidateData.location}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md="auto">
                    <Box textAlign={{ xs: "left", md: "center" }}>
                      <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                        Overall Score
                      </Typography>
                      <Chip
                        label={`${candidateData.overallScore}%`}
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          px: 2,
                          py: 1,
                          height: "auto",
                          bgcolor: candidateData.overallScore >= 80 ? 'success.main' : 
                                   candidateData.overallScore >= 60 ? 'warning.main' : 'error.main',
                          color: 'white'
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Strengths and Weaknesses */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: "25px",
                    p: { xs: 4, md: 5 },
                    height: "100%",
                    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 700,
                        mb: 3,
                        color: "success.main"
                      }}
                    >
                      Strengths
                    </Typography>
                    <Stack spacing={2}>
                      {candidateData.strengths.map((strength, index) => (
                        <Stack key={index} direction="row" alignItems="flex-start" spacing={2}>
                          <StarIcon sx={{ color: "success.main", fontSize: "1.25rem", mt: 0.25 }} />
                          <Typography variant="body1" sx={{ color: "text.primary" }}>
                            {strength}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: "25px",
                    p: { xs: 4, md: 5 },
                    height: "100%",
                    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 700,
                        mb: 3,
                        color: "warning.main"
                      }}
                    >
                      Areas for Improvement
                    </Typography>
                    <Stack spacing={2}>
                      {candidateData.weaknesses.map((weakness, index) => (
                        <Stack key={index} direction="row" alignItems="flex-start" spacing={2}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: "warning.main",
                              mt: 1,
                              flexShrink: 0
                            }}
                          />
                          <Typography variant="body1" sx={{ color: "text.primary" }}>
                            {weakness}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Experience Section */}
            <Card
              sx={{
                borderRadius: "25px",
                p: { xs: 4, md: 6 },
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                  <WorkIcon sx={{ fontSize: "2rem", color: "primary.main" }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 700,
                      color: "text.primary"
                    }}
                  >
                    Experience
                  </Typography>
                </Stack>
                <Stack spacing={3}>
                  {candidateData.experience.map((exp, index) => (
                    <Box key={index}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "primary.main", fontWeight: 600, mb: 1 }}>
                        {exp.company} • {exp.duration}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary" }}>
                        {exp.description}
                      </Typography>
                      {index < candidateData.experience.length - 1 && (
                        <Divider sx={{ mt: 3, borderColor: "grey.200" }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card
              sx={{
                borderRadius: "25px",
                p: { xs: 4, md: 6 },
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                  <SchoolIcon sx={{ fontSize: "2rem", color: "primary.main" }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 700,
                      color: "text.primary"
                    }}
                  >
                    Education
                  </Typography>
                </Stack>
                <Stack spacing={3}>
                  {candidateData.education.map((edu, index) => (
                    <Box key={index}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "primary.main", fontWeight: 600 }}>
                        {edu.institution} • {edu.year}
                      </Typography>
                      {index < candidateData.education.length - 1 && (
                        <Divider sx={{ mt: 3, borderColor: "grey.200" }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card
              sx={{
                borderRadius: "25px",
                p: { xs: 4, md: 6 },
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 700,
                    mb: 4,
                    color: "text.primary"
                  }}
                >
                  Skills Assessment
                </Typography>
                <Grid container spacing={4}>
                  {candidateData.skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {skill.level}/10
                          </Typography>
                        </Stack>
                        <Box
                          sx={{
                            width: "100%",
                            height: 8,
                            backgroundColor: "grey.200",
                            borderRadius: "4px",
                            overflow: "hidden"
                          }}
                        >
                          <Box
                            sx={{
                              width: `${skill.level * 10}%`,
                              height: "100%",
                              backgroundColor: skill.level >= 8 ? "success.main" : 
                                               skill.level >= 6 ? "primary.main" : "warning.main",
                              transition: "width 0.3s ease"
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        </Box>

        {/* Action Buttons */}
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 3, 
            mt: 8,
            flexDirection: { xs: "column", sm: "row" }
          }}
        >
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              px: 4,
              py: 2,
              borderRadius: "25px",
              fontSize: "1.125rem",
              fontWeight: 700,
              minWidth: { xs: "100%", sm: 200 }
            }}
          >
            Download Report
          </Button>
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            onClick={() => setIsShareModalOpen(true)}
            sx={{
              px: 4,
              py: 2,
              borderRadius: "25px", 
              fontSize: "1.125rem",
              fontWeight: 700,
              minWidth: { xs: "100%", sm: 200 }
            }}
          >
            Share Results
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/dashboard"
            sx={{
              px: 4,
              py: 2,
              borderRadius: "25px",
              fontSize: "1.125rem", 
              fontWeight: 700,
              minWidth: { xs: "100%", sm: 200 }
            }}
          >
            Back to Dashboard
          </Button>
        </Box>
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

      {/* Share Modal */}
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </Box>
  );
}