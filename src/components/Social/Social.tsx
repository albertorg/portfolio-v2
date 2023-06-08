import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { socialMedia } from "@/data"

export const Social = () => {
  return (
    <div className='w-10 fixed bottom-0 left-8 z-30 text-white hidden lg:block'>
      <ul className='flex flex-col items-center group'>
        {socialMedia &&
          socialMedia.map(({ url, name }) => (
            <li key={name} className='p-[10px] last-of-type:mb-5 transition hover:text-primary hover:translate-y-[-3px]'>
              <a rel="noreferrer" target="_blank" href={url} aria-label={name}>
                {name === 'Instagram' && <FaInstagram className="w-[18px] h-[18px] hover:text-primary transition-colors" />}
                {name === 'GitHub' && <AiOutlineGithub className="w-[18px] h-[18px] hover:text-primary transition-colors" />}
                {name === 'Twitter' && <AiOutlineTwitter className="w-[18px] h-[18px] hover:text-primary transition-colors" />}
                {name === 'Linkedin' && <FaLinkedinIn className="w-[18px] h-[18px] hover:text-primary transition-colors" />}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}
