import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'orange' | 'blue';
  href: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'orange',
  href
}) => {
  const base = 'px-7 lg:px-12 py-3 lg:py-5 text-[16px] lg:text-[24px] leading-[24px] inline-flex items-center justify-center rounded-lg font-[700] font-roboto transition-colors duration-300 text-white';
  const orange = 'bg-orange hover:bg-blueText';
  const blue = 'bg-blueText hover:bg-orange';

  const variantClasses = variant === 'orange' ? orange : blue;

  if (href) {
    return (
      <Link href={href} className={`${base} ${variantClasses}`}>
        {children}
      </Link>
    );
  }
};
