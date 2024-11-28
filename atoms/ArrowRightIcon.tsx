import React from 'react';

interface ArrowRightIconProps {
  size?: number;
  fill?: string;
}

export default function ArrowRightIcon({
  size = 20,
  fill = "currentColor",
}: ArrowRightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      height={size}
      width={size}
      fill={fill}
    >
      <path d="M640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32zM502.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l370.7 0-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128z"/>
    </svg>
  )
}
