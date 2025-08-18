import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@/components/layout/auth-layout';
import { InputField } from '@/components/ui/input-field';
import { AikyuuButton } from '@/components/ui/aikyuu-button';

export default function ResetPasswordNew() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle new password logic here
    console.log('New password:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const rightContent = (
    <div className="relative w-[494px] h-[357px]">
      {/* Person working on laptop */}
      <img
        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop"
        alt="Person working on laptop"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Small person image bottom left */}
      <div className="absolute -bottom-8 -left-16 w-[179px] h-[239px]">
        <img
          src="https://images.unsplash.com/photo-1494790108755-2616b60b7751?w=200&h=250&fit=crop&crop=face"
          alt="Professional woman"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Security/lock icon */}
      <div className="absolute top-8 right-8 w-[139px] h-[139px] bg-aikyuu-dark rounded-full flex items-center justify-center">
        <svg className="w-16 h-16 fill-aikyuu-primary" viewBox="0 0 96 68">
          <path d="M95.8193 30.1861C96.4898 28.5868 95.2022 26.659 93.4769 26.7091H57.7684C56.7341 26.7091 55.8047 27.3486 55.426 28.3209L51.5217 38.3359C48.8083 34.3969 44.9594 31.4636 40.5447 29.902C46.45 27.7784 50.6918 22.0339 50.6685 15.2956C49.8564 -5.12035 21.1335 -5.11288 20.3928 15.4043C20.4133 21.2521 23.6594 26.3533 28.4037 28.9549C15.2329 30.686 5.84717 39.7538 0.490866 56.0222C-1.55323 61.6717 3.07527 68.1784 9.03281 67.9963C9.03264 67.9964 81.3832 67.9964 81.3832 67.9964C85.1271 67.9964 88.1726 64.9185 88.1726 61.1351C88.1726 58.8468 87.0474 56.8296 85.338 55.5825C86.7671 54.7373 94.9006 32.0788 95.8193 30.1861Z" />
        </svg>
      </div>

      {/* Lock icon on laptop */}
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-aikyuu-dark rounded-2xl rotate-90 flex items-center justify-center">
        <svg className="w-8 h-8" fill="#E2A3FF" viewBox="0 0 64 56">
          <path d="M51.5979 26.2988H12.2441V20.6769C12.2441 15.4582 14.3172 10.4533 18.0074 6.76322C21.6975 3.07309 26.7024 1 31.921 1C37.1396 1 42.1445 3.07309 45.8346 6.76322C49.5248 10.4533 51.5979 15.4582 51.5979 20.6769V26.2988Z" />
        </svg>
      </div>
    </div>
  );

  return (
    <AuthLayout rightContent={rightContent}>
      <div className="max-w-[807px]">
        {/* Heading */}
        <h1 className="text-aikyuu-dark font-montserrat text-[45px] font-bold leading-normal mb-[23px]">
          Reset your password
        </h1>

        {/* Subheading */}
        <div className="text-aikyuu-text font-montserrat text-2xl font-medium leading-[33px] mb-[167px] max-w-[807px]">
          We're sorry to hear that's happen, don't worry we're here for you<br />
          Just enter your e-mail to help you
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            name="newPassword"
            type="password"
            label="New Password *"
            value={formData.newPassword}
            onChange={handleInputChange}
            className="mb-6"
          />

          <InputField
            name="confirmPassword"
            type="password"
            label="Confirm the new password *"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="mb-[288px]"
          />

          {/* Submit Button */}
          <AikyuuButton type="submit" className="mb-[117px]">
            Reset Password
          </AikyuuButton>

          {/* Back to Sign In Link */}
          <div className="text-center">
            <span className="text-aikyuu-dark font-montserrat text-xl font-medium">
              Back to{' '}
            </span>
            <Link
              to="/signin"
              className="text-aikyuu-primary font-montserrat text-xl font-medium underline hover:no-underline"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
