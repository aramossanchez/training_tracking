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
  return (
    <Link href={url}
      className='w-full px-8 py-2 hover:bg-primaryColor hover:text-alternateForeground hover:rounded-lg flex items-center gap-x-2'
    >
      {icon}
      {text}
    </Link>
  )
}
