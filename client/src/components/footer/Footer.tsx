import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='bg-black text-white py-12'>
      <div className="container mx-auto px-6">

        <div className="flex flex-wrap justify-between">

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="/home" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/home" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="/home" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/home" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><a href="/home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/home" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="/home" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/home" className="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>


        <div className="text-center text-sm text-gray-400 mt-12">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
