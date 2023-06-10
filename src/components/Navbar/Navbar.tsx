'use client'
import { navLinks } from '@/data'
import { MobileMenu } from './MobileMenu'
import Image from 'next/image'
import { useScrollDirection } from '@/hooks'
import { useState, useEffect } from 'react'


export const Navbar = () => {
  const scrollDirection = useScrollDirection({initialDirection: 'down'})
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`flex fixed w-full z-30 top-0 px-6 sm:px-10 lg:px-[50px] h-[90px] bg-base-100 transition-all duration-300
      ${scrollDirection === 'up' && !scrolledToTop && 'translate-y-0 shadow-xl'}
      ${scrollDirection === 'down' && !scrolledToTop && 'translate-y-[calc(90px_*_-1)] shadow-xl'}`}>
      <nav className='flex justify-between w-full text-white font-space [counter-reset:_item_0]'>
        <div className="cursor-pointer flex items-center">
          <a href="/" aria-label="home" className='w-[42px] h-[42px]'>
            <Image 
              width={45}
              height={50.186}
              src='/logo1.png'
              alt='Alberto Rodriguez Logo'
            />
          </a>
        </div>

        <div className='md:flex items-center hidden'>
          <ol className='flex justify-between'>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={url} className='mx-[5px] relative [counter-increment:_item_1] text-sm lg:text-[1rem] hover:text-primary'>
                  <a href={url} className='p-[10px] hover:after:w-[calc(100%-20px)] transition duration-300
                    after:blok after:w-0 after:h-[2px] after:absolute after:bottom-1 after:bg-primary after:opacity-50 
                    after:left-0 after:transition-all after:duration-200 after:mx-[10px] before:content-["0"_counter(item)_"."]
                    before:text-primary before:mr-[5px] before:text-xs'>
                    {name}
                  </a>
                </li>
              ))}
          </ol>
        </div>

        <MobileMenu />
      </nav>
    </header>
  )
}
