import React from 'react'

export default function FooterTemplate() {
  const actualYear = new Date().getFullYear();
  return (
    <footer className='w-full min-w-screen max-w-screen border-t-2 border-primaryColor flex justify-center py-10 bg-background'>
      <p>{actualYear} - Todos los derechos reservados</p>
    </footer>
  )
}
