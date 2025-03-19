import React from 'react'
import { HardHat } from 'lucide-react'

const Footer = () => {
  return (
    <div>
            <footer className="bg-white/10 backdrop-blur-lg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Sponsored Logo (ABG) */}
            <div className="flex flex-col items-center text-center mb-6">
              <span className="text-xs text-white uppercase font-bold">Powered by</span>
              <img
                src="/imgs/sponcer/abg.jpg"
                alt="ABG Logo"
                className="w-28 h-28 object-contain mt-4"
              />
            </div>
            <p className="text-gray-400">
              © 2024 Sthapna. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
