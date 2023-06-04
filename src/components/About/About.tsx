import Image from 'next/image';
import { NumberedHeading } from '@/components';


export const About = () => {
  return (
    <section id="about" className='max-w-full'>
      <NumberedHeading title='About Me'/>

      <div className="md:grid grid-cols-[3fr_2fr] gap-12">
        <div className="text">
          <div>
            <p>Hello! I'm Alberto, a front-end developer passionate about creating engaging and functional web experiences.</p>
            <br />
            <p>
              I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
              I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to
              share their knowledge as much as I want to learn.
            </p>
            <br />
            <p>My goal is to always build scalable products and performant experiences.</p>
            <br />
            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="list-skills"></ul>
        </div>

        <div className="relative max-w-[300px] mt-12 mr-auto mb-0 w-[70%] md:m-0 md:max-w-[300px]">
          <div className="wrapper">
            <Image 
              src='/avatar.jpeg' 
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