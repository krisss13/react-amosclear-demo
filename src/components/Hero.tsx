import React from 'react';

interface HeroBanerProps {
  title: string;
}

const HeroBanner: React.FC<HeroBanerProps> = ({ title }) => (
  <div className="relative mb-4 rounded overflow-hidde">
    <div className="context w-full absolute inset-y-1/2">
      <h1 className="text-white text-center text-4xl">{title}</h1>
    </div>
    <div className="area bg-gradient-to-r from-purple-700 to-indigo-100 h-80 rounded">
      <ul className="circles">
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
        <li className="animate-circle" />
      </ul>
    </div>
  </div>
);
export default HeroBanner;
