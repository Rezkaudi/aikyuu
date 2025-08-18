import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Stack, 
  Checkbox, 
  FormControlLabel 
} from '@mui/material';
import { AuthLayout } from '@/components/layout/auth-layout';
import { InputField } from '@/components/ui/input-field';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const rightContent = (
    <Box sx={{ position: 'relative', width: '567px', height: '505px' }}>
      {/* Professional person with floating UI elements */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
        alt="Professional person with phone"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      
      {/* Floating register icon */}
      <Box sx={{ 
        position: 'absolute', 
        top: 4, 
        right: 4, 
        width: '64px', 
        height: '64px', 
        backgroundColor: 'primary.dark', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Typography sx={{ color: 'primary.main', fontSize: '0.75rem', fontWeight: 700 }}>
          Register ✓
        </Typography>
      </Box>
      
      {/* Floating ID card icon */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: 8, 
        left: 4, 
        width: '80px', 
        height: '64px', 
        backgroundColor: 'primary.dark', 
        borderRadius: '8px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Typography sx={{ color: 'primary.main', fontSize: '1.5rem' }}>
          📋
        </Typography>
      </Box>
      
      {/* Floating chart icon */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: 16, 
        right: 8, 
        width: '64px', 
        height: '64px', 
        backgroundColor: 'primary.dark', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Typography sx={{ color: 'primary.main', fontSize: '1.5rem' }}>
          📊
        </Typography>
      </Box>
    </Box>
  );

  return (
    <AuthLayout rightContent={rightContent}>
      <Box sx={{ maxWidth: { xs: '100%', lg: '807px' } }}>
        {/* Heading */}
        <Typography 
          variant="h1" 
          sx={{ 
            color: 'primary.dark', 
            fontFamily: 'Montserrat', 
            fontSize: { xs: '2rem', md: '2.5rem', lg: '2.8125rem' }, 
            fontWeight: 700, 
            lineHeight: 'normal', 
            mb: { xs: 2, md: '23px' } 
          }}
        >
          Join Aikyuu, Let's Do it!
        </Typography>
        
        {/* Subheading */}
        <Typography sx={{ 
          color: 'text.primary', 
          fontFamily: 'Montserrat', 
          fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.5rem' }, 
          fontWeight: 500, 
          lineHeight: 'normal', 
          mb: { xs: 4, md: 8, lg: '133px' } 
        }}>
          Enter below details to create an account
        </Typography>
        
        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <InputField
            name="username"
            type="text"
            label="User Name *"
            value={formData.username}
            onChange={handleInputChange}
            sx={{ mb: 3 }}
          />
          
          <InputField
            name="email"
            type="email"
            label="E-mail *"
            value={formData.email}
            onChange={handleInputChange}
            sx={{ mb: 3 }}
          />
          
          {/* Password Row */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 3 }}>
            <InputField
              name="password"
              type="password"
              label="Password *"
              value={formData.password}
              onChange={handleInputChange}
              sx={{ flex: 1 }}
            />
            
            <InputField
              name="confirmPassword"
              type="password"
              label="Confirm Password *"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              sx={{ flex: 1 }}
            />
          </Stack>
          
          {/* Terms Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                sx={{
                  color: 'primary.dark',
                  '&.Mui-checked': {
                    color: 'primary.main',
                  },
                }}
              />
            }
            label={
              <Typography sx={{ 
                color: 'primary.dark', 
                fontFamily: 'Montserrat', 
                fontSize: { xs: '1rem', md: '1.25rem' }, 
                fontWeight: 400, 
                lineHeight: 'normal' 
              }}>
                I agree to the terms of service and{' '}
                <Typography component="span" sx={{ fontWeight: 700 }}>
                  privacy policy
                </Typography>
              </Typography>
            }
            sx={{ mb: { xs: 4, md: 8, lg: '135px' } }}
          />
          
          {/* Submit Button */}
          <AikyuuButton type="submit" sx={{ mb: { xs: 4, md: 8, lg: '117px' } }}>
            Sign Up
          </AikyuuButton>
          
          {/* Sign In Link */}
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
              Already have an account ?{' '}
            </Typography>
            <Typography
              component={Link}
              to="/signin"
              sx={{ 
                color: 'primary.main', 
                fontFamily: 'Montserrat', 
                fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' }, 
                fontWeight: 500, 
                textDecoration: 'underline',
                '&:hover': { textDecoration: 'none' } 
              }}
            >
              Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </AuthLayout>
  );
}