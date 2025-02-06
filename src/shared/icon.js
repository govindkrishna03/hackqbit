import React from 'react';
import Image from 'next/image';

const Icon = ({ icon, size = 30, alt = '', title, className = '', ariaHidden }) => {
  return (
    <div title={title || alt} className={`flex items-center justify-center ${className}`}>
      <Image
        src={`/assets/icons/${icon}.svg`}
        alt={alt || icon}
        width={size}
        height={size}
        aria-hidden={ariaHidden || false}
      />
    </div>
  );
};

export default Icon;
