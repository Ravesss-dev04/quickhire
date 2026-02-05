import React from 'react'
import Link from 'next/link'
import { Briefcase, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo + Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">QuickHirePH</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 QuickHirePH. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe to our newsletter for the latest job listings and platform updates.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input 
                  type="email" 
                  placeholder="Your" 
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full min-w-0"
                />
              </div>
              <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
