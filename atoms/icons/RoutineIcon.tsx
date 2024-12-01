import React from 'react';

interface RoutineIconProps {
  size?: number;
  fill?: string;
}

export default function RoutineIcon({
  size = 20,
  fill = "currentColor",
}: RoutineIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      fill={fill}
    >
      <path d="M64 48l0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 80-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 80-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56c0 26.5 21.5 48 48 48l80 0L192 0 112 0C85.5 0 64 21.5 64 48zM432 0L224 0l0 512 208 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48z"/>
    </svg>
  )
}