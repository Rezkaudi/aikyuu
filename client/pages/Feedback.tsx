import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent,
  TextField,
  Stack,
  Input,
  FormLabel,
  Divider
} from '@mui/material';
import { 
  CloudUpload as CloudUploadIcon, 
  Cancel as CancelIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';

export default function Feedback() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    attachedFile: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, attachedFile: file }));
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:', formData);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      title: '',
      description: '',
      attachedFile: null
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 16 } }}>
        {/* Header */}
        <Box textAlign="center" sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4.5rem" },
              fontWeight: 700,
              mb: 3,
              color: "text.primary",
            }}
          >
            feedback
          </Typography>
          <Container maxWidth="md">
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              Choose Your Plan<br />
              Select the perfect package for your recruitment needs
            </Typography>
          </Container>
        </Box>

        {/* Feedback Form */}
        <Container maxWidth="md">
          <Card
            sx={{
              borderRadius: "30px",
              p: { xs: 4, md: 8 },
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 8 } }}>
              {/* Form Header */}
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 500,
                    mb: 4,
                    color: "text.primary",
                    fontSize: { xs: "1.5rem", md: "1.875rem" },
                  }}
                >
                  Submit Feedback
                </Typography>
                <Divider sx={{ height: 1.5, bgcolor: "grey.200" }} />
              </Box>

              {/* Form Fields */}
              <Stack spacing={{ xs: 4, md: 6 }}>
                {/* Title Field */}
                <Box>
                  <FormLabel
                    sx={{
                      display: "block",
                      color: "grey.500",
                      fontSize: { xs: "1.125rem", md: "1.25rem" },
                      fontWeight: 400,
                      mb: 1.5,
                      textTransform: "capitalize",
                      letterSpacing: "0.025em",
                    }}
                  >
                    Title
                  </FormLabel>
                  <TextField
                    fullWidth
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: { xs: "64px", md: "71px" },
                        borderRadius: "16px",
                        '& fieldset': {
                          borderColor: "grey.400",
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                        color: "text.primary",
                      },
                    }}
                  />
                </Box>

                {/* Description Field */}
                <Box>
                  <FormLabel
                    sx={{
                      display: "block",
                      color: "grey.500",
                      fontSize: { xs: "1.125rem", md: "1.25rem" },
                      fontWeight: 400,
                      mb: 1.5,
                      textTransform: "capitalize",
                      letterSpacing: "0.025em",
                    }}
                  >
                    Description
                  </FormLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        minHeight: { xs: "128px", md: "140px" },
                        borderRadius: "16px",
                        '& fieldset': {
                          borderColor: "grey.400",
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                        color: "text.primary",
                      },
                    }}
                  />
                </Box>

                {/* File Upload Field */}
                <Box sx={{ maxWidth: "400px" }}>
                  <FormLabel
                    sx={{
                      display: "block",
                      color: "grey.500",
                      fontSize: { xs: "1.125rem", md: "1.25rem" },
                      fontWeight: 400,
                      mb: 1.5,
                      textTransform: "capitalize",
                      letterSpacing: "0.025em",
                    }}
                  >
                    Attach Image (optional)
                  </FormLabel>
                  <Box sx={{ position: "relative" }}>
                    <Input
                      type="file"
                      inputProps={{ accept: "image/*" }}
                      onChange={handleFileChange}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                    />
                    <Button
                      variant="outlined"
                      component="div"
                      startIcon={<CloudUploadIcon />}
                      sx={{
                        height: { xs: "64px", md: "71px" },
                        px: { xs: 3, md: 5 },
                        backgroundColor: "background.default",
                        border: "1px solid white",
                        borderRadius: "16px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        color: "grey.500",
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                        fontWeight: 400,
                        textTransform: "capitalize",
                        letterSpacing: "0.025em",
                        width: "100%",
                        justifyContent: "flex-start",
                        '&:hover': {
                          backgroundColor: "grey.100",
                          borderColor: "white",
                        },
                      }}
                    >
                      {formData.attachedFile ? formData.attachedFile.name : 'choose file'}
                    </Button>
                  </Box>
                </Box>
              </Stack>

              {/* Action Buttons */}
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="flex-end" 
                sx={{ mt: { xs: 6, md: 8 } }}
              >
                <Button
                  variant="outlined"
                  onClick={handleCancel}
                  startIcon={<CancelIcon />}
                  sx={{
                    minWidth: { xs: 180, md: 200 },
                    height: { xs: 48, md: 56 },
                    borderRadius: "25px",
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    fontWeight: 700,
                    borderColor: "grey.200",
                    color: "text.primary",
                    '&:hover': {
                      backgroundColor: "grey.50",
                      borderColor: "grey.200",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  endIcon={<SendIcon />}
                  sx={{
                    minWidth: { xs: 180, md: 200 },
                    height: { xs: 48, md: 56 },
                    borderRadius: "25px",
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    fontWeight: 700,
                  }}
                >
                  Submit Feedback
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
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
                  fontSize: { xs: "1.875rem", md: "4rem" },
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
    </Box>
  );
}
