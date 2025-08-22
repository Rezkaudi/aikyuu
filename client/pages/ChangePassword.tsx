import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  TextField,
  IconButton,
  LinearProgress,
  Stack,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  ArrowBack as ArrowBackIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import { AikyuuLogo } from '@/components/ui/aikyuu-logo';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: 'Empty' };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[a-zA-Z]/.test(password)) score++;

    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    return {
      strength: score,
      label: score === 0 ? 'Empty' : labels[Math.min(score - 1, 3)]
    };
  };

  const passwordStrength = calculatePasswordStrength(formData.newPassword);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = () => {
    // Add validation logic here
    console.log('Password change submitted', formData);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const getPasswordStrengthColor = (strength: number) => {
    switch (strength) {
      case 1: return 'error';
      case 2: return 'warning';
      case 3: return 'info';
      case 4: return 'success';
      default: return 'grey';
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* Navigation */}
      <Container maxWidth="xl" sx={{ px: { xs: 1.5, md: 6 }, py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "25px",
            px: { xs: 3, md: 6 },
            py: { xs: 2, md: 3 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Logo */}
          <Box component={Link} to="/dashboard" sx={{ flexShrink: 0 }}>
            <AikyuuLogo />
          </Box>

          {/* Navigation Links & Profile */}
          <Stack direction="row" alignItems="center" spacing={{ xs: 3, md: 6 }}>
            {/* Navigation Links */}
            <Stack 
              direction="row" 
              alignItems="end" 
              spacing={4}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Typography
                component={Link}
                to="/use-cases"
                variant="h6"
                sx={{
                  color: "text.primary",
                  fontSize: { md: "1.125rem", lg: "1.5rem" },
                  fontWeight: 700,
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" }
                }}
              >
                Use Cases
              </Typography>
              <Typography
                component={Link}
                to="/pricing"
                variant="h6"
                sx={{
                  color: "text.primary",
                  fontSize: { md: "1.125rem", lg: "1.5rem" },
                  fontWeight: 700,
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" }
                }}
              >
                Pricing
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  fontSize: { md: "1.125rem", lg: "1.5rem" },
                  fontWeight: 700,
                }}
              >
                Your Credits :50
              </Typography>
            </Stack>

            {/* Profile */}
            <Box
              sx={{
                width: { xs: 48, md: 64 },
                height: { xs: 48, md: 64 },
                borderRadius: "50%",
                overflow: "hidden"
              }}
            >
              <Box
                component="img"
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7f6d580044efbb23c66de3733efc37ee4044bd7?width=200"
                alt="User Avatar"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
        <Grid container spacing={{ xs: 4, lg: 8 }}>
          {/* Left Side - Form */}
          <Grid item xs={12} lg={6}>
            <Stack spacing={4}>
              {/* Header */}
              <Stack direction="row" alignItems="center" spacing={5}>
                <IconButton onClick={() => navigate(-1)} sx={{ flexShrink: 0 }}>
                  <ArrowBackIcon sx={{ fontSize: "1.75rem" }} />
                </IconButton>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3rem", lg: "4.5rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "text.primary"
                  }}
                >
                  Change Password
                </Typography>
              </Stack>

              {/* Subtitle */}
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 400,
                  color: "text.primary"
                }}
              >
                Give Yourself A Great New Password
              </Typography>

              {/* Form */}
              <Stack spacing={3}>
                {/* Current Password */}
                <TextField
                  fullWidth
                  type={showPasswords.current ? "text" : "password"}
                  placeholder="Please enter your current password"
                  value={formData.currentPassword}
                  onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => togglePasswordVisibility('current')}
                        edge="end"
                      >
                        {showPasswords.current ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: { xs: "64px", md: "80px" },
                      borderRadius: "16px",
                      '& fieldset': {
                        borderColor: "grey.400",
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      fontSize: { xs: "1.125rem", md: "1.5rem" },
                      color: "grey.500",
                    },
                  }}
                />

                {/* New Password */}
                <TextField
                  fullWidth
                  type={showPasswords.new ? "text" : "password"}
                  placeholder="Please enter your new password"
                  value={formData.newPassword}
                  onChange={(e) => handleInputChange('newPassword', e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => togglePasswordVisibility('new')}
                        edge="end"
                      >
                        {showPasswords.new ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: { xs: "64px", md: "80px" },
                      borderRadius: "16px",
                      '& fieldset': {
                        borderColor: "grey.400",
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      fontSize: { xs: "1.125rem", md: "1.5rem" },
                      color: "grey.500",
                    },
                  }}
                />

                {/* Password Strength Indicator */}
                <Box>
                  <Stack direction="row" spacing={1.5}>
                    {[...Array(4)].map((_, index) => (
                      <LinearProgress
                        key={index}
                        variant="determinate"
                        value={index < passwordStrength.strength ? 100 : 0}
                        sx={{
                          height: 12,
                          width: 80,
                          borderRadius: "6px",
                          backgroundColor: "grey.300",
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: "primary.main",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                    <Typography variant="body2" color="grey.500">
                      Password Strength:
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.primary"
                      sx={{ fontWeight: 600 }}
                    >
                      {passwordStrength.label}
                    </Typography>
                  </Stack>
                </Box>

                {/* Confirm Password */}
                <TextField
                  fullWidth
                  type={showPasswords.confirm ? "text" : "password"}
                  placeholder="Please re-enter your new password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => togglePasswordVisibility('confirm')}
                        edge="end"
                      >
                        {showPasswords.confirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: { xs: "64px", md: "80px" },
                      borderRadius: "16px",
                      '& fieldset': {
                        borderColor: "grey.400",
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      fontSize: { xs: "1.125rem", md: "1.5rem" },
                      color: "grey.500",
                    },
                  }}
                />
              </Stack>

              {/* Action Buttons */}
              <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ pt: 4 }}>
                <Button
                  variant="outlined"
                  onClick={handleCancel}
                  sx={{
                    px: 4,
                    py: 2,
                    height: 56,
                    borderRadius: "25px",
                    borderColor: "#DAD2D2",
                    color: "text.primary",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: "grey.50",
                      borderColor: "#DAD2D2",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    px: 4,
                    py: 2,
                    height: 56,
                    borderRadius: "25px",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                >
                  Change
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Side - Rules */}
          <Grid item xs={12} lg={6} sx={{ mt: { xs: 0, lg: 12 } }}>
            <Card
              sx={{
                maxWidth: 512,
                backgroundColor: "#F6F6F6",
                borderRadius: "24px",
                p: { xs: 4, md: 5 },
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.875rem" },
                    fontWeight: 700,
                    mb: 4,
                    color: "text.primary"
                  }}
                >
                  Rules For Passwords
                </Typography>
                <List sx={{ p: 0 }}>
                  {[
                    "Minimum 8 characters",
                    "At least One special characters",
                    "At least One number",
                    "Can't be the same as a previous"
                  ].map((rule, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            backgroundColor: "text.primary",
                            borderRadius: "50%",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: { xs: "1.125rem", md: "1.5rem" },
                              color: "text.primary"
                            }}
                          >
                            {rule}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          mt: { xs: 8, md: 16 },
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