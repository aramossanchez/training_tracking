"use client";
import React from 'react'
import ArrowRightIcon from './icons/ArrowRightIcon'
import { useNavbarState } from '@/context/navbarState';

export default function NavbarButton() {
  const { openedNavbar, toggleNavbar } = useNavbarState();
  const styleButtonNavbar = openedNavbar ? "rotate-180" : "rotate-0";

  return (
    <button
      className={`${styleButtonNavbar} button-navbar duration-200 p-2 pr-1 opacity-60`}
      onClick={() => toggleNavbar()}
    >
      <ArrowRightIcon />
    </button>
  )
}
