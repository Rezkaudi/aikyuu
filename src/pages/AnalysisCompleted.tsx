import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Navbar } from '../components/ui/navbar';
import { usePositionsStore } from '@/store/positionsStore';
import { useCriteriaStore } from '@/store/criteriaStore';
import { useAnalysisStore } from '@/store/analysisStore';
import { useUIStore } from '@/store/uiStore';
import { CVAnalysisResult } from '../types';

import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Paper,
  Grid,
  Link as MUILink,
  Menu,
  MenuItem,
  Switch,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import { Download as DownloadIcon, CheckCircle, Cancel } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import { Footer } from '@/components/ui/Footer';

const ToggleSwitch: React.FC<{
  isActive: boolean;
  label: string;
  onToggle?: () => void;
}> = ({ isActive, label, onToggle }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Switch checked={isActive} onChange={onToggle} />
      <Typography variant="h5" fontWeight={700}>{label}</Typography>
    </Stack>
  );
};

const CriteriaCard: React.FC<{
  criterias: Criteria[];
  isVisible: boolean;
}> = ({ criterias, isVisible }) => {
  if (!isVisible) return null;


  return (
    <Paper elevation={0} variant="outlined" sx={{ borderRadius: 3, p: 3 }}>
      <Grid container spacing={3}>
        {criterias.map((criterion, index) => (
          <Grid key={index} size={6}>
            <Paper key={criterion.id} elevation={0} variant="outlined" sx={{ borderRadius: 2 }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2 }}>
                <ToggleSwitch isActive={true} label={`Criteria-${index + 1}`} onToggle={() => console.log("d")} />
                <Typography variant="body1" fontWeight={700}>{criterion.description}</Typography>
              </Stack>
            </Paper>
          </Grid >

        ))}

      </Grid>
    </Paper>
  );
};

const AnalysisCard: React.FC<{ result: Resume }> = ({ result }) => {
  const progressPercentage = result.score;

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={3} alignItems="stretch">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" fontWeight={700}>{result.title}</Typography>
            <Typography variant="subtitle1">Score: {result.score}%</Typography>
          </Stack>

          <Box>
            <LinearProgress variant="determinate" value={progressPercentage} sx={{ height: 8, borderRadius: 4 }} />
          </Box>

          <ToggleSwitch isActive={true} label="Analysis cv" />

          <Paper elevation={0} variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
            <List disablePadding>
              {result.criteriaResults?.map((criteriaResult, index) => (
                <>
                  <ListItem key={criteriaResult.id} sx={{ py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      {criteriaResult.passed ? (
                        <CheckCircle color="success" fontSize="small" />
                      ) : (
                        <Cancel color="error" fontSize="small" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ variant: 'body1', fontWeight: 500 }}
                      secondaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                      primary={criteriaResult.text}
                      secondary={`Confidence: ${Math.round(criteriaResult.confidence * 100)}%`}
                    />
                  </ListItem>
                  {index !== result.criteriaResults.length - 1 && <Divider component="li" />}
                </>
              ))}
            </List>
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default function AnalysisCompleted() {
  const { id } = useParams<{ id: string }>();
  const { currentPosition, getPositionById } = usePositionsStore();
  const { showCriteria, showAnalysis, setShowCriteria, setShowAnalysis } = useUIStore();
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const fetchData = async () => {
    setIsLoadingPage(true)
    await getPositionById(id)
    setIsLoadingPage(false)
  }

  useEffect(() => {
    fetchData()
  }, [])


  if (isLoadingPage) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!currentPosition) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h4" fontWeight={700}>Position Not Found</Typography>
            <Typography color="text.secondary">The position you're looking for doesn't exist.</Typography>
            <Button component={RouterLink} to="/use-cases" variant="contained">Back to Use Cases</Button>
          </Stack>
        </Container>
      </Box>
    );
  }

  const handleExportCSV = () => {
    console.log("CSV")
    handleCloseMenu();
  };

  const handleExportExcel = () => {
    console.log("Excel")
    handleCloseMenu();
  };

  const handleExportJSON = () => {
    console.log("JSON")
    handleCloseMenu();
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Navbar />

      <Container maxWidth="xl" sx={{ pb: 8 }}>
        {/* Header */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 6 }}>
          <Box>
            <MUILink component={RouterLink} to={`/position/${id}`} underline="hover" color="primary" sx={{ display: 'inline-block', mb: 1 }}>
              ← Back to Position
            </MUILink>
            <Typography variant="h4" fontWeight={600}>{currentPosition.title} - Analysis Results</Typography>
          </Box>
          <Box>
            <Button variant="contained" sx={{ color: "white" }} endIcon={<DownloadIcon />} onClick={handleOpenMenu}>
              Export
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <MenuItem onClick={handleExportCSV}>Export as CSV</MenuItem>
              <MenuItem onClick={handleExportExcel}>Export as Excel</MenuItem>
              <MenuItem onClick={handleExportJSON}>Export as JSON</MenuItem>
            </Menu>
          </Box>
        </Stack>

        {/* Criteria */}
        <Stack sx={{ mb: 6 }}>
          <ToggleSwitch isActive={showCriteria} label="Criteria" onToggle={() => setShowCriteria(!showCriteria)} />
          <Box sx={{ mt: 3 }}>
            <CriteriaCard criterias={currentPosition.criterias} isVisible={showCriteria} />
          </Box>
        </Stack>

        {/* Analysis Results */}
        <Stack sx={{ mb: 4 }}>
          <ToggleSwitch isActive={showAnalysis} label="Analysis cv" onToggle={() => setShowAnalysis(!showAnalysis)} />
        </Stack>

        {showAnalysis && (
          <Grid container spacing={3}>
            {currentPosition.resumes.map((result) => (
              <Grid size={6} key={result.id}>
                <AnalysisCard result={result} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}