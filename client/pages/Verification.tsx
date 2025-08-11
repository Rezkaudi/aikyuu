import React, { useState } from 'react';
import { AuthLayout } from '@/components/layout/auth-layout';
import { InputField } from '@/components/ui/input-field';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function Verification() {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification logic here
    console.log('Verification code:', code);
  };

  const rightContent = (
    <div className="relative w-[516px] h-[509px]">
      {/* Main person image */}
      <div className="absolute top-8 left-16 w-[372px] h-[470px] rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
          alt="Young person with phone"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Phone/verification icon top left */}
      <div className="absolute top-10 left-0 w-[119px] h-[122px] bg-aikyuu-dark rounded-lg flex flex-col items-center justify-center">
        <div className="text-aikyuu-primary text-4xl mb-2">📱</div>
        <div className="w-16 h-1 bg-aikyuu-primary mb-2"></div>
        <div className="w-12 h-1 bg-aikyuu-primary"></div>
      </div>
      
      {/* Check/verification icon */}
      <div className="absolute top-[285px] left-[183px] w-[139px] h-[139px] bg-white rounded-full shadow-lg flex items-center justify-center">
        <svg className="w-16 h-16 fill-aikyuu-primary" viewBox="0 0 96 68">
          <circle cx="48" cy="34" r="30" fill="#00EBBD" />
          <path d="M38 34l8 8 16-16" stroke="white" strokeWidth="3" fill="none" />
        </svg>
      </div>
      
      {/* Heart/love icon bottom right */}
      <div className="absolute bottom-8 right-8 w-16 h-16 bg-aikyuu-dark rounded-full flex items-center justify-center">
        <div className="text-red-500 text-2xl">❤️</div>
      </div>
    </div>
  );

  return (
    <AuthLayout rightContent={rightContent}>
      <div className="max-w-[807px]">
        {/* Heading */}
        <h1 className="text-aikyuu-dark font-montserrat text-[45px] font-bold leading-normal mb-[23px]">
          Verification
        </h1>
        
        {/* Subheading */}
        <p className="text-aikyuu-dark font-montserrat text-2xl font-medium leading-normal mb-[283px]">
          Please, enter your verification code 
        </p>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            name="code"
            type="text"
            label="Code *"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mb-[316px]"
          />
          
          {/* Submit Button */}
          <AikyuuButton type="submit">
            Confirm
          </AikyuuButton>
        </form>
      </div>
    </AuthLayout>
  );
}
