import LandingStatisticsSection from '@/organisms/LandingStatisticsSection'
import React from 'react'

export default function HomeTemplate() {
  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Landing</h1>
      <LandingStatisticsSection />
    </main>
  )
}
