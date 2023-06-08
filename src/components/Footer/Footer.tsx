import { socialMedia } from "@/data"
import Image from "next/image"
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'


export const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col min-h-[70px] p-4 text-center">
      <div className="w-full max-w-[270px] mb-[10px] md:hidden">
        <ul className="flex justify-between">
          {socialMedia &&
            socialMedia.map(({ name, url }) => (
              <li key={name} className="p-[10px]">
                <a href={url} aria-label={name} target="_blank">
                  {name === 'Instagram' && <FaInstagram className="w-5 h-5 hover:text-primary transition-colors"/>}
                  {name === 'GitHub' && <AiOutlineGithub className="w-5 h-5 hover:text-primary transition-colors"/>}
                  {name === 'Twitter' && <AiOutlineTwitter className="w-5 h-5 hover:text-primary transition-colors"/>}
                  {name === 'Linkedin' && <FaLinkedinIn className="w-5 h-5 hover:text-primary transition-colors"/>}
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <p className="font-space text-sm leading-normal">
          Made with
        </p>
        <a rel="noreferrer" target="_blank" href="https://nextjs.org/" className="my-3">
          <Image 
            src="/nextjs-white-logo.svg" 
            width={100} 
            height={100}  
            alt="next logo"/>
        </a>
      </div>

      <div className="font-space text-[9px]">
        <a rel="noreferrer" target="_blank" href="https://github.com/bchiang7/v4" className="p-[10px]">
          <div>Adapted from the Brittany Chiang Portfolio</div>
        </a>
      </div>
    </footer>
  )
}
