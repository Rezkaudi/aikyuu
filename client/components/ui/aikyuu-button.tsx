import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function AikyuuButton({ 
  className, 
  variant = 'primary', 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex w-full h-16 md:h-20 px-2.5 justify-center items-center gap-2.5 rounded-100 font-montserrat text-lg md:text-xl lg:text-[26px] font-bold leading-normal transition-colors',
        variant === 'primary' && 'bg-aikyuu-primary text-black hover:bg-aikyuu-primary/90',
        variant === 'secondary' && 'bg-transparent text-aikyuu-primary border border-aikyuu-primary hover:bg-aikyuu-primary/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
