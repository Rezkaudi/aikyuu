import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent,
  Stack,
  Grid,
  LinearProgress,
  Chip,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import { 
  CheckCircle as CheckCircleIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  ArrowForward as ArrowForwardIcon,
  Close as CloseIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleShare = () => {
    console.log('Sharing analysis to:', email);
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
          <Typography variant="h4" sx={{ fontWeight: 700, color: "text.primary" }}>
            Share Analysis
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
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

export default function AnalysisCompleted() {
  const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const analysisRef = useRef<HTMLDivElement>(null);

  // Mock analysis data
  const analysisData = {
    candidateName: "Sarah Johnson",
    positionTitle: "Senior Frontend Developer",
    overallScore: 87,
    matchPercentage: 92,
    processedCVs: 1,
    totalCVs: 1,
    analysisTime: "2 minutes",
    completedAt: new Date().toLocaleDateString(),
    keyFindings: [
      "Strong technical skills in React and TypeScript",
      "5+ years of relevant experience", 
      "Leadership experience with team management",
      "Excellent educational background"
    ],
    recommendations: [
      "Proceed with technical interview",
      "Consider for senior-level position",
      "Schedule team meeting"
    ],
    skillsAnalysis: [
      { skill: "React", score: 95, required: true },
      { skill: "TypeScript", score: 88, required: true },
      { skill: "JavaScript", score: 92, required: true },
      { skill: "Node.js", score: 75, required: false },
      { skill: "Python", score: 68, required: false }
    ]
  };

  const handleDownload = async () => {
    try {
      const content = `
        CV Analysis Report - Completed
        
        Position: ${analysisData.positionTitle}
        Candidate: ${analysisData.candidateName}
        Overall Score: ${analysisData.overallScore}%
        Match Percentage: ${analysisData.matchPercentage}%
        
        Analysis completed on: ${analysisData.completedAt}
        Processing time: ${analysisData.analysisTime}
        
        Key Findings:
        ${analysisData.keyFindings.map(finding => `• ${finding}`).join('\n')}
        
        Recommendations:
        ${analysisData.recommendations.map(rec => `• ${rec}`).join('\n')}
      `;
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Analysis_${analysisData.candidateName.replace(' ', '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'error';
  };

  const getScoreColorValue = (score: number) => {
    if (score >= 80) return 'success.main';
    if (score >= 60) return 'warning.main';
    return 'error.main';
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 }, pb: { xs: 8, md: 16 } }}>
        {/* Header with Success Animation */}
        <Box textAlign="center" sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ mb: 4 }}>
            <CheckCircleIcon
              sx={{
                fontSize: { xs: "4rem", md: "6rem" },
                color: "success.main",
                animation: "pulse 2s infinite"
              }}
            />
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4rem", lg: "4.5rem" },
              fontWeight: 700,
              mb: 3,
              color: "success.main",
            }}
          >
            Analysis Complete!
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
              Your CV analysis has been completed successfully.<br />
              View the detailed results below.
            </Typography>
          </Container>
        </Box>

        <Box ref={analysisRef}>
          <Stack spacing={6}>
            {/* Analysis Summary Card */}
            <Card
              sx={{
                borderRadius: "30px",
                p: { xs: 4, md: 8 },
                background: "linear-gradient(135deg, #00EBBD 0%, #00D4A8 100%)",
                color: "white",
                boxShadow: "0 10px 30px rgba(0, 235, 189, 0.3)",
              }}
            >
              <CardContent>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={8}>
                    <Stack spacing={3}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: "2rem", md: "3rem" },
                          fontWeight: 700,
                          mb: 2
                        }}
                      >
                        {analysisData.candidateName}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                          opacity: 0.9,
                          mb: 3
                        }}
                      >
                        Applied for: {analysisData.positionTitle}
                      </Typography>
                      <Stack direction="row" spacing={4} sx={{ flexWrap: "wrap", gap: 2 }}>
                        <Box>
                          <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                            Processing Time
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {analysisData.analysisTime}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                            CVs Processed
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {analysisData.processedCVs}/{analysisData.totalCVs}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                            Completed
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {analysisData.completedAt}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                      <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                        Overall Match
                      </Typography>
                      <Box sx={{ position: "relative", display: "inline-flex" }}>
                        <Box
                          sx={{
                            width: { xs: 120, md: 150 },
                            height: { xs: 120, md: 150 },
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Typography
                            variant="h2"
                            sx={{
                              fontSize: { xs: "2.5rem", md: "3rem" },
                              fontWeight: 800
                            }}
                          >
                            {analysisData.matchPercentage}%
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Key Findings */}
            <Card
              sx={{
                borderRadius: "25px",
                p: { xs: 4, md: 6 },
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                  <StarIcon sx={{ fontSize: "2rem", color: "primary.main" }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 700,
                      color: "text.primary"
                    }}
                  >
                    Key Findings
                  </Typography>
                </Stack>
                <Grid container spacing={2}>
                  {analysisData.keyFindings.map((finding, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Stack direction="row" alignItems="flex-start" spacing={2}>
                        <CheckCircleIcon sx={{ color: "success.main", fontSize: "1.5rem", mt: 0.25 }} />
                        <Typography variant="body1" sx={{ color: "text.primary" }}>
                          {finding}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Skills Analysis */}
            <Card
              sx={{
                borderRadius: "25px",
                p: { xs: 4, md: 6 },
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                  <TrendingUpIcon sx={{ fontSize: "2rem", color: "primary.main" }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 700,
                      color: "text.primary"
                    }}
                  >
                    Skills Analysis
                  </Typography>
                </Stack>
                <Stack spacing={3}>
                  {analysisData.skillsAnalysis.map((skill, index) => (
                    <Box key={index}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
                            {skill.skill}
                          </Typography>
                          {skill.required && (
                            <Chip
                              label="Required"
                              size="small"
                              sx={{
                                bgcolor: "error.main",
                                color: "white",
                                fontSize: "0.75rem"
                              }}
                            />
                          )}
                        </Stack>
                        <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600 }}>
                          {skill.score}%
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={skill.score}
                        sx={{
                          height: 10,
                          borderRadius: "5px",
                          backgroundColor: "grey.200",
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: getScoreColorValue(skill.score),
                            borderRadius: "5px",
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Recommendations */}
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
                  Recommendations
                </Typography>
                <Stack spacing={2}>
                  {analysisData.recommendations.map((rec, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={2}>
                      <ArrowForwardIcon sx={{ color: "primary.main", fontSize: "1.25rem" }} />
                      <Typography variant="body1" sx={{ color: "text.primary", fontWeight: 500 }}>
                        {rec}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
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
            variant="outlined"
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
            to="/view-result"
            sx={{
              px: 4,
              py: 2,
              borderRadius: "25px",
              fontSize: "1.125rem",
              fontWeight: 700,
              minWidth: { xs: "100%", sm: 200 }
            }}
          >
            View Details
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

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
}