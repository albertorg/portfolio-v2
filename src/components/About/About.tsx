import Image from 'next/image';
import { NumberedHeading } from '@/components';

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native', 'Tailwind']
const li = "relative mb-2 pl-5 font-space text-sm before:content-['▹'] before:absolute before:left-0 before:text-primary"

export const About = () => {
  return (
    <section id="about" className='max-w-full'>
      <NumberedHeading title='About Me'/>

      <div className="md:grid grid-cols-[3fr_2fr] gap-12">
        <div>
          <div>
            <p>Hello! I&apos;m Alberto, a front-end developer passionate about creating engaging and functional web experiences.</p>
            <br />
            <p>
              I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
              I consider work an ongoing education, and I&apos;m always looking for opportunities to work with those who are willing to
              share their knowledge as much as I want to learn.
            </p>
            <br />
            <p>My goal is to always build scalable products and performant experiences.</p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] sm:grid-cols-[repeat(3,minmax(140px,200px))] p-0 
            mt-5 overflow-hidden">
            {/* <li className="relative mb-2 pl-5 font-space text-sm before:content-['▹'] before:absolute  
              before:left-0 before:text-primary">
              Prueba
            </li> */}
            {skills.map(skill => <li key={skill} className={li}>{skill}</li>)}
          </ul>
        </div>

        <div className="relative max-w-[300px] mt-12 mx-auto mb-0 w-[70%] md:m-0 md:max-w-[300px] sm:mr-auto">
          <div className="block relative w-full rounded-xl before:block before:absolute before:w-full before:h-full before:rounded-xl
            before:top-0  before:left-0 before:bg-white before:[mix-blend-mode:screen] after:block 
            after:absolute after:w-full after:h-full after:rounded-xl after:top-5  after:left-5 after:border-2 
            after:border-solid after:border-primary after:z-[-1] after:transition-[all_0.25s_cubic-bezier(0.645,0.045,0.355,1)0s] hover:bg-opacity-0 hover:outline-0 hover:after:top-4 
            hover:after:left-4"
          >
            <Image 
              src='/perfil.jpg' 
              width={300}
              height={300} 
              alt='Avatar'
              className='object-cover max-w-full relative rounded-xl'
            />
          </div>
        </div>

      </div>
    </section>
  )
}




// Hello! I'm Alberto, a front-end developer passionate about creating engaging and functional web experiences.

// I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
// I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to
// share their knowledge as much as I want to learn.

// 
// Here are a few technologies I've been working with recently: