import React from 'react'
import { Navbar } from '../navigation/Navbar'
import { Footer } from '../sections/Footer'
import PrivacyPolicy from '../sections/PrivacySection/PrivacyPolicy'

function PrivacyPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Navbar/>
      <PrivacyPolicy />
      <Footer />
      </div>
  )
}

export default PrivacyPage