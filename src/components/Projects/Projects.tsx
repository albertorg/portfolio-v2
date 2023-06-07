import { projects } from "@/data/projects";
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { BsFolder2Open } from 'react-icons/bs'

// const PROJECTS_GRID_LIMIT = 6

export const Projects = () => {

  return (
    <section className="flex flex-col items-center">

      <h2 className="text-dynamicH2 font-medium text-white"> 
        Other Projects
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 relative mt-12 
        lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
        {projects &&
          projects.map((project, i) => {
            const { title, descriptionHtml, github, external, techs } = project;

            return (
              <div
                key={title}
                className="cursor-default"
              >
                <div className="flex flex-col items-center relative h-full py-8 px-7 shadow-xl 
                  bg-base-200 rounded-xl transition-transform hover:-translate-y-1 group">
                  <header>
                    <div className="mb-7 flex justify-between">
                      <div className="folder">
                        <BsFolder2Open className="w-9 h-9 fill-primary"/>
                      </div>
                      <div className="mr-[-10px]">
                        {github && (
                          <a 
                            href={github}
                            aria-label="GitHub Link" 
                            className="py-1 px-2"
                          >
                            <AiOutlineGithub className="w-5 h-5 hover:text-primary transition-colors"/>
                          </a>
                        )}
                        {external && (
                          <a
                            href={external}
                            className="py-1 px-2"
                            aria-label="External Link"
                          >
                            <FiExternalLink className="w-5 h-5 hover:text-primary transition-colors"/>
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="group-hover:text-primary transition-colors mb-2 text-lg text-white">
                      {title}
                    </h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                    />
                  </header>

                  <footer className="w-full">
                    {techs && (
                      <ul className="flex items-end grow flex-wrap gap-4 mt-6">
                        {techs.map((tech) => (
                          <li key={tech} className="font-space text-xs leading-4">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                  </footer>
                </div>
              </div>

            );
          })}
      </div>

      {/* {projects && projects.length > 6 && (
        <button type="button" className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )} */}
    </section>
  )
}
