import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/auth-layout';
import { InputField } from '@/components/ui/input-field';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const rightContent = (
    <div className="relative w-[567px] h-[505px]">
      {/* Professional person with floating UI elements */}
      <img 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
        alt="Professional person with phone"
        className="w-full h-full object-cover rounded-lg"
      />
      
      {/* Floating register icon */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-aikyuu-dark rounded-full flex items-center justify-center">
        <div className="text-aikyuu-primary text-xs font-bold">Register ✓</div>
      </div>
      
      {/* Floating ID card icon */}
      <div className="absolute bottom-16 left-8 w-20 h-16 bg-aikyuu-dark rounded-lg flex items-center justify-center">
        <div className="text-aikyuu-primary text-2xl">📋</div>
      </div>
      
      {/* Floating chart icon */}
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-aikyuu-dark rounded-full flex items-center justify-center">
        <div className="text-aikyuu-primary text-2xl">📊</div>
      </div>
    </div>
  );

  return (
    <AuthLayout rightContent={rightContent}>
      <div className="max-w-[807px]">
        {/* Heading */}
        <h1 className="text-aikyuu-dark font-montserrat text-[45px] font-bold leading-normal mb-[23px]">
          Join Aikyuu, Let's Do it!
        </h1>
        
        {/* Subheading */}
        <p className="text-aikyuu-dark font-montserrat text-2xl font-medium leading-normal mb-[133px]">
          Enter below details to create an account
        </p>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            name="username"
            type="text"
            label="User Name *"
            value={formData.username}
            onChange={handleInputChange}
            className="mb-6"
          />
          
          <InputField
            name="email"
            type="email"
            label="E-mail *"
            value={formData.email}
            onChange={handleInputChange}
            className="mb-6"
          />
          
          {/* Password Row */}
          <div className="flex gap-6 mb-6">
            <InputField
              name="password"
              type="password"
              label="Password *"
              value={formData.password}
              onChange={handleInputChange}
              className="flex-1"
            />
            
            <InputField
              name="confirmPassword"
              type="password"
              label="Confirm Password *"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="flex-1"
            />
          </div>
          
          {/* Terms Checkbox */}
          <div className="flex items-center gap-4 mb-[135px]">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="w-[21px] h-[21px] border border-aikyuu-dark rounded accent-aikyuu-primary"
            />
            <label className="text-aikyuu-dark font-montserrat text-xl font-normal leading-normal">
              I agree to the terms of service and{' '}
              <span className="font-bold">privacy policy</span>
            </label>
          </div>
          
          {/* Submit Button */}
          <AikyuuButton type="submit" className="mb-[117px]">
            Sign Up
          </AikyuuButton>
          
          {/* Sign In Link */}
          <div className="text-center">
            <span className="text-aikyuu-dark font-montserrat text-xl font-medium">
              Already have an account ?{' '}
            </span>
            <Link 
              to="/signin"
              className="text-aikyuu-primary font-montserrat text-xl font-medium underline hover:no-underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
