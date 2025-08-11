import React from 'react';
import { AikyuuLogo } from '@/components/ui/aikyuu-logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  rightContent?: React.ReactNode;
}

export function AuthLayout({ children, rightContent }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 lg:max-w-[960px] relative">
        {/* Logo */}
        <div className="absolute left-4 md:left-[77px] top-4 md:top-[63px] z-10">
          <AikyuuLogo />
        </div>

        {/* Form Content */}
        <div className="px-4 md:px-[77px] pt-24 md:pt-[243px] pb-4 md:pb-[77px] min-h-screen lg:min-h-0">
          {children}
        </div>
      </div>

      {/* Right Side - Background/Illustration */}
      <div className="hidden lg:flex flex-1 lg:min-w-[960px] relative bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        {/* Background gradient/pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200" />

        {/* Content */}
        {rightContent && (
          <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
            {rightContent}
          </div>
        )}

        {/* Default illustration elements if no content provided */}
        {!rightContent && (
          <div className="relative z-10 w-full h-full">
            {/* Decorative circles and shapes */}
            <div className="absolute top-[320px] right-[231px] w-[190px] h-[196px] opacity-20">
              <div className="w-full h-full bg-aikyuu-primary rounded-full" />
            </div>

            {/* Person illustration placeholder */}
            <div className="absolute top-[433px] right-[326px] w-[353px] h-[364px]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                alt="Professional person"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Floating UI elements */}
            <div className="absolute top-[650px] left-[180px] w-[114px] h-[123px] bg-aikyuu-dark rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.25)]" />
            <div className="absolute top-[390px] left-[237px] w-[80px] h-[86px] bg-aikyuu-dark rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.25)]" />
          </div>
        )}
      </div>
    </div>
  );
}
