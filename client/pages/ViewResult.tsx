import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/ui/navbar';

// Mock data for candidates - updated to match Figma design
const candidates = [
  {
    id: 1,
    name: 'alice almorshed',
    score: 50,
    criteria: [
      { text: 'Office ipsum be muted. Charts closest desig', passed: true },
      { text: 'Office ipsum be muted. Charts closest desig', passed: false },
      { text: 'Office ipsum you must closest desig', passed: true },
      { text: 'Office ipsum you must be muted. Charts desig', passed: false },
      { text: 'Office ipsum you must be muted. Charts closest desig', passed: false },
      { text: 'Office ipsum you must be muted', passed: true },
      { text: 'Office ipsum you closest desig', passed: true },
      { text: 'Office ipsum you must be muted. Charts closest desig', passed: false },
      { text: 'Office ipsum you must be muted. Charts', passed: true }
    ]
  },
  {
    id: 2,
    name: 'alice almorshed',
    score: 50,
    criteria: [
      { text: 'Office ipsum be muted. Charts closest desig', passed: true },
      { text: 'Office ipsum be muted. Charts closest desig', passed: false },
      { text: 'Office ipsum you must closest desig', passed: true },
      { text: 'Office ipsum you must be muted. Charts desig', passed: false },
      { text: 'Office ipsum you must be muted. Charts closest desig', passed: false },
      { text: 'Office ipsum you must be muted', passed: true },
      { text: 'Office ipsum you closest desig', passed: true },
      { text: 'Office ipsum you must be muted. Charts closest desig', passed: false },
      { text: 'Office ipsum you must be muted. Charts', passed: true }
    ]
  }
];

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M39.9559 63.1864C39.7077 63.436 39.3692 63.5754 39.0174 63.5754C38.6656 63.5754 38.327 63.436 38.0788 63.1864L30.5835 55.6898C29.8055 54.9118 29.8055 53.6506 30.5835 52.874L31.522 51.9355C32.3 51.1575 33.5598 51.1575 34.3378 51.9355L39.0174 56.6151L51.6622 43.9702C52.4402 43.1922 53.7014 43.1922 54.478 43.9702L55.4165 44.9088C56.1945 45.6867 56.1945 46.9479 55.4165 47.7245L39.9559 63.1864Z"
      fill="#00EBBD"
    />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M45.9015 122.481L51.3401 127.92C51.941 128.52 51.941 129.495 51.3401 130.095L50.615 130.82C50.0139 131.421 49.0397 131.421 48.4398 130.82L43.0014 125.381L37.5629 130.821C36.9619 131.422 35.9877 131.422 35.3878 130.821L34.6616 130.096C34.0607 129.495 34.0607 128.52 34.6616 127.921L40.1011 122.481L34.6627 117.043C34.0617 116.442 34.0617 115.467 34.6627 114.867L35.3878 114.142C35.9887 113.541 36.9629 113.541 37.5629 114.142L43.0014 119.581L48.4398 114.142C49.0409 113.541 50.0151 113.541 50.615 114.142L51.3401 114.867C51.941 115.468 51.941 116.443 51.3401 117.043L45.9015 122.481Z"
      fill="#FF4656"
    />
  </svg>
);

const ToggleSwitch = ({ isOn }: { isOn: boolean }) => (
  <div className="relative w-16 h-9 bg-gray-300 rounded-full p-1">
    <div className="w-8 h-8 bg-aikyuu-primary rounded-full flex items-center justify-center">
      <div className="w-5 h-5 bg-aikyuu-dark rounded-full"></div>
    </div>
  </div>
);

