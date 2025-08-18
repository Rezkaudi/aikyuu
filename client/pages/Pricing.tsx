import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Stack, 
  Divider,
  Grid 
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';
import { PurchaseModal } from '@/components/ui/purchase-modal';

interface PlanCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  credits: string;
  billing: string;
  highlighted?: boolean;
  onSubscribe: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  features,
  price,
  credits,
  billing,
  highlighted = false,
  onSubscribe
}) => (
  <Card sx={{ 
    position: 'relative', 
    width: '100%', 
    maxWidth: '512px', 
    borderRadius: '50px', 
    p: { xs: 4, md: 6 }, 
    display: 'flex', 
    flexDirection: 'column',
    border: highlighted ? '2px solid' : 'none',
    borderColor: highlighted ? 'primary.main' : 'transparent',
    boxShadow: 2
  }}>
    <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ 
          color: 'primary.main', 
          fontFamily: 'Montserrat', 
          fontSize: { xs: '1.875rem', md: '2.5rem' }, 
          fontWeight: 700, 
          mb: 2 
        }}>
          {title}
        </Typography>
        <Typography sx={{ 
          color: 'primary.dark', 
          fontFamily: 'Montserrat', 
          fontSize: { xs: '1.5rem', md: '1.875rem' }, 
          fontWeight: 700, 
          mb: 3 
        }}>
          To improve your work
        </Typography>
        <Typography sx={{ 
          color: 'primary.dark', 
          fontFamily: 'Montserrat', 
          fontSize: { xs: '1.125rem', md: '1.25rem' }, 
          lineHeight: 1.6 
        }}>
          {description}
        </Typography>
      </Box>

      {/* Features */}
      <Stack spacing={2} sx={{ flex: 1, mb: 4 }}>
        {features.map((feature, index) => (
          <Box key={index} sx={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: 2, 
            py: 1, 
            borderTop: '1px solid', 
            borderBottom: '1px solid', 
            borderColor: 'grey.200' 
          }}>
            <CheckIcon sx={{ 
              color: 'primary.main', 
              width: '28px', 
              height: '28px', 
              flexShrink: 0, 
              mt: 0.25 
            }} />
            <Typography sx={{ 
              color: 'primary.dark', 
              fontFamily: 'Montserrat', 
              fontSize: { xs: '1.125rem', md: '1.25rem' }, 
              flex: 1 
            }}>
              {feature}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Pricing */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Box sx={{ mb: 1 }}>
          <Typography sx={{ 
            color: 'primary.dark', 
            fontFamily: 'Montserrat', 
            fontSize: { xs: '1.125rem', md: '1.25rem' } 
          }}>
            You pay:
          </Typography>
        </Box>
        <Typography sx={{ 
          color: 'primary.dark', 
          fontFamily: 'Montserrat', 
          fontSize: { xs: '1.5rem', md: '1.875rem' }, 
          fontWeight: 700, 
          mb: 1 
        }}>
          {price}
        </Typography>
        <Typography sx={{ 
          color: 'primary.dark', 
          fontFamily: 'Montserrat', 
          fontSize: { xs: '1.125rem', md: '1.25rem' } 
        }}>
          {billing}
        </Typography>
      </Box>

      {/* CTA Button */}
      <Button
        onClick={onSubscribe}
        variant="contained"
        fullWidth
        sx={{
          height: { xs: '64px', md: '72px' },
          borderRadius: '50px',
          backgroundColor: 'primary.main',
          color: 'primary.dark',
          fontFamily: 'Montserrat',
          fontSize: { xs: '1.5rem', md: '1.875rem' },
          fontWeight: 700,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'rgba(0, 235, 189, 0.9)',
          },
        }}
      >
        Subscribe Now
      </Button>
    </CardContent>
  </Card>
);

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const plans = [
    {
      title: "Ultimate Vault",
      description: "1,000 CVs for $100. Built for agencies and enterprises handling large-scale recruitment with speed and precision.",
      features: ["CV Credits: Process up to 1000 CVs"],
      price: "$100.00/package",
      credits: "1000 CVs",
      billing: "9.9 AED/month, billed annually",
      priceValue: 100.00,
      creditsValue: 1000
    },
    {
      title: "Growth Mode",
      description: "Get 50 CVs analyzed for just $10. A smart choice for scaling teams and recruiters needing efficient, mid-level volume.",
      features: ["CV Credits: Process up to 50 CVs"],
      price: "$10.00/package",
      credits: "50 CVs",
      billing: "9.9 AED/month, billed annually",
      priceValue: 10.00,
      creditsValue: 50
    },
    {
      title: "Starter Bundle",
      description: "Analyze 4 CVs for $1 — perfect for quick checks or light hiring. Ideal for individuals and small teams testing the waters.",
      features: ["CV Credits: Process up to 4 CVs"],
      price: "$1.00/package",
      credits: "4 CVs",
      billing: "9.9 AED/month, billed annually",
      priceValue: 1.00,
      creditsValue: 4
    }
  ];

  const handleSubscribe = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 }, pb: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h1" sx={{ 
            color: 'primary.dark', 
            fontFamily: 'Montserrat', 
            fontSize: { xs: '3rem', md: '3.75rem', lg: '4.5rem' }, 
            fontWeight: 700, 
            mb: 3 
          }}>
            Pricing
          </Typography>
          <Container maxWidth="md">
            <Typography sx={{ 
              color: 'primary.dark', 
              fontFamily: 'Montserrat', 
              fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.5625rem' }, 
              lineHeight: 1.6 
            }}>
              Choose Your Plan
              <br />
              Select the perfect package for your recruitment needs
            </Typography>
          </Container>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={{ xs: 4, lg: 6 }} justifyContent="center" sx={{ maxWidth: '1536px', mx: 'auto' }}>
          {plans.map((plan, index) => (
            <Grid key={index} size={{ xs: 12, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PlanCard
                title={plan.title}
                description={plan.description}
                features={plan.features}
                price={plan.price}
                credits={plan.credits}
                billing={plan.billing}
                highlighted={index === 1} // Highlight the middle plan
                onSubscribe={() => handleSubscribe(plan)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: '#1F1F1F', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: 2, textAlign: 'center' }}>
          <Stack alignItems="center" spacing={4}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <svg
                width="53"
                height="86"
                viewBox="0 0 53 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  width: '40px', 
                  height: '64px', 
                  fill: '#00EBBD'
                }}
              >
                <path
                  d="M34.7183 86C34.2121 85.8976 34.0062 85.5288 33.7227 85.2419C26.4361 77.8638 21.2602 68.6269 18.7447 58.512C18.4475 57.0946 17.8379 55.7633 16.9614 54.6175C16.0848 53.4716 14.9639 52.5408 13.6822 51.8944C10.4153 50.071 6.96267 48.5958 3.77671 46.588C-0.610738 43.8563 -0.587117 41.9372 3.81721 39.1918C7.19217 37.0816 10.9046 35.6269 14.2796 33.5372C15.7291 32.826 16.9471 31.7098 17.7895 30.3206C18.1528 29.4007 18.4252 28.4468 18.6029 27.4727C21.2408 17.3517 26.4229 8.09367 33.6451 0.599371C34.4382 -0.220147 34.8432 -0.179171 35.6127 0.599371C41.0126 6.04917 46.4317 11.4705 51.8699 16.8634C52.582 17.5463 52.7238 17.9697 51.9509 18.7688C51.9509 18.7688 47.8301 25.0381 45.7005 28.1284C44.3974 30.4007 42.5555 32.3089 40.341 33.6806C36.7906 35.6269 33.014 37.1226 29.5412 39.2533C28.1 40.1343 26.2742 41.0358 26.2539 42.8592C26.2337 44.7646 28.1203 45.666 29.6019 46.5675C32.8689 48.5753 36.4025 50.0505 39.8112 51.8124C42.3643 53.3013 44.4653 55.4696 45.8861 58.0817C47.9111 61.1345 52.0555 67.175 52.0555 67.175C52.7035 67.8579 52.6023 68.1994 52.015 68.7935C46.4733 74.2843 40.9721 79.8126 35.4541 85.3239C35.228 85.5698 34.9445 85.7917 34.7183 86Z"
                  fill="#00EBBD"
                />
              </svg>
              <Typography sx={{ 
                color: 'primary.main', 
                fontFamily: 'Poppins', 
                fontSize: { xs: '1.875rem', md: '3rem', lg: '4rem' }, 
                fontWeight: 700 
              }}>
                Aikyuu
              </Typography>
            </Stack>
            <Typography sx={{ 
              color: 'background.default', 
              fontFamily: 'Poppins', 
              fontSize: { xs: '1.125rem', md: '1.25rem' } 
            }}>
              Copyright © Resumate. All rights reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Purchase Modal */}
      {selectedPlan && (
        <PurchaseModal
          isOpen={isModalOpen}
          onClose={closeModal}
          planName={selectedPlan.title}
          pricePerPackage={selectedPlan.priceValue}
          creditsPerPackage={selectedPlan.creditsValue}
        />
      )}
    </Box>
  );
}