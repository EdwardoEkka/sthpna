import React from 'react'
import { HardHat } from 'lucide-react'

const Footer = () => {
  return (
    <div>
            <footer className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HardHat className="h-8 w-8 text-primary mx-auto mb-4" />
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
