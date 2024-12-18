import React from 'react';

interface CalendarIconProps {
  size?: number;
  fill?: string;
}

export default function CalendarIcon({
  size = 20,
  fill = "currentColor",
}: CalendarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={size}
      width={size}
      fill={fill}
    >
      <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zM64 320l64 0 0-64-64 0 0 64zm128-64l0 64 64 0 0-64-64 0zm192 64l0-64-64 0 0 64 64 0zM64 448l64 0 0-64-64 0 0 64zm192-64l-64 0 0 64 64 0 0-64zm64 64l64 0 0-64-64 0 0 64z"/>
    </svg>
  )
}
