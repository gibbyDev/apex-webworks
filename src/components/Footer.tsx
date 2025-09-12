import React from 'react'

const Footer = () => {
  return (
          <footer className="mt-16 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white tracking-tight">Apex Webworks</span>
            <span className="hidden md:inline-block px-2 py-1 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xs font-semibold text-white/90 shadow">
              Next.js & Tailwind
            </span>
          </div> */}
          <nav className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>
          <div className="text-gray-400 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Apex Webworks. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer