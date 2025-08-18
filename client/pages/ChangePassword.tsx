import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AikyuuLogo } from '@/components/ui/aikyuu-logo';

// Eye slash icon component
const EyeSlashIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M17.357 6.643L21 3M17.357 6.643C19.2348 7.84324 20.619 9.45359 21.4504 10.5944C21.7222 10.9674 21.8581 11.1538 21.9516 11.5146C22.0161 11.7633 22.0161 12.2367 21.9516 12.4854C21.8581 12.8462 21.7222 13.0326 21.4504 13.4056C19.961 15.4493 16.6974 19 12 19C9.92469 19 8.12923 18.3069 6.64299 17.357M17.357 6.643L13.4142 10.5858M2.99998 21L6.64299 17.357M6.64299 17.357L10.5858 13.4142M3.86085 15C3.33198 14.4297 2.8935 13.8775 2.54961 13.4056C2.2778 13.0326 2.1419 12.8462 2.04835 12.4854C1.98388 12.2367 1.98388 11.7633 2.04835 11.5146C2.1419 11.1538 2.2778 10.9674 2.54961 10.5944C4.03902 8.55068 7.30262 5 12 5C12.5904 5 13.1582 5.05609 13.7026 5.15824M13.4142 10.5858C13.7761 10.9477 14 11.4477 14 12C14 13.1046 13.1045 14 12 14C11.4477 14 10.9477 13.7761 10.5858 13.4142M13.4142 10.5858L10.5858 13.4142"
      stroke="#707070"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Back arrow icon component
const BackArrowIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
  >
    <path
      d="M20.625 15L9.375 15"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.75 19.375L9.375 15L13.75 10.625"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 15C3.75 9.6967 3.75 7.04505 5.39752 5.39752C7.04505 3.75 9.6967 3.75 15 3.75C20.3033 3.75 22.955 3.75 24.6025 5.39752C26.25 7.04505 26.25 9.6967 26.25 15C26.25 20.3033 26.25 22.955 24.6025 24.6025C22.955 26.25 20.3033 26.25 15 26.25C9.6967 26.25 7.04505 26.25 5.39752 24.6025C3.75 22.955 3.75 20.3033 3.75 15Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: 'Empty' };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[a-zA-Z]/.test(password)) score++;

    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    return {
      strength: score,
      label: score === 0 ? 'Empty' : labels[Math.min(score - 1, 3)]
    };
  };

  const passwordStrength = calculatePasswordStrength(formData.newPassword);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = () => {
    // Add validation logic here
    console.log('Password change submitted', formData);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F7]">
      {/* Navigation */}
      <div className="px-3 md:px-12 py-8 md:py-12">
        <nav className="max-w-7xl mx-auto bg-white rounded-full px-6 md:px-12 py-4 md:py-6 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <Link to="/dashboard" className="flex-shrink-0">
            <AikyuuLogo />
          </Link>

          {/* Navigation Links & Profile */}
          <div className="flex items-center gap-6 md:gap-12">
            {/* Navigation Links */}
            <div className="hidden md:flex items-end gap-8">
              <Link
                to="/use-cases"
                className="text-black font-montserrat text-lg md:text-2xl font-bold hover:text-aikyuu-primary transition-colors"
              >
                Use Cases
              </Link>
              <Link
                to="/pricing"
                className="text-black font-montserrat text-lg md:text-2xl font-bold hover:text-aikyuu-primary transition-colors"
              >
                Pricing
              </Link>
              <span className="text-black font-montserrat text-lg md:text-2xl font-bold">
                Your Credits :50
              </span>
            </div>

            {/* Profile */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7f6d580044efbb23c66de3733efc37ee4044bd7?width=200"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-10">
              <button onClick={() => navigate(-1)} className="flex-shrink-0">
                <BackArrowIcon />
              </button>
              <h1 className="text-aikyuu-dark font-montserrat text-4xl md:text-6xl lg:text-[72px] font-bold leading-tight">
                Change Password
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-aikyuu-dark font-montserrat text-xl md:text-2xl font-normal">
              Give Yourself A Great New Password
            </p>

            {/* Form */}
            <div className="space-y-6">
              {/* Current Password */}
              <div className="relative">
                <div className="w-full h-16 md:h-20 border border-aikyuu-gray-line rounded-2xl bg-white flex items-center px-6 md:px-10">
                  <input
                    type={showPasswords.current ? "text" : "password"}
                    placeholder="Please enter your current password"
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className="flex-1 text-aikyuu-gray font-montserrat text-lg md:text-2xl placeholder:text-aikyuu-gray outline-none bg-transparent"
                  />
                  <button
                    onClick={() => togglePasswordVisibility('current')}
                    className="ml-4 p-1"
                  >
                    <EyeSlashIcon />
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="relative">
                <div className="w-full h-16 md:h-20 border border-aikyuu-gray-line rounded-2xl bg-white flex items-center px-6 md:px-10">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    placeholder="Please enter your new password"
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className="flex-1 text-aikyuu-gray font-montserrat text-lg md:text-2xl placeholder:text-aikyuu-gray outline-none bg-transparent"
                  />
                  <button
                    onClick={() => togglePasswordVisibility('new')}
                    className="ml-4 p-1"
                  >
                    <EyeSlashIcon />
                  </button>
                </div>
              </div>

              {/* Password Strength Indicator */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className={`h-3 w-20 rounded-full ${index < passwordStrength.strength ? 'bg-aikyuu-primary' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-aikyuu-gray font-montserrat">Password Strength:</span>
                  <span className="text-black font-montserrat">{passwordStrength.label}</span>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <div className="w-full h-16 md:h-20 border border-aikyuu-gray-line rounded-2xl bg-white flex items-center px-6 md:px-10">
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    placeholder="Please re-enter your new password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="flex-1 text-aikyuu-gray font-montserrat text-lg md:text-2xl placeholder:text-aikyuu-gray outline-none bg-transparent"
                  />
                  <button
                    onClick={() => togglePasswordVisibility('confirm')}
                    className="ml-4 p-1"
                  >
                    <EyeSlashIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end pt-8">
              <button
                onClick={handleCancel}
                className="px-8 py-4 h-14 rounded-full border border-[#DAD2D2] bg-white text-aikyuu-dark font-montserrat text-lg font-bold shadow-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-8 py-4 h-14 rounded-full bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold shadow-sm hover:bg-aikyuu-primary/90 transition-colors"
              >
                Change
              </button>
            </div>
          </div>

          {/* Right Side - Rules */}
          <div className="lg:mt-24">
            <div className="w-full max-w-2xl bg-[#F6F6F6] rounded-3xl p-8 md:p-10">
              <h2 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-8">
                Rules For Passwords
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-black font-montserrat text-lg md:text-2xl">
                    Minimum 8 characters
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-black font-montserrat text-lg md:text-2xl">
                    At least One special characters
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-black font-montserrat text-lg md:text-2xl">
                    At least One number
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-black font-montserrat text-lg md:text-2xl">
                    Can't be the same as a previous
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 md:mt-32 bg-[#1F1F1F] py-16 md:py-20">
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
