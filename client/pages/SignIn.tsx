import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/auth-layout';
import { InputField } from '@/components/ui/input-field';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', formData);

    // For now, simulate successful login and redirect to dashboard
    // In a real app, you'd verify credentials with your backend
    if (formData.emailOrUsername && formData.password) {
      navigate('/dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AuthLayout>
      <div className="max-w-full lg:max-w-[807px]">
        {/* Heading */}
        <h1 className="text-aikyuu-dark font-montserrat text-2xl md:text-4xl lg:text-[45px] font-bold leading-normal mb-4 md:mb-[23px]">
          Always Welcome, Aikyuu!
        </h1>

        {/* Subheading */}
        <p className="text-aikyuu-text font-montserrat text-lg md:text-xl lg:text-2xl font-medium leading-normal mb-8 md:mb-16 lg:mb-[167px]">
          Sign in to Aikyuu
        </p>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <InputField
            name="emailOrUsername"
            type="text"
            label="E-mail or username"
            value={formData.emailOrUsername}
            onChange={handleInputChange}
            className="mb-4 md:mb-6"
          />

          <InputField
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="mb-8 md:mb-16 lg:mb-[110px]"
          />

          {/* Forgot Password Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 md:mb-16 lg:mb-[173px]">
            <Link
              to="/reset-password"
              className="text-aikyuu-primary font-montserrat text-base md:text-lg lg:text-xl font-medium underline hover:no-underline"
            >
              Forgot password
            </Link>
            <Link
              to="/reset-password"
              className="text-aikyuu-primary font-montserrat text-base md:text-lg lg:text-xl font-medium underline hover:no-underline"
            >
              Forgot username
            </Link>
          </div>

          {/* Submit Button */}
          <AikyuuButton type="submit" className="mb-8 md:mb-16 lg:mb-[117px]">
            Log in
          </AikyuuButton>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-aikyuu-dark font-montserrat text-base md:text-lg lg:text-xl font-medium">
              Don't have an account?{' '}
            </span>
            <Link
              to="/register"
              className="text-aikyuu-primary font-montserrat text-base md:text-lg lg:text-xl font-medium underline hover:no-underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
