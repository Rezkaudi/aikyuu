import "./global.css";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordNew from "./pages/ResetPasswordNew";
import Verification from "./pages/Verification";
import Dashboard from "./pages/Dashboard";
import CreatePosition from "./pages/CreatePosition";
import CriteriaManagement from "./pages/CriteriaManagement";
import CriteriaSimple from "./pages/CriteriaSimple";
import UploadCV from "./pages/UploadCV";
import Analysis from "./pages/Analysis";
import ViewResult from "./pages/ViewResult";
import UseCases from "./pages/UseCases";
import PositionView from "./pages/PositionView";
import AnalysisCompleted from "./pages/AnalysisCompleted";
import Pricing from "./pages/Pricing";
import ChangePassword from "./pages/ChangePassword";
import Feedback from "./pages/Feedback";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/reset-password" element={<ResetPasswordNew />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-position" element={<CreatePosition />} />
          <Route path="/criteria-management" element={<CriteriaManagement />} />
          <Route path="/criteria-simple" element={<CriteriaSimple />} />
          <Route path="/upload-cv" element={<UploadCV />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/view-result" element={<ViewResult />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/position/:id" element={<PositionView />} />
          <Route path="/position/:id/completed" element={<AnalysisCompleted />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/history" element={<History />} />
          <Route path="/home" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
