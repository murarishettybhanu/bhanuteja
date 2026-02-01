import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="BM Logo"
    >
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
        </defs>

        {/* Outer Box */}
        <rect
            x="5"
            y="5"
            width="90"
            height="90"
            rx="22"
            stroke="url(#logoGradient)"
            strokeWidth="6"
            className="text-foreground"
            fill="none"
        />

        {/* The "B" - Modern Typography */}
        <text
            x="50"
            y="72"
            fontSize="65"
            fontWeight="900"
            fontFamily="Inter, sans-serif"
            textAnchor="middle"
            fill="url(#logoGradient)"
        >
            B
        </text>
    </svg>
);

export default Logo;
