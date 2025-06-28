
import React from 'react';

// A simplified botanical illustration of an orange branch
export const OrangeBranch: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M50 10 C 20 40, 80 60, 50 90" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 45 C 60 35, 75 40, 70 50" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 65 C 40 55, 25 60, 30 70" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="75" cy="65" r="8" fill="currentColor" stroke="none" />
    <circle cx="25" cy="80" r="6" fill="currentColor" stroke="none" />
    <circle cx="45" cy="25" r="7" fill="currentColor" stroke="none" />
  </svg>
);

// A simple icon of two interlocking wedding rings
export const WeddingRings: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" {...props}>
    <circle cx="45" cy="50" r="25" />
    <circle cx="65" cy="50" r="25" />
  </svg>
);


// A vintage-style gift box illustration
export const GiftBox: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <path d="M15,45 L85,45 L85,85 L15,85 Z" stroke="currentColor" strokeWidth="2" fillOpacity="0.8" />
    <path d="M15,45 L50,30 L85,45" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M50,30 L50,85" stroke="currentColor" strokeWidth="2" />
    <path d="M50,30 C 40,10 30,15 30,25 C 30,35 40,30 50,30" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M50,30 C 60,10 70,15 70,25 C 70,35 60,30 50,30" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M40 45 L40 85 M60 45 L60 85" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
  </svg>
);

// A vintage-style trumpet/horn illustration
export const Trumpet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
     <path d="M20,40 Q 40,35 70,50 L 85,55 Q 95,60 85,70 L 70,75 Q 40,90 20,85 L 20,40 Z" strokeLinejoin="round" fill="currentColor" fillOpacity="0.8" />
     <path d="M20,40 L15,35 M20,62 L15,62 M20,85 L15,90" />
     <path d="M50 45 C 60 35, 75 40, 70 50" strokeLinecap="round" strokeLinejoin="round" />
     <path d="M55 75 C 45 85, 30 80, 35 70" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
