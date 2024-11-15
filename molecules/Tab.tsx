import Link from 'next/link';
import React from 'react'

interface TabProps {
  text: string;
  url: string;
}

export default function Tab({
  text,
  url,
}: TabProps) {
  return (
    <Link href={url}
      className='font-semibold cursor-pointer rounded-t-lg border-4 border-b-0 border-primaryColor py-2 px-4 bg-background hover:bg-primaryColor hover:text-background'
    >
      {text}
    </Link>
  )
}
