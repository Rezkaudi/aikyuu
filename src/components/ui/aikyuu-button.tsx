import React from 'react';
import { Button, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary';
}

export function AikyuuButton({
  variant = 'primary',
  children,
  sx,
  ...props
}: ButtonProps) {
  return (
    <Button
      variant={variant === 'primary' ? 'contained' : 'outlined'}
      fullWidth
      sx={{
        height: { xs: '64px', md: '80px' },
        borderRadius: '100px',
        fontFamily: 'Montserrat',
        fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.625rem' },
        fontWeight: 700,
        textTransform: 'none',
        ...(variant === 'primary' && {
          backgroundColor: 'primary.main',
          color: 'white',
          // '&:hover': {
          //   backgroundColor: '#00D4A8',
          // },
        }),
        ...(variant === 'secondary' && {
          backgroundColor: 'transparent',
          color: 'primary.main',
          borderColor: 'primary.main',
          // '&:hover': {
          //   backgroundColor: 'rgba(0, 235, 189, 0.1)',
          // },
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
