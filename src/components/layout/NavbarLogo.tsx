import React from 'react';

interface NavbarLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ className, variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'white' : '#0A2540';
  const nColor = variant === 'light' ? 'white' : '#0A2540';
  const sColor = variant === 'light' ? 'white' : '#0A2540';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 240 60"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
        {/* Dynamic NS Emblem */}
        <g transform="translate(5, 5)">
          {/* Stylized "N" */}
          <path
            d="M 10 42 V 8 L 32 30 V 8"
            fill="none"
            stroke={nColor}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Stylized "S" interwoven */}
          <path
            d="M 18 42 C 45 42, 45 25, 28 25 C 12 25, 12 8, 38 8"
            fill="none"
            stroke={sColor}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Integrated Upward Arrow in "S" - Orange */}
          <path
            d="M 30 18 L 38 8 L 46 18"
            fill="none"
            stroke="#F97316"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Branding Text */}
        <text
          x="65"
          y="42"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="34"
          fill={textColor}
          className="tracking-tight"
        >
          <tspan fontWeight="900">Next</tspan>
          <tspan fontWeight="500">Store</tspan>
        </text>
      </svg>
    </div>
  );
};

export default NavbarLogo;
