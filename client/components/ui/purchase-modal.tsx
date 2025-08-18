import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  Box, 
  Typography, 
  Button, 
  Divider, 
  IconButton 
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  pricePerPackage?: number;
  creditsPerPackage?: number;
}

export function PurchaseModal({ 
  isOpen, 
  onClose, 
  planName = "Growth Mode",
  pricePerPackage = 10.00,
  creditsPerPackage = 50
}: PurchaseModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const totalCredits = creditsPerPackage * quantity;
  const totalPrice = pricePerPackage * quantity;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handlePurchase = () => {
    // Handle purchase logic here
    console.log(`Purchasing ${quantity} packages of ${planName} for $${totalPrice.toFixed(2)}`);
    onClose();
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { borderRadius: '30px', maxHeight: '90vh' }
      }}
    >
      <DialogContent sx={{ p: { xs: 4, md: 6 } }}>
        <Box>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <DialogTitle sx={{ 
              color: 'primary.dark', 
              fontFamily: 'Montserrat', 
              fontSize: { xs: '1.5rem', md: '1.875rem' }, 
              fontWeight: 700,
              p: 0
            }}>
              {planName}
            </DialogTitle>
          </Box>

          {/* Content */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Separator */}
            <Divider />

            {/* Price and Credits Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' } 
                }}>
                  Price per package:
                </Typography>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                  fontWeight: 700 
                }}>
                  {pricePerPackage.toFixed(2)} $
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' } 
                }}>
                  Credits per package:
                </Typography>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                  fontWeight: 700 
                }}>
                  {creditsPerPackage} CVs
                </Typography>
              </Box>
            </Box>

            {/* Separator */}
            <Divider />

            {/* Quantity Selector */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              alignItems: { xs: 'flex-start', md: 'center' }, 
              justifyContent: 'space-between', 
              gap: 2 
            }}>
              <Typography sx={{ 
                color: 'primary.dark', 
                fontFamily: 'Montserrat', 
                fontSize: { xs: '1.25rem', md: '1.5rem' } 
              }}>
                Select Quantity:
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Decrease Button */}
                <IconButton
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  sx={{
                    width: { xs: '48px', md: '64px' },
                    height: { xs: '48px', md: '64px' },
                    borderRadius: '12px',
                    backgroundColor: quantity <= 1 ? 'grey.200' : 'grey.200',
                    color: quantity <= 1 ? 'grey.400' : 'primary.dark',
                    '&:hover': {
                      backgroundColor: quantity <= 1 ? 'grey.200' : 'grey.300',
                    },
                    '&:disabled': {
                      cursor: 'not-allowed',
                    },
                  }}
                >
                  <RemoveIcon sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' } }} />
                </IconButton>

                {/* Quantity Display */}
                <Box sx={{ 
                  width: { xs: '128px', md: '160px' }, 
                  height: { xs: '48px', md: '64px' }, 
                  border: '2px solid', 
                  borderColor: 'grey.200', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <Typography sx={{ 
                    color: 'primary.dark', 
                    fontFamily: 'Montserrat', 
                    fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                    fontWeight: 700 
                  }}>
                    {quantity}
                  </Typography>
                </Box>

                {/* Increase Button */}
                <IconButton
                  onClick={incrementQuantity}
                  sx={{
                    width: { xs: '48px', md: '64px' },
                    height: { xs: '48px', md: '64px' },
                    borderRadius: '12px',
                    backgroundColor: 'grey.200',
                    color: 'primary.dark',
                    '&:hover': {
                      backgroundColor: 'grey.300',
                    },
                  }}
                >
                  <AddIcon sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' } }} />
                </IconButton>
              </Box>
            </Box>

            {/* Separator */}
            <Divider />

            {/* Totals */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' } 
                }}>
                  Total Credits:
                </Typography>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                  fontWeight: 700 
                }}>
                  {totalCredits} CVs
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' } 
                }}>
                  Total Price:
                </Typography>
                <Typography sx={{ 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                  fontWeight: 700 
                }}>
                  {totalPrice.toFixed(2)} $
                </Typography>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              gap: 2, 
              pt: 4 
            }}>
              {/* Cancel Button */}
              <Button
                onClick={onClose}
                variant="outlined"
                fullWidth
                sx={{ 
                  height: { xs: '64px', md: '80px' }, 
                  borderRadius: '50px', 
                  borderColor: 'grey.300', 
                  backgroundColor: 'background.paper', 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                  fontWeight: 700,
                  '&:hover': { backgroundColor: 'grey.50' } 
                }}
              >
                Cancel
              </Button>

              {/* Purchase Button */}
              <Button
                onClick={handlePurchase}
                variant="contained"
                fullWidth
                sx={{ 
                  height: { xs: '64px', md: '80px' }, 
                  borderRadius: '50px', 
                  backgroundColor: 'primary.main', 
                  color: 'primary.dark', 
                  fontFamily: 'Montserrat', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                  fontWeight: 700,
                  '&:hover': { backgroundColor: 'rgba(0, 235, 189, 0.9)' } 
                }}
              >
                Purchase for {totalPrice.toFixed(2)}$
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
