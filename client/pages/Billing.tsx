import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent,
  Stack,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Collapse
} from '@mui/material';
import { 
  Receipt as ReceiptIcon,
  CheckCircle as CheckCircleIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';
import { PurchaseModal } from '@/components/ui/purchase-modal';

interface BillRowProps {
  plan: string;
  startDate: string;
  endDate: string;
  package: string;
  price: string;
  status: 'active' | 'finished';
}

const BillRow: React.FC<BillRowProps> = ({ plan, startDate, endDate, package: packageValue, price, status }) => (
  <Card
    sx={{
      borderRadius: { xs: "12px", md: "20px" },
      p: { xs: 3, md: 4 },
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <CardContent sx={{ p: 0 }}>
      <Grid 
        container 
        spacing={{ xs: 2, md: 4 }}
        alignItems="center"
        sx={{ 
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 0 }
        }}
      >
        {/* Plan Info */}
        <Grid item xs={12} md="auto" sx={{ minWidth: { md: 240 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <ReceiptIcon sx={{ fontSize: "2.25rem", color: "text.primary" }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: "text.primary"
              }}
            >
              {plan}
            </Typography>
          </Stack>
        </Grid>

        {/* Date Info */}
        <Grid item xs={12} md="auto" sx={{ minWidth: { md: 320 } }}>
          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={{ xs: 1, sm: 3.5 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: "text.primary"
              }}
            >
              <Box component="span" sx={{ fontWeight: 400 }}>Started </Box>
              <Box component="span" sx={{ fontWeight: 700 }}>{startDate}</Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: "text.primary"
              }}
            >
              <Box component="span" sx={{ fontWeight: 400 }}>Ends </Box>
              <Box component="span" sx={{ fontWeight: 700 }}>{endDate}</Box>
            </Typography>
          </Stack>
        </Grid>

        {/* Package */}
        <Grid item xs={12} md="auto" sx={{ minWidth: { md: 128 } }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              color: "text.primary",
              textAlign: { xs: "left", md: "center" }
            }}
          >
            {packageValue}
          </Typography>
        </Grid>

        {/* Price */}
        <Grid item xs={12} md="auto" sx={{ minWidth: { md: 128 } }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              color: "text.primary",
              textAlign: { xs: "left", md: "center" }
            }}
          >
            {price}
          </Typography>
        </Grid>

        {/* Status */}
        <Grid item xs={12} md="auto" sx={{ minWidth: { md: 128 } }}>
          <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "center" } }}>
            <Chip
              label={status === 'active' ? 'Now' : 'finished'}
              sx={{
                px: 2.5,
                py: 1,
                fontSize: "1.125rem",
                fontWeight: 700,
                backgroundColor: status === 'active' ? 'rgba(0, 235, 189, 0.1)' : 'rgba(255, 70, 86, 0.1)',
                color: status === 'active' ? 'primary.main' : '#FF4656',
                '& .MuiChip-label': {
                  px: 1
                }
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default function Billing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handleSubscribe = (planName: string, price: number, credits: number) => {
    setSelectedPlan({ title: planName, priceValue: price, creditsValue: credits });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const pastBills = [
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00",
      status: 'active' as const
    },
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00",
      status: 'finished' as const
    },
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00",
      status: 'finished' as const
    },
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00",
      status: 'finished' as const
    },
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00",
      status: 'finished' as const
    }
  ];

  const pricingPlans = [
    {
      name: "Ultimate Vault",
      subtitle: "To improve your work",
      description: "1,000 CVs for $100. Built for agencies and enterprises handling large-scale recruitment with speed and precision.",
      features: ["CV Credits: Process up to 1000 CVs"],
      price: "$100.00/package",
      billing: "9.9 AED/month, billed annually",
      credits: 1000,
      priceValue: 100.00
    },
    {
      name: "Growth Mode",
      subtitle: "To improve your work",
      description: "Get 50 CVs analyzed for just $10. A smart choice for scaling teams and recruiters needing efficient, mid-level volume.",
      features: ["CV Credits: Process up to 50 CVs"],
      price: "$10.00/package",
      billing: "9.9 AED/month, billed annually",
      credits: 50,
      priceValue: 10.00
    },
    {
      name: "Starter Bundle",
      subtitle: "To improve your work",
      description: "Analyze 4 CVs for $1 — perfect for quick checks or light hiring. Ideal for individuals and small teams testing the waters.",
      features: ["CV Credits: Process up to 4 CVs"],
      price: "$1.00/package",
      billing: "9.9 AED/month, billed annually",
      credits: 4,
      priceValue: 1.00
    }
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 }, pb: { xs: 8, md: 16 } }}>
        {/* Header */}
        <Box textAlign="center" sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4rem", lg: "4.5rem" },
              fontWeight: 700,
              mb: 3,
              color: "text.primary",
            }}
          >
            Billing
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
              Choose Your Plan<br />
              Select the perfect package for your recruitment needs
            </Typography>
          </Container>
        </Box>

        <Stack spacing={8}>
          {/* Past Bills Section */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.875rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 4,
                color: "text.primary"
              }}
            >
              Past Bills
            </Typography>

            <Stack spacing={2}>
              {/* Table Header - Hidden on Mobile */}
              <Card
                sx={{
                  borderRadius: "12px",
                  px: 3,
                  py: 2,
                  display: { xs: "none", md: "block" },
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item sx={{ minWidth: 240 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                      Plan
                    </Typography>
                  </Grid>
                  <Grid item sx={{ minWidth: 320 }}>
                    <Typography variant="body1" sx={{ color: "text.primary" }}>
                      Date
                    </Typography>
                  </Grid>
                  <Grid item sx={{ minWidth: 128 }}>
                    <Typography variant="body1" sx={{ color: "text.primary", textAlign: "center" }}>
                      package
                    </Typography>
                  </Grid>
                  <Grid item sx={{ minWidth: 128 }}>
                    <Typography variant="body1" sx={{ color: "text.primary", textAlign: "center" }}>
                      Price
                    </Typography>
                  </Grid>
                  <Grid item sx={{ minWidth: 128 }}>
                    <Typography variant="body1" sx={{ color: "text.primary", textAlign: "center" }}>
                      Status
                    </Typography>
                  </Grid>
                </Grid>
              </Card>

              {/* Bills List */}
              {pastBills.map((bill, index) => (
                <BillRow key={index} {...bill} />
              ))}
            </Stack>
          </Box>

          {/* My Plan Section */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.875rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 4,
                color: "text.primary"
              }}
            >
              My Plan
            </Typography>

            <Card
              sx={{
                borderRadius: "12px",
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 4 },
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid 
                container 
                spacing={{ xs: 2, md: 4 }}
                alignItems="center"
                sx={{ 
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 0 }
                }}
              >
                {/* Plan Info */}
                <Grid item xs={12} md="auto" sx={{ minWidth: { md: 240 } }}>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <ReceiptIcon sx={{ fontSize: "2.25rem", color: "text.primary" }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "text.primary"
                      }}
                    >
                      Ultimate Vault
                    </Typography>
                  </Stack>
                </Grid>

                {/* Plan Details */}
                <Grid item xs={12} md="auto" sx={{ minWidth: { md: 256 } }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "text.primary" }}
                  >
                    1000 CVs
                  </Typography>
                </Grid>

                <Grid item xs={12} md="auto" sx={{ minWidth: { md: 128 } }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "text.primary" }}
                  >
                    $100.00
                  </Typography>
                </Grid>

                {/* Subscription Info */}
                <Grid item xs={12} md sx={{ flex: 1 }}>
                  <Stack spacing={0.5}>
                    <Typography variant="h6" sx={{ color: "text.primary" }}>
                      Subscribed on Mar 15, 2024
                    </Typography>
                    <Typography variant="h6" sx={{ color: "text.primary" }}>
                      Renews on Apr 15, 2025
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Box>

          {/* Pricing Plans */}
          <Box>
            <Grid container spacing={4}>
              {pricingPlans.map((plan, index) => (
                <Grid item xs={12} lg={4} key={index}>
                  <Card
                    sx={{
                      borderRadius: "50px",
                      p: { xs: 4, md: 6 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      {/* Header */}
                      <Box textAlign="center" sx={{ mb: 4 }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: { xs: "1.875rem", md: "2.5rem" },
                            fontWeight: 700,
                            color: "primary.main",
                            mb: 2
                          }}
                        >
                          {plan.name}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: "1.5rem", md: "1.875rem" },
                            fontWeight: 700,
                            color: "text.primary",
                            mb: 3
                          }}
                        >
                          {plan.subtitle}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: { xs: "1.125rem", md: "1.25rem" },
                            lineHeight: 1.6,
                            color: "text.primary"
                          }}
                        >
                          {plan.description}
                        </Typography>
                      </Box>

                      {/* Features */}
                      <Box sx={{ flex: 1, mb: 4 }}>
                        <Divider sx={{ my: 2, borderColor: "grey.200" }} />
                        {plan.features.map((feature, idx) => (
                          <Stack key={idx} direction="row" alignItems="flex-start" spacing={2} sx={{ py: 2 }}>
                            <CheckCircleIcon sx={{ color: "primary.main", fontSize: "1.75rem", mt: 0.5 }} />
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: { xs: "1.125rem", md: "1.25rem" },
                                color: "text.primary"
                              }}
                            >
                              {feature}
                            </Typography>
                          </Stack>
                        ))}
                        <Divider sx={{ my: 2, borderColor: "grey.200" }} />
                      </Box>

                      {/* Pricing */}
                      <Box textAlign="center" sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ mb: 1, color: "text.primary" }}>
                          You pay:
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: "1.5rem", md: "1.875rem" },
                            fontWeight: 700,
                            color: "text.primary",
                            mb: 1
                          }}
                        >
                          {plan.price}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ color: "text.primary" }}
                        >
                          {plan.billing}
                        </Typography>
                      </Box>

                      {/* Subscribe Button */}
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleSubscribe(plan.name, plan.priceValue, plan.credits)}
                        sx={{
                          height: { xs: 64, md: 72 },
                          borderRadius: "25px",
                          fontSize: { xs: "1.5rem", md: "1.875rem" },
                          fontWeight: 700,
                        }}
                      >
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
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