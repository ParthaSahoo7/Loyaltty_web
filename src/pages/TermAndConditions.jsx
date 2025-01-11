import React from 'react'
import { Navbar } from '../navigation/Navbar'
import { Footer } from '../sections/Footer'
import TermCondition from '../sections/TermSection/TermCondition'

function TermAndConditions() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Navbar/>
      <TermCondition />
      <Footer />
      </div>
  )
}

export default TermAndConditions