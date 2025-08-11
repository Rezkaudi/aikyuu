import React, { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';

export default function Feedback() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    attachedFile: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, attachedFile: file }));
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:', formData);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      title: '',
      description: '',
      attachedFile: null
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F7]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 pb-16">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-aikyuu-dark font-montserrat text-5xl md:text-6xl lg:text-[72px] font-bold mb-6">
            feedback
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-aikyuu-dark font-montserrat text-xl md:text-2xl lg:text-[25px] leading-relaxed">
              Choose Your Plan<br />
              Select the perfect package for your recruitment needs
            </p>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[30px] p-8 md:p-16">
            {/* Form Header */}
            <div className="mb-12">
              <h2 className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-normal mb-8">
                Submit Feedback
              </h2>
              <div className="w-full h-1.5 bg-[#F2F2F2] rounded"></div>
            </div>

            {/* Form Fields */}
            <div className="space-y-8 md:space-y-12">
              {/* Title Field */}
              <div className="space-y-3">
                <label className="block text-[#707070] font-montserrat text-lg md:text-xl font-normal capitalize tracking-wide">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full h-16 md:h-[71px] px-4 md:px-6 border border-[#C1C1C1] rounded-2xl bg-white font-montserrat text-lg md:text-xl text-aikyuu-dark placeholder:text-[#C1C1C1] focus:outline-none focus:ring-2 focus:ring-aikyuu-primary"
                  placeholder=""
                />
              </div>

              {/* Description Field */}
              <div className="space-y-3">
                <label className="block text-[#707070] font-montserrat text-lg md:text-xl font-normal capitalize tracking-wide">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={6}
                  className="w-full h-32 md:h-[140px] px-4 md:px-6 py-4 border border-[#C1C1C1] rounded-2xl bg-white font-montserrat text-lg md:text-xl text-aikyuu-dark placeholder:text-[#C1C1C1] focus:outline-none focus:ring-2 focus:ring-aikyuu-primary resize-none"
                  placeholder=""
                />
              </div>

              {/* File Upload Field */}
              <div className="space-y-3 max-w-sm">
                <label className="block text-[#707070] font-montserrat text-lg md:text-xl font-normal capitalize tracking-wide">
                  Attach Image (optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="h-16 md:h-[71px] px-6 md:px-10 bg-[#F8F7F7] border border-white rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="text-[#707070] font-montserrat text-lg md:text-xl font-normal capitalize tracking-wide">
                      {formData.attachedFile ? formData.attachedFile.name : 'choose file'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-12 md:mt-16">
              <button
                onClick={handleCancel}
                className="w-48 md:w-[221px] h-12 md:h-14 bg-white rounded-full shadow-sm border border-gray-200 text-aikyuu-dark font-montserrat text-base md:text-lg font-bold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="w-48 md:w-[221px] h-12 md:h-14 bg-aikyuu-primary rounded-full shadow-sm text-aikyuu-dark font-montserrat text-base md:text-lg font-bold hover:bg-aikyuu-primary/90 transition-colors"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1F1F1F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <svg
              width="53"
              height="86"
              viewBox="0 0 53 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-16 md:w-[53px] md:h-[86px] fill-aikyuu-primary"
            >
              <path
                d="M34.7183 86C34.2121 85.8976 34.0062 85.5288 33.7227 85.2419C26.4361 77.8638 21.2602 68.6269 18.7447 58.512C18.4475 57.0946 17.8379 55.7633 16.9614 54.6175C16.0848 53.4716 14.9639 52.5408 13.6822 51.8944C10.4153 50.071 6.96267 48.5958 3.77671 46.588C-0.610738 43.8563 -0.587117 41.9372 3.81721 39.1918C7.19217 37.0816 10.9046 35.6269 14.2796 33.5372C15.7291 32.826 16.9471 31.7098 17.7895 30.3206C18.1528 29.4007 18.4252 28.4468 18.6029 27.4727C21.2408 17.3517 26.4229 8.09367 33.6451 0.599371C34.4382 -0.220147 34.8432 -0.179171 35.6127 0.599371C41.0126 6.04917 46.4317 11.4705 51.8699 16.8634C52.582 17.5463 52.7238 17.9697 51.9509 18.7688C51.9509 18.7688 47.8301 25.0381 45.7005 28.1284C44.3974 30.4007 42.5555 32.3089 40.341 33.6806C36.7906 35.6269 33.014 37.1226 29.5412 39.2533C28.1 40.1343 26.2742 41.0358 26.2539 42.8592C26.2337 44.7646 28.1203 45.666 29.6019 46.5675C32.8689 48.5753 36.4025 50.0505 39.8112 51.8124C42.3643 53.3013 44.4653 55.4696 45.8861 58.0817C47.9111 61.1345 52.0555 67.175 52.0555 67.175C52.7035 67.8579 52.6023 68.1994 52.015 68.7935C46.4733 74.2843 40.9721 79.8126 35.4541 85.3239C35.228 85.5698 34.9445 85.7917 34.7183 86Z"
                fill="#00EBBD"
              />
            </svg>
            <span className="text-aikyuu-primary font-poppins text-3xl md:text-5xl lg:text-[64px] font-bold">
              Aikyuu
            </span>
          </div>
          <p className="text-[#F8F7F7] font-poppins text-lg md:text-xl">
            Copyright © Resumate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
