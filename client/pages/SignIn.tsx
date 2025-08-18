import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import { AuthLayout } from '@/components/layout/auth-layout';
import { InputField } from '@/components/ui/input-field';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', formData);

    // For now, simulate successful login and redirect to dashboard
    // In a real app, you'd verify credentials with your backend
    if (formData.emailOrUsername && formData.password) {
      navigate('/dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AuthLayout>
      <Box sx={{ maxWidth: { xs: '100%', lg: '807px' } }}>
        {/* Heading */}
        <Typography
          variant="h1"
          sx={{
            color: 'primary.dark',
            fontFamily: 'Montserrat',
            fontSize: { xs: '1.5rem', md: '2.5rem', lg: '2.8125rem' },
            fontWeight: 700,
            lineHeight: 'normal',
            mb: { xs: 2, md: '23px' }
          }}
        >
          Always Welcome, Aikyuu!
        </Typography>

        {/* Subheading */}
        <Typography sx={{
          color: 'text.primary',
          fontFamily: 'Montserrat',
          fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.5rem' },
          fontWeight: 500,
          lineHeight: 'normal',
          mb: { xs: 4, md: 8, lg: '167px' }
        }}>
          Sign in to Aikyuu
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
          <InputField
            name="emailOrUsername"
            type="text"
            label="E-mail or username"
            value={formData.emailOrUsername}
            onChange={handleInputChange}
            sx={{ mb: { xs: 2, md: 3 } }}
          />

          <InputField
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            sx={{ mb: { xs: 4, md: 8, lg: '110px' } }}
          />

          {/* Forgot Password Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            sx={{ mb: { xs: 4, md: 8, lg: '173px' } }}
          >
            <Typography
              component={Link}
              to="/reset-password"
              sx={{
                color: 'primary.main',
                fontFamily: 'Montserrat',
                fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                fontWeight: 500,
                textDecoration: 'underline',
                '&:hover': { textDecoration: 'none' }
              }}
            >
              Forgot password
            </Typography>
            <Typography
              component={Link}
              to="/reset-password"
              sx={{
                color: 'primary.main',
                fontFamily: 'Montserrat',
                fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                fontWeight: 500,
                textDecoration: 'underline',
                '&:hover': { textDecoration: 'none' }
              }}
            >
              Forgot username
            </Typography>
          </Stack>

          {/* Submit Button */}
          <AikyuuButton type="submit" sx={{ mb: { xs: 4, md: 8, lg: '117px' } }}>
            Log in
          </AikyuuButton>

          {/* Sign Up Link */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="span"
              sx={{
                color: 'primary.dark',
                fontFamily: 'Montserrat',
                fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                fontWeight: 500
              }}
            >
              Don't have an account?{' '}
            </Typography>
            <Typography
              component={Link}
              to="/register"
              sx={{
                color: 'primary.main',
                fontFamily: 'Montserrat',
                fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                fontWeight: 500,
                textDecoration: 'underline',
                '&:hover': { textDecoration: 'none' }
              }}
            >
              Sign up
            </Typography>
          </Box>
        </Box>
      </Box>
    </AuthLayout>
  );
}
