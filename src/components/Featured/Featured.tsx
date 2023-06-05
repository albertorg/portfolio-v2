import { featured } from "@/data/featured"
import { NumberedHeading } from "@/components"
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import Image from "next/image";


export const Featured = () => {
  return (
    <section>
      <NumberedHeading title="Featured Projects"/>

      <div>
        {
          featured.map((project, idx) => {
            const { title, external, techs, github, cover, descriptionHtml } = project;

            return (
              <div key={title} className="grid gap-[10px] grid-cols-12 items-center ?">
                <div className="relative col-[1_/_7] row-span-full ">
                  <p className="my-[10px] text-primary font-space text-xs">
                    Featured Project
                  </p>
                  <h3 className="text-white text-[clamp(24px,5vw,28px)]">
                    {title}
                  </h3>
                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />

                  {techs.length && (
                    <ul className="project-tech-list">
                      {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="styled project link">
                    {github && (
                      <a rel="noreferrer" target="_blank" href={github} aria-label="GitHub Link">
                        <AiOutlineGithub />
                      </a>
                    )}
                    {external && (
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={external}
                        aria-label="External Link"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <div className="styledProjectImgWrapper">
                  <a href={external || github || '#'}>
                    <div className="img-wrapper">
                      <div className="img-cont" />
                      <Image 
                        src={cover} 
                        alt={title} 
                        width={100} 
                        height={100}
                        className="object-cover object-center max-w-full rounded-xl" 
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