const CandidateCard = ({ candidate }: { candidate: typeof candidates[0] }) => {
  return (
    <div className="flex flex-col items-center gap-9">
      {/* Score Header */}
      <div className="w-full max-w-[701px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-aikyuu-dark font-montserrat text-2xl font-bold">
            {candidate.name}
          </h3>
          <span className="text-aikyuu-dark font-montserrat text-xl font-medium">
            Score: {candidate.score}%
          </span>
        </div>
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-1.5 bg-gray-300 rounded-full"></div>
          <div 
            className="absolute top-0 left-0 h-1.5 bg-aikyuu-primary rounded-full"
            style={{ width: `${candidate.score}%` }}
          ></div>
          <div 
            className="absolute top-0 w-3 h-3 bg-aikyuu-primary rounded-full transform -translate-y-1/2 translate-y-0.5"
            style={{ left: `${candidate.score}%`, transform: 'translateX(-50%) translateY(-25%)' }}
          ></div>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="w-full max-w-[701px]">
        {/* Toggle Header */}
        <div className="flex items-center gap-6 mb-5">
          <ToggleSwitch isOn={true} />
          <h4 className="text-aikyuu-dark font-montserrat text-2xl font-bold">
            Analysis cv
          </h4>
        </div>

        {/* Criteria List */}
        <div className="bg-white rounded-[40px] p-8">
          <div className="space-y-0">
            {candidate.criteria.map((criterion, index) => (
              <div key={index} className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
                <div className="mr-6 flex-shrink-0">
                  {criterion.passed ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        d="M39.9559 63.1864C39.7077 63.436 39.3692 63.5754 39.0174 63.5754C38.6656 63.5754 38.327 63.436 38.0788 63.1864L30.5835 55.6898C29.8055 54.9118 29.8055 53.6506 30.5835 52.874L31.522 51.9355C32.3 51.1575 33.5598 51.1575 34.3378 51.9355L39.0174 56.6151L51.6622 43.9702C52.4402 43.1922 53.7014 43.1922 54.478 43.9702L55.4165 44.9088C56.1945 45.6867 56.1945 46.9479 55.4165 47.7245L39.9559 63.1864Z"
                        fill="#00EBBD"
                        transform="scale(0.4)"
                      />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        d="M45.9015 122.481L51.3401 127.92C51.941 128.52 51.941 129.495 51.3401 130.095L50.615 130.82C50.0139 131.421 49.0397 131.421 48.4398 130.82L43.0014 125.381L37.5629 130.821C36.9619 131.422 35.9877 131.422 35.3878 130.821L34.6616 130.096C34.0607 129.495 34.0607 128.52 34.6616 127.921L40.1011 122.481L34.6627 117.043C34.0617 116.442 34.0617 115.467 34.6627 114.867L35.3878 114.142C35.9887 113.541 36.9629 113.541 37.5629 114.142L43.0014 119.581L48.4398 114.142C49.0409 113.541 50.0151 113.541 50.615 114.142L51.3401 114.867C51.941 115.468 51.941 116.443 51.3401 117.043L45.9015 122.481Z"
                        fill="#FF4656"
                        transform="scale(0.3)"
                      />
                    </svg>
                  )}
                </div>
                <p className="text-aikyuu-dark font-montserrat text-xl font-medium flex-1">
                  {criterion.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ViewResult() {
  const navigate = useNavigate();
  const [showCriteria, setShowCriteria] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        userCredits={50}
        userName="Alice ahmad"
        userAvatar="https://images.unsplash.com/photo-1494790108755-2616b60b7751?w=100&h=100&fit=crop&crop=face"
      />
      
      <div className="max-w-7xl mx-auto px-3 md:px-12">
        {/* Progress Steps */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 mb-14">
          <div className="relative mb-16">
            {/* Progress Line Background */}
            <div className="absolute top-6 left-12 right-12 h-1.5 bg-gray-300 rounded-full">
              <div className="absolute inset-0 bg-aikyuu-primary rounded-full" style={{ width: '100%' }}></div>
            </div>
            
            {/* Progress Steps */}
            <div className="relative flex justify-between items-center">
              {/* Step 1: New Position */}
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

              {/* Step 2: Upload CV */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-aikyuu-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <div className="w-6 h-6 bg-aikyuu-dark rounded-full"></div>
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    Upload CV
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    Create New Position
                  </p>
                </div>
              </div>

              {/* Step 3: View Result */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-aikyuu-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <div className="w-6 h-6 bg-aikyuu-dark rounded-full"></div>
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    View Result
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    Create New Position
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Position and Criteria Section */}
        <div className="max-w-6xl mx-auto mb-16 space-y-16">
          {/* Position Title */}
          <div className="flex items-center gap-16">
            <span className="text-gray-500 font-montserrat text-3xl font-medium">
              Position:
            </span>
            <span className="text-aikyuu-dark font-montserrat text-3xl font-bold">
              ui/ux designer
            </span>
          </div>

          {/* Criteria Section */}
          <div className="space-y-10">
            {/* Criteria Header */}
            <div className="flex items-center gap-6">
              <ToggleSwitch isOn={showCriteria} />
              <h2 className="text-aikyuu-dark font-montserrat text-2xl font-bold">
                Criteria
              </h2>
            </div>

            {/* Criteria Content */}
            {showCriteria && (
              <div className="bg-white rounded-b-5 p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-1">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="bg-white rounded-4 p-6 border border-gray-100">
                        <div className="flex items-center gap-6">
                          <span className="text-gray-500 font-montserrat text-lg font-medium">
                            Criteria-{num}:
                          </span>
                          <span className="text-aikyuu-dark font-montserrat text-base font-bold">
                            Office ipsum you must be desig
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-1">
                    {[5, 6, 7, 8].map((num) => (
                      <div key={num} className="bg-white rounded-4 p-6 border border-gray-100">
                        <div className="flex items-center gap-6">
                          <span className="text-gray-500 font-montserrat text-lg font-medium">
                            Criteria-{num}:
                          </span>
                          <span className="text-aikyuu-dark font-montserrat text-base font-bold">
                            Office ipsum you must be desig
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Analysis CV Section */}
          <div className="space-y-10">
            {/* Analysis Header */}
            <div className="flex items-center gap-6">
              <ToggleSwitch isOn={true} />
              <h2 className="text-aikyuu-dark font-montserrat text-2xl font-bold">
                Analysis cv
              </h2>
            </div>

            {/* Candidates Grid - Only 2 cards as per Figma */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {candidates.slice(0, 2).map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg width="52" height="86" className="w-12 h-20 fill-aikyuu-primary" viewBox="0 0 53 87">
                <path d="M34.7183 86.5C34.2121 86.3976 34.0062 86.0288 33.7227 85.7419C26.4361 78.3638 21.2602 69.1269 18.7447 59.012C18.4475 57.5946 17.8379 56.2633 16.9614 55.1175C16.0848 53.9716 14.9639 53.0408 13.6822 52.3944C10.4153 50.571 6.96267 49.0958 3.77671 47.088C-0.610738 44.3563 -0.587117 42.4372 3.81721 39.6918C7.19217 37.5816 10.9046 36.1269 14.2796 34.0372C15.7291 33.326 16.9471 32.2098 17.7895 30.8206C18.1528 29.9007 18.4252 28.9468 18.6029 27.9727C21.2408 17.8517 26.4229 8.59367 33.6451 1.09937C34.4382 0.279853 34.8432 0.320829 35.6127 1.09937C41.0126 6.54917 46.4317 11.9705 51.8699 17.3634C52.582 18.0463 52.7238 18.4697 51.9509 19.2688C51.9509 19.2688 47.8301 25.5381 45.7005 28.6284C44.3974 30.9007 42.5555 32.8089 40.341 34.1806C36.7906 36.1269 33.014 37.6226 29.5412 39.7533C28.1 40.6343 26.2742 41.5358 26.2539 43.3592C26.2337 45.2646 28.1203 46.166 29.6019 47.0675C32.8689 49.0753 36.4025 50.5505 39.8112 52.3124C42.3643 53.8013 44.4653 55.9696 45.8861 58.5817C47.9111 61.6345 52.0555 67.675 52.0555 67.675C52.7035 68.3579 52.6023 68.6994 52.015 69.2935C46.4733 74.7843 40.9721 80.3126 35.4541 85.8239C35.228 86.0698 34.9445 86.2917 34.7183 86.5Z" fill="#00EBBD"/>
              </svg>
              <span className="text-aikyuu-primary font-poppins text-4xl md:text-6xl font-bold">
                Aikyuu
              </span>
            </div>
            <p className="text-gray-300 font-poppins text-lg md:text-xl text-center">
              Copyright © Resumate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
