import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/ui/navbar';
import { PurchaseModal } from '@/components/ui/purchase-modal';

// Check mark icon component
const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path 
      d="M11.4559 17.7997C11.2077 18.0493 10.8692 18.1887 10.5174 18.1887C10.1656 18.1887 9.82704 18.0493 9.57878 17.7997L2.08346 10.303C1.30551 9.5251 1.30551 8.26386 2.08346 7.48729L3.02203 6.54872C3.79997 5.77078 5.05982 5.77078 5.83776 6.54872L10.5174 11.2283L23.1622 -1.41649C23.9402 -2.19443 25.2014 -2.19443 25.978 -1.41649L26.9165 -0.477923C27.6945 0.300015 27.6945 1.56112 26.9165 2.33776L11.4559 17.7997Z" 
      fill="#00EBBD" 
    />
  </svg>
);

interface PlanCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  credits: string;
  billing: string;
  highlighted?: boolean;
  onSubscribe: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  features,
  price,
  credits,
  billing,
  highlighted = false,
  onSubscribe
}) => (
  <div className={`relative w-full max-w-lg h-auto bg-white rounded-[50px] p-8 md:p-12 flex flex-col ${highlighted ? 'ring-2 ring-aikyuu-primary' : ''}`}>
    {/* Header */}
    <div className="text-center mb-8">
      <h3 className="text-aikyuu-primary font-montserrat text-3xl md:text-[40px] font-bold mb-4">
        {title}
      </h3>
      <p className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-6">
        To improve your work
      </p>
      <p className="text-aikyuu-dark font-montserrat text-lg md:text-xl leading-relaxed">
        {description}
      </p>
    </div>

    {/* Features */}
    <div className="flex-1 space-y-4 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-4 py-2 border-t border-b border-gray-200">
          <CheckIcon />
          <span className="text-aikyuu-dark font-montserrat text-lg md:text-xl flex-1">
            {feature}
          </span>
        </div>
      ))}
    </div>

    {/* Pricing */}
    <div className="text-center mb-8">
      <div className="mb-2">
        <span className="text-aikyuu-dark font-montserrat text-lg md:text-xl">You pay:</span>
      </div>
      <div className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-2">
        {price}
      </div>
      <div className="text-aikyuu-dark font-montserrat text-lg md:text-xl mb-1">
        {billing}
      </div>
    </div>

    {/* CTA Button */}
    <button
      onClick={onSubscribe}
      className="w-full h-16 md:h-[72px] bg-aikyuu-primary rounded-full text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold hover:bg-aikyuu-primary/90 transition-colors"
    >
      Subscribe Now
    </button>
  </div>
);

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const plans = [
    {
      title: "Ultimate Vault",
      description: "1,000 CVs for $100. Built for agencies and enterprises handling large-scale recruitment with speed and precision.",
      features: ["CV Credits: Process up to 1000 CVs"],
      price: "$100.00/package",
      credits: "1000 CVs",
      billing: "9.9 AED/month, billed annually",
      priceValue: 100.00,
      creditsValue: 1000
    },
    {
      title: "Growth Mode",
      description: "Get 50 CVs analyzed for just $10. A smart choice for scaling teams and recruiters needing efficient, mid-level volume.",
      features: ["CV Credits: Process up to 50 CVs"],
      price: "$10.00/package",
      credits: "50 CVs",
      billing: "9.9 AED/month, billed annually",
      priceValue: 10.00,
      creditsValue: 50
    },
    {
      title: "Starter Bundle",
      description: "Analyze 4 CVs for $1 — perfect for quick checks or light hiring. Ideal for individuals and small teams testing the waters.",
      features: ["CV Credits: Process up to 4 CVs"],
      price: "$1.00/package",
      credits: "4 CVs",
      billing: "9.9 AED/month, billed annually",
      priceValue: 1.00,
      creditsValue: 4
    }
  ];

  const handleSubscribe = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
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
            Pricing
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-aikyuu-dark font-montserrat text-xl md:text-2xl lg:text-[25px] leading-relaxed">
              Choose Your Plan<br />
              Select the perfect package for your recruitment needs
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              price={plan.price}
              credits={plan.credits}
              billing={plan.billing}
              highlighted={index === 1} // Highlight the middle plan
              onSubscribe={() => handleSubscribe(plan)}
            />
          ))}
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

      {/* Purchase Modal */}
      {selectedPlan && (
        <PurchaseModal
          isOpen={isModalOpen}
          onClose={closeModal}
          planName={selectedPlan.title}
          pricePerPackage={selectedPlan.priceValue}
          creditsPerPackage={selectedPlan.creditsValue}
        />
      )}
    </div>
  );
}
