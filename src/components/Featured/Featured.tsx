import { featured } from "@/data"
import { NumberedHeading } from "@/components"
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import Image from "next/image";


export const Featured = () => {
  return (
    <section id="projects">
      <NumberedHeading title="Projects" />

      <div className="flex flex-col gap-16 sm:gap-24">
        {
          featured.map((project, idx) => {
            const { title, external, techs, github, cover, descriptionHtml } = project;

            return (
              <div key={title} className="grid gap-[10px] grid-cols-12 items-center group relative">
                <div className="relative col-[1_/_-1] row-span-full group-odd:text-right group-odd:col-[1/-1]
                  sm:col-[1_/_7] sm:group-odd:col-[7/-1]">
                  <p className="my-[10px] text-primary font-space text-xs">
                    Featured Project
                  </p>
                  <h3 className="text-white text-[clamp(21px,5vw,28px)] leading-10">
                    {title}
                  </h3>
                  <div
                    className="shadow-lg relative z-20 p-6 rounded-xl bg-base-200"
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />

                  {techs.length && (
                    <ul className="flex flex-nowrap relative z-20 mt-6 mb-[10px] gap-5 
                      text-[13px] sm:text-sm group-odd:justify-end">
                      {techs.map((tech) => (
                        <li key={tech} className="font-space whitespace-nowrap">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center relative mt-[10px] ml-[-10px] group-odd:justify-end">
                    {github && (
                      <a
                        className="p-[10px]"
                        rel="noreferrer"
                        target="_blank"
                        href={github}
                        aria-label="GitHub Link"
                      >
                        <AiOutlineGithub
                          className="w-5 h-5 hover:text-white transition-colors "
                        />
                      </a>
                    )}
                    {external && (
                      <a
                        className="p-[10px] ml-[-5px]"
                        rel="noreferrer"
                        target="_blank"
                        href={external}
                        aria-label="External Link"
                      >
                        <FiExternalLink
                          className="w-5 h-5 hover:text-white transition-colors"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div className="shadow-sm col-[6_/_-1] absolute top-1 right-0 max-w-[250px] row-span-full -z-10 w-full 
                group-odd:col-[1/8] group-odd:left-0 sm:max-w-full sm:col-[6_/_-1] sm:relative">
                  <a href={external || github || '#'}>
                    <div className="relative overflow-hidden">
                      <div className="w-full" />
                      <Image
                        src={cover}
                        alt={title}
                        width={520}
                        height={324}
                        className="object-cover object-[center_center] max-w-full rounded-xl top-0 left-0 w-full h-full 
                          max-[400px]:brightness-75 brightness-90"
                      />
                    </div>
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
