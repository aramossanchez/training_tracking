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
      viewBox="0 0 512 512"
      height={size}
      width={size}
      fill={fill}
    >
      <path d="M64 256C64 150 150 64 256 64c17.7 0 32-14.3 32-32s-14.3-32-32-32C114.6 0 0 114.6 0 256S114.6 512 256 512c17.7 0 32-14.3 32-32s-14.3-32-32-32C150 448 64 362 64 256zM390.6 121.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-57.4 57.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112z"/>
    </svg>
  )
}
