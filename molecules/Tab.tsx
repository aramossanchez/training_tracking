import { useNavbarState } from '@/context/navbarState';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface TabProps {
  text: string;
  url: string;
  icon?: ReactNode;
}

export default function Tab({
  text,
  url,
  icon,
}: TabProps) {
  const { openedNavbar } = useNavbarState();
  const styleLink = openedNavbar ? "text-left" : "flex justify-center"

  return (
    <Link href={url}
      className={`${styleLink} w-full px-2 h-10 hover:bg-primaryColor hover:text-alternateForeground hover:rounded-lg flex items-center gap-x-2`}
    >
      {icon}
      {openedNavbar && text}
    </Link>
  )
}
