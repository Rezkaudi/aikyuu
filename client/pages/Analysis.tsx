import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/ui/navbar';

export default function Analysis() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(55);

  useEffect(() => {
    // Simulate processing progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate to results page when complete
          setTimeout(() => {
            navigate('/view-result');
          }, 1000);
          return 100;
        }
        return Math.min(prev + Math.random() * 5, 100);
      });
    }, 800);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar 
        userCredits={50}
        userName="Alice ahmad"
        userAvatar="https://images.unsplash.com/photo-1494790108755-2616b60b7751?w=100&h=100&fit=crop&crop=face"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 md:px-12">
        {/* Process Flow Section */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 mb-14">
          {/* Process Steps Indicator */}
          <div className="relative mb-16">
            {/* Progress Line */}
            <div className="absolute top-6 left-12 right-12 h-1 bg-gray-300">
              <div className="absolute inset-0 bg-gradient-to-r from-aikyuu-primary via-aikyuu-primary to-gray-300" style={{width: '67%'}}></div>
            </div>

            {/* Step Circles */}
            <div className="relative flex justify-between items-center">
              {/* Step 1 - Completed */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-aikyuu-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <div className="w-6 h-6 bg-aikyuu-dark rounded-full"></div>
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    New Position
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    Create New Position
                  </p>
                </div>
              </div>

              {/* Step 2 - Completed */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-aikyuu-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <div className="w-6 h-6 bg-aikyuu-dark rounded-full"></div>
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    Upload CV
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    Download one or more CVs
                  </p>
                </div>
              </div>

              {/* Step 3 - Active */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4 relative z-10">
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    View Result
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    View Result
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-aikyuu-dark rounded-2xl p-18 shadow-sm">
            <div className="flex flex-col items-center gap-7">
              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-6 relative overflow-hidden">
                <div 
                  className="bg-aikyuu-primary h-6 rounded-full transition-all duration-700 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Processing Text */}
              <div className="flex items-center gap-2">
                <span className="text-aikyuu-primary font-montserrat text-xl md:text-2xl font-bold">
                  Processing
                </span>
                <span className="text-aikyuu-primary font-montserrat text-xl md:text-2xl font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Messages */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-gray-600 font-montserrat text-lg mb-4">
              {progress < 30 && "Analyzing uploaded CVs..."}
              {progress >= 30 && progress < 60 && "Comparing against criteria..."}
              {progress >= 60 && progress < 90 && "Generating recommendations..."}
              {progress >= 90 && progress < 100 && "Finalizing results..."}
              {progress >= 100 && "Analysis complete!"}
            </div>
            
            {progress >= 100 && (
              <div className="animate-pulse">
                <div className="text-aikyuu-primary font-montserrat text-xl font-bold">
                  Redirecting to results...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg
                width="52"
                height="86"
                viewBox="0 0 53 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-20 fill-aikyuu-primary"
              >
                <path
                  d="M34.7183 86.5C34.2121 86.3976 34.0062 86.0288 33.7227 85.7419C26.4361 78.3638 21.2602 69.1269 18.7447 59.012C18.4475 57.5946 17.8379 56.2633 16.9614 55.1175C16.0848 53.9716 14.9639 53.0408 13.6822 52.3944C10.4153 50.571 6.96267 49.0958 3.77671 47.088C-0.610738 44.3563 -0.587117 42.4372 3.81721 39.6918C7.19217 37.5816 10.9046 36.1269 14.2796 34.0372C15.7291 33.326 16.9471 32.2098 17.7895 30.8206C18.1528 29.9007 18.4252 28.9468 18.6029 27.9727C21.2408 17.8517 26.4229 8.59367 33.6451 1.09937C34.4382 0.279853 34.8432 0.320829 35.6127 1.09937C41.0126 6.54917 46.4317 11.9705 51.8699 17.3634C52.582 18.0463 52.7238 18.4697 51.9509 19.2688C51.9509 19.2688 47.8301 25.5381 45.7005 28.6284C44.3974 30.9007 42.5555 32.8089 40.341 34.1806C36.7906 36.1269 33.014 37.6226 29.5412 39.7533C28.1 40.6343 26.2742 41.5358 26.2539 43.3592C26.2337 45.2646 28.1203 46.166 29.6019 47.0675C32.8689 49.0753 36.4025 50.5505 39.8112 52.3124C42.3643 53.8013 44.4653 55.9696 45.8861 58.5817C47.9111 61.6345 52.0555 67.675 52.0555 67.675C52.7035 68.3579 52.6023 68.6994 52.015 69.2935C46.4733 74.7843 40.9721 80.3126 35.4541 85.8239C35.228 86.0698 34.9445 86.2917 34.7183 86.5Z"
                  fill="#00EBBD"
                />
              </svg>
              <span className="text-aikyuu-primary font-poppins text-4xl md:text-6xl font-bold">
                Aikyuu
              </span>
            </div>

            {/* Copyright */}
            <p className="text-gray-300 font-poppins text-lg md:text-xl text-center">
              Copyright © Resumate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
