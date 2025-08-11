import React, { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { PurchaseModal } from '@/components/ui/purchase-modal';

// Billing icon component
const BillingIcon = () => (
  <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 flex-shrink-0">
    <g clipPath="url(#clip0_2501_2483)">
      <path d="M35.332 24.0353V3.25195C35.332 1.45883 33.8732 0 32.0801 0H8.16016C6.36703 0 4.9082 1.45883 4.9082 3.25195V4.4082H3.75195C1.95883 4.4082 0.5 5.86703 0.5 7.66016C0.5 9.45328 1.95883 10.9121 3.75195 10.9121H4.9082V15.248H3.75195C1.95883 15.248 0.5 16.7069 0.5 18.5C0.5 20.2931 1.95883 21.752 3.75195 21.752H4.9082V26.0879H3.75195C1.95883 26.0879 0.5 27.5467 0.5 29.3398C0.5 31.133 1.95883 32.5918 3.75195 32.5918H4.9082V33.6758C4.9082 34.5397 5.24041 35.363 5.84361 35.994C6.46379 36.6427 7.28654 37 8.16016 37H29.9121C34.0961 37 37.5 33.5637 37.5 29.3398C37.5 27.2772 36.6723 25.4044 35.332 24.0353ZM3.75195 8.74414C3.15424 8.74414 2.66797 8.25786 2.66797 7.66016C2.66797 7.06245 3.15424 6.57617 3.75195 6.57617H5.99219C6.5899 6.57617 7.07617 7.06245 7.07617 7.66016C7.07617 8.25786 6.5899 8.74414 5.99219 8.74414H3.75195ZM3.75195 19.584C3.15424 19.584 2.66797 19.0977 2.66797 18.5C2.66797 17.9023 3.15424 17.416 3.75195 17.416H5.99219C6.5899 17.416 7.07617 17.9023 7.07617 18.5C7.07617 19.0977 6.5899 19.584 5.99219 19.584H3.75195ZM5.99219 30.4238H3.75195C3.15424 30.4238 2.66797 29.9376 2.66797 29.3398C2.66797 28.7421 3.15424 28.2559 3.75195 28.2559H5.99219C6.5899 28.2559 7.07617 28.7421 7.07617 29.3398C7.07617 29.9376 6.5899 30.4238 5.99219 30.4238ZM8.16016 34.832C7.58275 34.832 7.07617 34.2917 7.07617 33.6758V32.4054C8.33786 31.9579 9.24414 30.753 9.24414 29.3398C9.24414 27.9267 8.33786 26.7218 7.07617 26.2743V21.5655C8.33786 21.118 9.24414 19.9132 9.24414 18.5C9.24414 17.0868 8.33786 15.882 7.07617 15.4345V10.7257C8.33786 10.2782 9.24414 9.07331 9.24414 7.66016C9.24414 6.247 8.33786 5.04212 7.07617 4.59465V3.25195C7.07617 2.65424 7.56245 2.16797 8.16016 2.16797H32.0801C32.6778 2.16797 33.1641 2.65424 33.1641 3.25195V22.4851C32.1779 22.0154 31.0752 21.752 29.9121 21.752C25.7281 21.752 22.3242 25.1559 22.3242 29.3398C22.3242 31.4919 23.2082 33.4392 24.6285 34.832H8.16016ZM29.9121 34.832C26.9236 34.832 24.4922 32.3683 24.4922 29.3398C24.4922 26.3513 26.9236 23.9199 29.9121 23.9199C32.9007 23.9199 35.332 26.3513 35.332 29.3398C35.332 32.3683 32.9007 34.832 29.9121 34.832Z" fill="black"/>
      <path d="M29.9121 8.74219H23.4082C22.8096 8.74219 22.3242 9.22752 22.3242 9.82617C22.3242 10.4248 22.8096 10.9102 23.4082 10.9102H29.9121C30.5108 10.9102 30.9961 10.4248 30.9961 9.82617C30.9961 9.22752 30.5108 8.74219 29.9121 8.74219Z" fill="black"/>
      <path d="M29.9121 17.4141H23.4082C22.8096 17.4141 22.3242 17.8994 22.3242 18.498C22.3242 19.0967 22.8096 19.582 23.4082 19.582H29.9121C30.5108 19.582 30.9961 19.0967 30.9961 18.498C30.9961 17.8994 30.5108 17.4141 29.9121 17.4141Z" fill="black"/>
      <path d="M32.0801 28.2539H30.9961V27.1699C30.9961 26.5713 30.5108 26.0859 29.9121 26.0859C29.3135 26.0859 28.8281 26.5713 28.8281 27.1699V29.3379C28.8281 29.9365 29.3135 30.4219 29.9121 30.4219H32.0801C32.6787 30.4219 33.1641 29.9365 33.1641 29.3379C33.1641 28.7392 32.6787 28.2539 32.0801 28.2539Z" fill="black"/>
      <path d="M19.7646 6.89171C19.3413 6.46838 18.655 6.46838 18.2317 6.89178L14.6622 10.4612L12.9559 8.75493C12.5327 8.3316 11.8463 8.3316 11.423 8.75493C10.9996 9.17827 10.9996 9.86457 11.423 10.2879L13.8958 12.7607C14.1073 12.9724 14.3848 13.0782 14.6622 13.0782C14.9396 13.0782 15.2171 12.9724 15.4287 12.7606L19.7646 8.42468C20.1879 8.00135 20.1879 7.31504 19.7646 6.89171Z" fill="black"/>
      <path d="M19.7646 15.5636C19.3413 15.1403 18.655 15.1403 18.2317 15.5637L14.6622 19.1331L12.9559 17.4268C12.5327 17.0035 11.8463 17.0035 11.423 17.4268C10.9996 17.8501 10.9996 18.5364 11.423 18.9598L13.8958 21.4326C14.1073 21.6442 14.3848 21.75 14.6622 21.75C14.9396 21.75 15.2171 21.6442 15.4287 21.4325L19.7646 17.0966C20.1879 16.6732 20.1879 15.9869 19.7646 15.5636Z" fill="black"/>
      <path d="M19.7646 24.2355C19.3413 23.8121 18.655 23.8121 18.2317 24.2355L14.6622 27.8049L12.9559 26.0987C12.5327 25.6754 11.8463 25.6754 11.423 26.0987C10.9996 26.522 10.9996 27.2083 11.423 27.6317L13.8958 30.1044C14.1073 30.3161 14.3848 30.4219 14.6622 30.4219C14.9396 30.4219 15.2171 30.3161 15.4287 30.1044L19.7646 25.7684C20.1879 25.3451 20.1879 24.6588 19.7646 24.2355Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_2501_2483">
        <rect width="37" height="37" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>
);

interface BillRowProps {
  plan: string;
  startDate: string;
  endDate: string;
  package: string;
  price: string;
  status: 'active' | 'finished';
}

const BillRow: React.FC<BillRowProps> = ({ plan, startDate, endDate, package: packageValue, price, status }) => (
  <div className="bg-white rounded-xl px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
    {/* Plan Info */}
    <div className="flex items-center gap-3 md:w-60">
      <BillingIcon />
      <span className="text-aikyuu-dark font-montserrat text-lg md:text-xl font-bold">
        {plan}
      </span>
    </div>

    {/* Date Info */}
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 md:w-80">
      <div className="text-aikyuu-dark font-montserrat text-lg md:text-xl">
        <span className="font-normal">Started </span>
        <span className="font-bold">{startDate}</span>
      </div>
      <div className="text-aikyuu-dark font-montserrat text-lg md:text-xl">
        <span className="font-normal">Ends </span>
        <span className="font-bold">{endDate}</span>
      </div>
    </div>

    {/* Package */}
    <div className="text-aikyuu-dark font-montserrat text-lg md:text-xl text-center md:w-32">
      {packageValue}
    </div>

    {/* Price */}
    <div className="text-aikyuu-dark font-montserrat text-lg md:text-xl text-center md:w-32">
      {price}
    </div>

    {/* Status */}
    <div className="flex justify-start md:justify-center md:w-32">
      <span className={`px-5 py-2 rounded-full text-lg font-bold ${
        status === 'active' 
          ? 'bg-blue-100 text-aikyuu-primary' 
          : 'bg-red-100 text-red-500'
      }`}>
        {status === 'active' ? 'Now' : 'finished'}
      </span>
    </div>
  </div>
);

export default function Billing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handleSubscribe = (planName: string, price: number, credits: number) => {
    setSelectedPlan({ title: planName, priceValue: price, creditsValue: credits });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const pastBills = [
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025", 
      package: "1000 CVs",
      price: "$100.00",
      status: 'active' as const
    },
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs", 
      price: "$100.00",
      status: 'finished' as const
    },
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00", 
      status: 'finished' as const
    },
    {
      plan: "Ultimate Vault",
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00",
      status: 'finished' as const
    },
    {
      plan: "Ultimate Vault", 
      startDate: "12.01.2024",
      endDate: "12.01.2025",
      package: "1000 CVs",
      price: "$100.00",
      status: 'finished' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F7]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 pb-16">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-aikyuu-dark font-montserrat text-5xl md:text-6xl lg:text-[72px] font-bold mb-6">
            Billing
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-aikyuu-dark font-montserrat text-xl md:text-2xl lg:text-[25px] leading-relaxed">
              Choose Your Plan<br />
              Select the perfect package for your recruitment needs
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Past Bills Section */}
          <section>
            <h2 className="text-aikyuu-dark font-montserrat text-3xl md:text-[40px] font-bold mb-8">
              Past Bills
            </h2>

            <div className="space-y-4">
              {/* Table Header */}
              <div className="bg-white rounded-xl px-6 py-4 hidden md:flex items-center gap-8">
                <div className="w-60">
                  <span className="text-aikyuu-dark font-montserrat text-xl font-bold">Plan</span>
                </div>
                <div className="w-80">
                  <span className="text-aikyuu-dark font-montserrat text-xl">Date</span>
                </div>
                <div className="w-32 text-center">
                  <span className="text-aikyuu-dark font-montserrat text-xl">package</span>
                </div>
                <div className="w-32 text-center">
                  <span className="text-aikyuu-dark font-montserrat text-xl">Price</span>
                </div>
                <div className="w-32 text-center">
                  <span className="text-aikyuu-dark font-montserrat text-xl">Status</span>
                </div>
              </div>

              {/* Bills List */}
              {pastBills.map((bill, index) => (
                <BillRow key={index} {...bill} />
              ))}
            </div>
          </section>

          {/* My Plan Section */}
          <section>
            <h2 className="text-aikyuu-dark font-montserrat text-3xl md:text-[40px] font-bold mb-8">
              My Plan
            </h2>

            <div className="bg-white rounded-xl px-6 py-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Plan Info */}
                <div className="flex items-center gap-3 md:w-60">
                  <BillingIcon />
                  <span className="text-aikyuu-dark font-montserrat text-xl font-bold">
                    Ultimate Vault
                  </span>
                </div>

                {/* Plan Details */}
                <div className="text-aikyuu-dark font-montserrat text-xl md:w-64">
                  1000 CVs
                </div>

                <div className="text-aikyuu-dark font-montserrat text-xl md:w-32">
                  $100.00
                </div>

                {/* Subscription Info */}
                <div className="text-aikyuu-dark font-montserrat text-xl flex-1">
                  <div>Subscribed on Mar 15, 2024</div>
                  <div>Renews on Apr 15, 2025</div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Plans */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Ultimate Vault */}
              <div className="bg-white rounded-[50px] p-8 md:p-12 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-aikyuu-primary font-montserrat text-3xl md:text-[40px] font-bold mb-4">
                    Ultimate Vault
                  </h3>
                  <p className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-6">
                    To improve your work
                  </p>
                  <p className="text-aikyuu-dark font-montserrat text-lg md:text-xl leading-relaxed">
                    1,000 CVs for $100. Built for agencies and enterprises handling large-scale recruitment with speed and precision.
                  </p>
                </div>

                <div className="flex-1 mb-8">
                  <div className="flex items-start gap-4 py-4 border-t border-b border-gray-200">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                      <path d="M11.4559 17.7997C11.2077 18.0493 10.8692 18.1887 10.5174 18.1887C10.1656 18.1887 9.82704 18.0493 9.57878 17.7997L2.08346 10.303C1.30551 9.5251 1.30551 8.26386 2.08346 7.48729L3.02203 6.54872C3.79997 5.77078 5.05982 5.77078 5.83776 6.54872L10.5174 11.2283L23.1622 -1.41649C23.9402 -2.19443 25.2014 -2.19443 25.978 -1.41649L26.9165 -0.477923C27.6945 0.300015 27.6945 1.56112 26.9165 2.33776L11.4559 17.7997Z" fill="#00EBBD" />
                    </svg>
                    <span className="text-aikyuu-dark font-montserrat text-lg md:text-xl">
                      CV Credits: Process up to 1000 CVs
                    </span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-aikyuu-dark font-montserrat text-xl">You pay:</span>
                  </div>
                  <div className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-2">
                    $100.00/package
                  </div>
                  <div className="text-aikyuu-dark font-montserrat text-xl">
                    9.9 AED/month, billed annually
                  </div>
                </div>

                <button
                  onClick={() => handleSubscribe("Ultimate Vault", 100.00, 1000)}
                  className="w-full h-16 md:h-[72px] bg-aikyuu-primary rounded-full text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold hover:bg-aikyuu-primary/90 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>

              {/* Growth Mode */}
              <div className="bg-white rounded-[50px] p-8 md:p-12 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-aikyuu-primary font-montserrat text-3xl md:text-[40px] font-bold mb-4">
                    Growth Mode
                  </h3>
                  <p className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-6">
                    To improve your work
                  </p>
                  <p className="text-aikyuu-dark font-montserrat text-lg md:text-xl leading-relaxed">
                    Get 50 CVs analyzed for just $10. A smart choice for scaling teams and recruiters needing efficient, mid-level volume.
                  </p>
                </div>

                <div className="flex-1 mb-8">
                  <div className="flex items-start gap-4 py-4 border-t border-b border-gray-200">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                      <path d="M11.4559 17.7997C11.2077 18.0493 10.8692 18.1887 10.5174 18.1887C10.1656 18.1887 9.82704 18.0493 9.57878 17.7997L2.08346 10.303C1.30551 9.5251 1.30551 8.26386 2.08346 7.48729L3.02203 6.54872C3.79997 5.77078 5.05982 5.77078 5.83776 6.54872L10.5174 11.2283L23.1622 -1.41649C23.9402 -2.19443 25.2014 -2.19443 25.978 -1.41649L26.9165 -0.477923C27.6945 0.300015 27.6945 1.56112 26.9165 2.33776L11.4559 17.7997Z" fill="#00EBBD" />
                    </svg>
                    <span className="text-aikyuu-dark font-montserrat text-lg md:text-xl">
                      CV Credits: Process up to 50 CVs
                    </span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-aikyuu-dark font-montserrat text-xl">You pay:</span>
                  </div>
                  <div className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-2">
                    $10.00/package
                  </div>
                  <div className="text-aikyuu-dark font-montserrat text-xl">
                    9.9 AED/month, billed annually
                  </div>
                </div>

                <button
                  onClick={() => handleSubscribe("Growth Mode", 10.00, 50)}
                  className="w-full h-16 md:h-[72px] bg-aikyuu-primary rounded-full text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold hover:bg-aikyuu-primary/90 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>

              {/* Starter Bundle */}
              <div className="bg-white rounded-[50px] p-8 md:p-12 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-aikyuu-primary font-montserrat text-3xl md:text-[40px] font-bold mb-4">
                    Starter Bundle
                  </h3>
                  <p className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-6">
                    To improve your work
                  </p>
                  <p className="text-aikyuu-dark font-montserrat text-lg md:text-xl leading-relaxed">
                    Analyze 4 CVs for $1 — perfect for quick checks or light hiring. Ideal for individuals and small teams testing the waters.
                  </p>
                </div>

                <div className="flex-1 mb-8">
                  <div className="flex items-start gap-4 py-4 border-t border-b border-gray-200">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                      <path d="M11.4559 17.7997C11.2077 18.0493 10.8692 18.1887 10.5174 18.1887C10.1656 18.1887 9.82704 18.0493 9.57878 17.7997L2.08346 10.303C1.30551 9.5251 1.30551 8.26386 2.08346 7.48729L3.02203 6.54872C3.79997 5.77078 5.05982 5.77078 5.83776 6.54872L10.5174 11.2283L23.1622 -1.41649C23.9402 -2.19443 25.2014 -2.19443 25.978 -1.41649L26.9165 -0.477923C27.6945 0.300015 27.6945 1.56112 26.9165 2.33776L11.4559 17.7997Z" fill="#00EBBD" />
                    </svg>
                    <span className="text-aikyuu-dark font-montserrat text-lg md:text-xl">
                      CV Credits: Process up to 4 CVs
                    </span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-aikyuu-dark font-montserrat text-xl">You pay:</span>
                  </div>
                  <div className="text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold mb-2">
                    $1.00/package
                  </div>
                  <div className="text-aikyuu-dark font-montserrat text-xl">
                    9.9 AED/month, billed annually
                  </div>
                </div>

                <button
                  onClick={() => handleSubscribe("Starter Bundle", 1.00, 4)}
                  className="w-full h-16 md:h-[72px] bg-aikyuu-primary rounded-full text-aikyuu-dark font-montserrat text-2xl md:text-[30px] font-bold hover:bg-aikyuu-primary/90 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </section>
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
