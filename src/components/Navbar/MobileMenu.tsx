import { navLinks } from "@/data";
import { useClickOutside } from "@/hooks";
import Link from "next/link";
import { useState, useEffect } from 'react';


export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const menuRef = useClickOutside(() => setMenuOpen(false))

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const onResize = (e: UIEvent) => {
    if ((e.currentTarget as Window).innerWidth > 768) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.className = menuOpen ? 'overflow-hidden ' : ''
    const mainElement = document.querySelector('main')
    mainElement && mainElement.classList.toggle('blur', menuOpen)
  }, [menuOpen])

  return (
    <div className="md:hidden flex items-center ">
      <div>
        <div 
          onClick={toggleMenu}
          className="relative z-30 mr-[-15px] p-[15px] transition-[opacity,_filter] duration-160 ease-linear
          flex justify-center items-center"
        >
          <div className="inline-block relative h-6 w-[]">
            <div className={`absolute top-[50%] right-0 w-[30px] h-[2px] rounded-xl bg-primary transition-transform duration-[0.22s]
              ${menuOpen ? 'delay-[0.12s] rotate-[225deg] ease-[cubic-bezier(0.215,0.61,0.355,1)] before:w-full before:top-0 before:opacity-0' 
                : 'delay-0 rotate-0 ease-[cubic-bezier(0.55,0.055,0.675,0.19)] before:w-[80%] before:top-[-10px] before:opacity-1'}
              before:block before:absolute before:left-auto before:right-0 before:w-12 before:bg-primary before:h-[2px]
              before:rounded-[5px] before:ease-[ease] after:block after:absolute after:left-auto 
              after:duration-100 after:right-0 after:w-12 after:bg-primary after:h-[2px] after:rounded-[5px] after:ease-[ease] 
              ${menuOpen ? 'after:w-full after:bottom-0 after:rotate-[-90deg] after:[transition:_bottom_0.1s,transform_0.15s_0.12s] before:[transition:_top_0.1s,opacity_.2s]' 
              : 'after:w-[80%] after:bottom-[-10px] after:rotate-0 after:[transition:_bottom_0.1s_0.25s,transform_0.22s] before:[transition:_top_0.1s_0.22s]'}`}/>
          </div>
        </div>

        <aside ref={menuRef} className={`flex justify-center items-center fixed top-0 bottom-0 right-0 py-[50px] px-[10px] w-[min(75vw,_400px)]
          h-screen outline-0 bg-base-200 shadow-xl z-20 ${menuOpen ? 'translate-x-[0vw]' : 'translate-x-[100vw]'}
          transition-all duration-300`}>
          <nav className="w-full flex justify-center font-space text-center">
            {navLinks && (
              <ol className="w-full">
                {navLinks.map(({ url, name }) => (
                  <li key={url} className="mb-5 relative [counter-increment:_item_1] before:content-['0'_counter(item)_'.'] before:block
                    before:text-primary before:text-sm">
                    <Link
                      onClick={toggleMenu} 
                      href={url} scroll={false}
                      className="w-full pt-[3px] pb-5 text-white">
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}

          </nav>
        </aside>
      </div>
    </div>
  )
}

