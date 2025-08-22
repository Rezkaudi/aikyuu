import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField,
  FormLabel,
  Stack
} from '@mui/material';
import { 
  Lock as LockIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import { AuthLayout } from '@/components/layout/auth-layout';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function ResetPasswordNew() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle new password logic here
    console.log('New password:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const rightContent = (
    <Box sx={{ position: "relative", width: 494, height: 357 }}>
      {/* Person working on laptop */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop"
        alt="Person working on laptop"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 1
        }}
      />

      {/* Small person image bottom left */}
      <Box
        sx={{
          position: "absolute",
          bottom: -4,
          left: -8,
          width: 179,
          height: 239
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1494790108755-2616b60b7751?w=200&h=250&fit=crop&crop=face"
          alt="Professional woman"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 1
          }}
        />
      </Box>

      {/* Security/lock icon */}
      <Box
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          width: 139,
          height: 139,
          backgroundColor: "secondary.main",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <SecurityIcon
          sx={{
            width: 64,
            height: 64,
            color: "primary.main"
          }}
        />
      </Box>

      {/* Lock icon on laptop */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "33%",
          width: 64,
          height: 64,
          backgroundColor: "secondary.main",
          borderRadius: 2,
          transform: "rotate(90deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <LockIcon
          sx={{
            width: 32,
            height: 32,
            color: "#E2A3FF"
          }}
        />
      </Box>
    </Box>
  );

  return (
    <AuthLayout rightContent={rightContent}>
      <Box sx={{ maxWidth: 807 }}>
        {/* Heading */}
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.8125rem", // 45px
            fontWeight: 700,
            lineHeight: "normal",
            mb: "23px",
            color: "text.primary"
          }}
        >
          Reset your password
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.5rem", // 24px
            fontWeight: 500,
            lineHeight: 1.375,
            mb: "167px",
            maxWidth: 807,
            color: "text.secondary"
          }}
        >
          We're sorry to hear that's happen, don't worry we're here for you<br />
          Just enter your e-mail to help you
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Box>
              <FormLabel
                sx={{
                  display: "block",
                  color: "grey.500",
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  mb: 2
                }}
              >
                New Password *
              </FormLabel>
              <TextField
                fullWidth
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleInputChange}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: "60px",
                    borderRadius: "16px"
                  }
                }}
              />
            </Box>

            <Box>
              <FormLabel
                sx={{
                  display: "block",
                  color: "grey.500",
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  mb: 2
                }}
              >
                Confirm the new password *
              </FormLabel>
              <TextField
                fullWidth
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                sx={{
                  mb: "288px",
                  '& .MuiOutlinedInput-root': {
                    height: "60px",
                    borderRadius: "16px"
                  }
                }}
              />
            </Box>

            {/* Submit Button */}
            <AikyuuButton type="submit" sx={{ mb: "117px" }}>
              Reset Password
            </AikyuuButton>

            {/* Back to Sign In Link */}
            <Box textAlign="center">
              <Typography
                component="span"
                variant="h6"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "text.primary"
                }}
              >
                Back to{' '}
              </Typography>
              <Typography
                component={Link}
                to="/signin"
                variant="h6"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "primary.main",
                  textDecoration: "underline",
                  "&:hover": {
                    textDecoration: "none"
                  }
                }}
              >
                Sign In
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </AuthLayout>
  );
}