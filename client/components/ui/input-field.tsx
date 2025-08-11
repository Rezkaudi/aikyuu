import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-16 md:h-20 w-full rounded-[10px] border border-aikyuu-gray-line bg-white px-4 md:px-10 py-4 md:py-6 text-lg md:text-xl lg:text-2xl font-montserrat font-normal placeholder:text-aikyuu-gray-line focus:outline-none focus:ring-2 focus:ring-aikyuu-primary focus:border-transparent',
            error && 'border-aikyuu-error',
            className
          )}
          ref={ref}
          placeholder={label}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
