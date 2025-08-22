import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent,
  Stack,
  Grid
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Navbar } from '@/components/ui/navbar';

interface HistoryEntry {
  id: number;
  amount: number;
  paidAt: string;
}

export default function History() {
  const [historyEntries] = useState<HistoryEntry[]>([
    { id: 1, amount: 50, paidAt: 'Jul 11, 2025' },
    { id: 2, amount: 50, paidAt: 'Jul 11, 2025' },
    { id: 3, amount: 50, paidAt: 'Jul 11, 2025' },
    { id: 4, amount: 50, paidAt: 'Jul 11, 2025' }
  ]);

  const handleSeeMore = () => {
    console.log('Load more history entries');
    // Handle loading more entries
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
            History
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

        {/* History List */}
        <Container maxWidth="md">
          <Stack spacing={2}>
            {historyEntries.map((entry) => (
              <Card
                key={entry.id}
                sx={{
                  borderRadius: { xs: "12px", md: "20px" },
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent sx={{ px: { xs: 3, md: 5 }, py: { xs: 3, md: 4 } }}>
                  <Grid 
                    container 
                    spacing={{ xs: 2, md: 4 }}
                    alignItems="center"
                    sx={{ 
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 2, sm: 0 }
                    }}
                  >
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "grey.500",
                          fontSize: { xs: "1.125rem", md: "1.25rem" },
                        }}
                      >
                        Amount : {entry.amount}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.primary",
                          fontWeight: 700,
                          fontSize: { xs: "1.125rem", md: "1.25rem" },
                        }}
                      >
                        paid at: {entry.paidAt}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>

          {/* See More Button */}
          <Box display="flex" justifyContent="center" sx={{ mt: { xs: 6, md: 8 } }}>
            <Button
              variant="contained"
              onClick={handleSeeMore}
              endIcon={<ExpandMoreIcon />}
              sx={{
                borderRadius: "25px",
                px: { xs: 4, md: 6 },
                py: 2,
                fontSize: { xs: "1rem", md: "1.125rem" },
                minWidth: { xs: 180, md: 200 },
              }}
            >
              see more
            </Button>
          </Box>
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
