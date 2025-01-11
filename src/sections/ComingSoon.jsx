import React from 'react'

function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8 animate-pulse">Coming Soon</h1>
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 bg-white rounded-full opacity-75 animate-ping"></div>
          <div className="absolute inset-0 bg-white rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute inset-0 bg-white rounded-full opacity-25 animate-spin"></div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon