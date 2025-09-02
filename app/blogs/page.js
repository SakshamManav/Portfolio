"use client"
import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-2xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nothing to see here</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">My blog will be live soon — articles, tutorials and project write-ups are on the way. Stay tuned!</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="inline-block px-5 py-3 bg-white text-black rounded-md font-medium">Go home</Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">In the meantime, check out my projects on the Projects page.</p>
      </div>
    </div>
  )
}
