import { email } from "@/data"


export const Email = () => {
  return (
    <div className='w-10 fixed bottom-0 right-8 z-30 text-white hidden lg:block'>
      <div className="flex items-center relative">
        <a 
          href={`mailto:${email}`} 
          className="[writing-mode:vertical-rl] my-5 p-[10px] font-space text-sm tracking-widest
            transition hover:text-primary hover:translate-y-[-3px]">
          {email}
        </a>
      </div>
    </div>
  )
}
