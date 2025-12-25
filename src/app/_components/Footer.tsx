'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane
} from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <footer className='relative w-full py-12 lg:py-16 px-5 lg:px-20 overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/Images/footer_bg.png'
          alt='Footer Background'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/70' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {/* Brand Section */}
          <div>
            <div className='mb-4'>
              <Image
                src='/Images/Logo_Footer.svg'
                alt='Tinytales Logo'
                width={150}
                height={60}
                className='h-auto w-auto'
              />
            </div>
            <p className='text-white text-sm leading-relaxed opacity-90'>
              Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsam in eos qui consequatur ab. Soluta dolor quae Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae
            </p>
          </div>

          <div className='flex justify-between gap-12'>
            {/* Let Us Help Section */}
            <div>
              <h3 className='text-white font-bold text-lg mb-6'>Let Us Help</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    My Account
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    Categories
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    All Products
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies Section */}
            <div>
              <h3 className='text-white font-bold text-lg mb-6'>Policies</h3>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-sm hover:underline transition-colors'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Send Email & Follow Us Section */}
          <div>
            <h3 className='text-white font-bold text-lg mb-6'>Send Email</h3>
            <form onSubmit={handleEmailSubmit} className='mb-8'>
              <div className='flex flex-col md:flex-row gap-2'>
                <input
                  type='email'
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='flex-1 w-full px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm'
                />
                <Button
                  type='submit'
                  className='bg-[#B89B93] hover:bg-[#A88B83] text-white px-6 rounded-md w-full md:w-auto shrink-0'
                >
                  Send
                </Button>
              </div>
            </form>

            {/* Follow Us Section */}
            <div>
              <h3 className='text-white font-bold text-lg mb-4'>Follow Us</h3>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='text-white hover:opacity-80 transition-opacity'
                  aria-label='Facebook'
                >
                  <FaFacebookF className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='text-white hover:opacity-80 transition-opacity'
                  aria-label='Twitter'
                >
                  <FaTwitter className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='text-white hover:opacity-80 transition-opacity'
                  aria-label='Instagram'
                >
                  <FaInstagram className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='text-white hover:opacity-80 transition-opacity'
                  aria-label='LinkedIn'
                >
                  <FaLinkedinIn className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='text-white hover:opacity-80 transition-opacity'
                  aria-label='WhatsApp'
                >
                  <FaWhatsapp className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='text-white hover:opacity-80 transition-opacity'
                  aria-label='Telegram'
                >
                  <FaTelegramPlane className='w-5 h-5' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer