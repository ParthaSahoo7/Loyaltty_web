import React from 'react'
import { Navbar } from '../navigation/Navbar'
import ComingSoon from '../sections/ComingSoon'
import { Footer } from '../sections/Footer'

function ComingSoonPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Navbar/>
      <ComingSoon />
      <Footer />
      </div>
  )
}

export default ComingSoonPage