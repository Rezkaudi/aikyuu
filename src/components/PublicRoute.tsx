import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
// import { CircularProgress, Box } from '@mui/material';

const PublicRoute = () => {
    const { isAuthenticated } = useAuthStore();

    // If still loading, show a loading spinner
    // if (isLoading) {
    //     return (
    //         <Box
    //             display="flex"
    //             justifyContent="center"
    //             alignItems="center"
    //             minHeight="100vh"
    //         >
    //             <CircularProgress />
    //         </Box>
    //     );
    // }

    // If authenticated, redirect to dashboard
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    // If not authenticated, render the child routes
    return <Outlet />;
};

export default PublicRoute;