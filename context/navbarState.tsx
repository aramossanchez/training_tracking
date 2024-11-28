'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavbarStateContextType {
  openedNavbar: boolean;
  toggleNavbar: () => void;
}

const NavbarStateContext = createContext<NavbarStateContextType | undefined>(undefined);

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [openedNavbar, setOpenedNavbar] = useState(true);

  const toggleNavbar = () => {
    setOpenedNavbar((prev) => !prev);
  };

  return (
    <NavbarStateContext.Provider value={{ openedNavbar, toggleNavbar }}>
      {children}
    </NavbarStateContext.Provider>
  );
};

export const useNavbarState = (): NavbarStateContextType => {
  const context = useContext(NavbarStateContext);
  if (!context) {
    throw new Error('useNavbarState must be used within a NavbarProvider');
  }
  return context;
};
