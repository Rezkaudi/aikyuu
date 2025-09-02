import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import api from '../services/api';
import { toast } from 'react-toastify';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    login: (data: LoginFormData) => Promise<void>;
    signup: (data: RegisterFormData) => Promise<{ verificationId: string }>;
    verify: (data: VerifyFormData) => Promise<void>;
    logout: () => void;
    refreshTokenFn: () => Promise<void>;
    resendVerificationCode: (data: VerificationCodeFormData) => Promise<{ verificationId: string }>;
    forgetPassword: (data: ForgetPasswordFormData) => Promise<{ verificationId: string }>;
    resetPassword: (data: ResetPasswordFormData) => Promise<void>;
    clearError: () => void;
}

const endPoint = {
    login: "/v1/user/auth/login-email",
    register: "/v1/user/auth/register",
    verify: "/v1/user/auth/verify",
    refreshToken: "/v1/user/auth/refreshToken",
    resendVerificationCode: "/v1/user/auth/resendVerificationCode",
    forgetPassword: "/v1/user/auth/forgetPasswordFirstStep",
    resetPassword: "/v1/user/auth/forgetPasswordSecondStep"
};

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set, get) => ({
                user: null,
                accessToken: null,
                refreshToken: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,

                login: async (data: LoginFormData) => {
                    set({ isLoading: true, error: null });
                    try {
                        const response = await api.post(endPoint.login, data);
                        const { accessToken, refreshToken, user } = response.data;

                        set({
                            user,
                            accessToken,
                            refreshToken,
                            isAuthenticated: true,
                            isLoading: false,
                            error: null
                        });

                        toast.success('Login successful! Welcome back.');
                    } catch (error: any) {
                        const errorMessage = error.response?.data?.message || 'Login failed';
                        set({
                            isLoading: false,
                            error: errorMessage
                        });
                        toast.error(errorMessage);
                        throw error;
                    }
                },

                signup: async (data: RegisterFormData) => {
                    set({ isLoading: true, error: null });
                    try {
                        const response = await api.post(endPoint.register, data);
                        set({ isLoading: false, error: null });

                        toast.success('Account created successfully! Please check your email for verification.');
                        return response.data; // { verificationId }
                    } catch (error: any) {
                        const errorMessage = error.response?.data?.message || 'Signup failed';
                        set({
                            isLoading: false,
                            error: errorMessage
                        });
                        toast.error(errorMessage);
                        throw error;
                    }
                },

                verify: async (data: VerifyFormData) => {
                    set({ isLoading: true, error: null });
                    try {
                        const response = await api.post(endPoint.verify, data);
                        const { accessToken, refreshToken, user } = response.data;

                        set({
                            user,
                            accessToken,
                            refreshToken,
                            isAuthenticated: true,
                            isLoading: false,
                            error: null
                        });

                        toast.success('Account verified successfully! You are now logged in.');
                    } catch (error: any) {
                        const errorMessage = error.response?.data?.message || 'Verification failed';
                        set({
                            isLoading: false,
                            error: errorMessage
                        });
                        toast.error(errorMessage);
                        throw error;
                    }
                },

                logout: () => {
                    set({
                        user: null,
                        accessToken: null,
                        refreshToken: null,
                        isAuthenticated: false,
                        error: null
                    });

                    toast.info('You have been logged out successfully.');
                },

                refreshTokenFn: async () => {
                    const { refreshToken: currentRefreshToken } = get();
                    if (!currentRefreshToken) {
                        toast.error('Session expired. Please log in again.');
                        throw new Error('No refresh token available');
                    }

                    try {
                        const response = await api.post(endPoint.refreshToken, {}, {
                            headers: {
                                'Authorization': `Bearer ${currentRefreshToken}`
                            }
                        });

                        const { accessToken, refreshToken, user } = response.data;

                        set({
                            user,
                            accessToken,
                            refreshToken,
                            isAuthenticated: true
                        });

                        toast.success('Session refreshed successfully.');
                    } catch (error: any) {
                        // If refresh fails, logout the user
                        const errorMessage = error.response?.data?.message || 'Session refresh failed';
                        get().logout();
                        toast.error(errorMessage);
                        throw error;
                    }
                },

                resendVerificationCode: async (data: VerificationCodeFormData) => {
                    set({ isLoading: true, error: null });
                    try {
                        const response = await api.post(endPoint.resendVerificationCode, data);
                        set({ isLoading: false, error: null });

                        toast.success('Verification code sent successfully. Please check your email.');
                        return response.data;
                    } catch (error: any) {
                        const errorMessage = error.response?.data?.message || 'Failed to resend verification code';
                        set({
                            isLoading: false,
                            error: errorMessage
                        });
                        toast.error(errorMessage);
                        throw error;
                    }
                },

                forgetPassword: async (data: ForgetPasswordFormData) => {
                    set({ isLoading: true, error: null });
                    try {
                        const response = await api.post(endPoint.forgetPassword, data);
                        set({ isLoading: false, error: null });

                        toast.success('Password reset instructions sent to your email.');
                        return response.data; // { verificationId }
                    } catch (error: any) {
                        const errorMessage = error.response?.data?.message || 'Password reset failed';
                        set({
                            isLoading: false,
                            error: errorMessage
                        });
                        toast.error(errorMessage);
                        throw error;
                    }
                },

                resetPassword: async (data: ResetPasswordFormData) => {
                    set({ isLoading: true, error: null });
                    try {
                        const response = await api.post(endPoint.resetPassword, data);
                        const { accessToken, refreshToken, user } = response.data;

                        set({
                            user,
                            accessToken,
                            refreshToken,
                            isAuthenticated: true,
                            isLoading: false,
                            error: null
                        });

                        toast.success('Password reset successfully. You are now logged in.');
                    } catch (error: any) {
                        const errorMessage = error.response?.data?.message || 'Password reset failed';
                        set({
                            isLoading: false,
                            error: errorMessage
                        });
                        toast.error(errorMessage);
                        throw error;
                    }
                },

                clearError: () => {
                    set({ error: null });
                    toast.dismiss(); // Dismiss any error toasts when clearing errors
                }
            }),
            {
                name: 'auth-storage',
                partialize: (state) => ({
                    user: state.user,
                    accessToken: state.accessToken,
                    refreshToken: state.refreshToken,
                    isAuthenticated: state.isAuthenticated
                })
            }
        ),
        {
            name: 'auth-store'
        }
    )
);