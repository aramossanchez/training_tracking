import React, { ReactNode, useState } from 'react';

interface CircleButtonProps {
  icon: ReactNode,
  onClick: () => void,
}

export default function CircleButton({
  icon,
  onClick,
}: CircleButtonProps) {
  const [pressing, setPressing] = useState<boolean>(false);
  const styleButton = pressing ? "scale-95" : "scale-1";

  return (
    <button
      className={`${styleButton} transition-shadow duration-200 bg-secondaryColor h-fit rounded-full p-2 ring-2 ring-borderColor shadow-shadowColor shadow-homogeneous hover:shadow-homogeneous-lg`}
      onClick={onClick}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
    >
      {icon}
    </button>
  )
}
