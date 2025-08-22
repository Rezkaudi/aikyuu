import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField,
  FormLabel,
  Stack
} from '@mui/material';
import { 
  Verified as VerifiedIcon,
  Phone as PhoneIcon,
  Favorite as FavoriteIcon
} from '@mui/icons-material';
import { AuthLayout } from '@/components/layout/auth-layout';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function Verification() {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification logic here
    console.log('Verification code:', code);
  };

  const rightContent = (
    <Box sx={{ position: "relative", width: 516, height: 509 }}>
      {/* Main person image */}
      <Box 
        sx={{
          position: "absolute",
          top: 4,
          left: 8,
          width: 372,
          height: 470,
          borderRadius: 2,
          overflow: "hidden"
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
          alt="Young person with phone"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </Box>

      {/* Phone/verification icon top left */}
      <Box
        sx={{
          position: "absolute",
          top: 5,
          left: 0,
          width: 119,
          height: 122,
          backgroundColor: "secondary.main",
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <PhoneIcon sx={{ color: "primary.main", fontSize: "2.5rem", mb: 1 }} />
        <Box sx={{ width: 64, height: 4, bgcolor: "primary.main", mb: 1 }} />
        <Box sx={{ width: 48, height: 4, bgcolor: "primary.main" }} />
      </Box>

      {/* Check/verification icon */}
      <Box
        sx={{
          position: "absolute",
          top: "285px",
          left: "183px",
          width: 139,
          height: 139,
          backgroundColor: "background.paper",
          borderRadius: "50%",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            width: 96,
            height: 68,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <VerifiedIcon sx={{ color: "white", fontSize: "2rem" }} />
        </Box>
      </Box>

      {/* Heart/love icon bottom right */}
      <Box
        sx={{
          position: "absolute",
          bottom: 4,
          right: 4,
          width: 64,
          height: 64,
          backgroundColor: "secondary.main",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FavoriteIcon sx={{ color: "error.main", fontSize: "1.5rem" }} />
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
          Verification
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.5rem", // 24px
            fontWeight: 500,
            lineHeight: "normal",
            mb: "283px",
            color: "text.primary"
          }}
        >
          Please, enter your verification code
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
                Code *
              </FormLabel>
              <TextField
                fullWidth
                name="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                sx={{
                  mb: "316px",
                  '& .MuiOutlinedInput-root': {
                    height: "60px",
                    borderRadius: "16px"
                  }
                }}
              />
            </Box>

            {/* Submit Button */}
            <AikyuuButton type="submit">
              Confirm
            </AikyuuButton>
          </Stack>
        </Box>
      </Box>
    </AuthLayout>
  );
}
